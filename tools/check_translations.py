#!/usr/bin/env python3
"""Check that every HTML translation key exists in both portfolio languages.

Usage: python3 tools/check_translations.py
Uses only the Python standard library; no network or API keys required.
"""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
HTML = ROOT / "index.html"
SCRIPT = ROOT / "script.js"

HTML_KEY = re.compile(r'data-i18n=["\']([^"\']+)["\']')
JS_KEY = re.compile(r'(?:^|,)\s*([A-Za-z][A-Za-z0-9_]*)\s*:', re.MULTILINE)


def translation_keys(script: str, language: str) -> set[str]:
    """Read the known top-level copy.en/copy.ar object sections.

    Fail loudly if the source layout changes rather than silently passing.
    This is a static contract check, not a JavaScript parser.
    """
    if language == "en":
        start, end = "  en: {", "\n  ar: {"
    elif language == "ar":
        start, end = "\n  ar: {", "\n  }\n};"
    else:
        raise ValueError("Unsupported language")
    if script.count(start) != 1 or script.count(end) != 1:
        raise ValueError(f"Cannot identify the {language} translation section")
    section = script.split(start, 1)[1].split(end, 1)[0]
    return set(JS_KEY.findall(section))


def main() -> int:
    html = HTML.read_text(encoding="utf-8")
    script = SCRIPT.read_text(encoding="utf-8")
    used = set(HTML_KEY.findall(html))
    if not used:
        print("FAIL: No data-i18n attributes found in index.html")
        return 1
    try:
        english = translation_keys(script, "en")
        arabic = translation_keys(script, "ar")
    except ValueError as error:
        print(f"FAIL: {error}")
        return 1

    failures = []
    for language, available in (("English", english), ("Arabic", arabic)):
        missing = sorted(used - available)
        if missing:
            failures.append(f"{language} missing keys: {', '.join(missing)}")
    only_en = sorted(english - arabic)
    only_ar = sorted(arabic - english)
    if only_en:
        failures.append("Keys only in English: " + ", ".join(only_en))
    if only_ar:
        failures.append("Keys only in Arabic: " + ", ".join(only_ar))

    if failures:
        for failure in failures:
            print("FAIL:", failure)
        return 1
    print(f"PASS: {len(used)} HTML keys covered in English and Arabic ({len(english)} dictionary keys each)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
