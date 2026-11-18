#!/usr/bin/env python3
"""Check internal links and local assets in the static portfolio.

Run from anywhere: python3 tools/check_site_links.py
No third-party packages or network access required.
"""

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent.parent
HTML = ROOT / "index.html"


class LinksAndIds(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.references = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if attributes.get("id"):
            self.ids.append(attributes["id"])
        if tag in {"a", "link"} and attributes.get("href"):
            self.references.append((tag, attributes["href"]))
        if tag in {"img", "script", "source"} and attributes.get("src"):
            self.references.append((tag, attributes["src"]))


def main():
    if not HTML.is_file():
        print(f"Missing entry point: {HTML}")
        return 1

    parser = LinksAndIds()
    parser.feed(HTML.read_text(encoding="utf-8"))
    ids = set(parser.ids)
    errors = []

    for name, count in Counter(parser.ids).items():
        if count > 1:
            errors.append(f"Duplicate HTML id: #{name} ({count} times)")

    for tag, reference in parser.references:
        parsed = urlsplit(reference)
        if parsed.scheme or parsed.netloc or reference.startswith("//"):
            continue  # External URL, mailto, tel, data URL, etc.

        path = unquote(parsed.path)
        fragment = unquote(parsed.fragment)
        if path and not path.startswith("/"):
            local_file = (ROOT / path).resolve()
            if not local_file.is_relative_to(ROOT) or not local_file.is_file():
                errors.append(f"<{tag}> missing local file: {reference}")
        elif path.startswith("/"):
            continue  # Site-root paths may be provided by the deployment.

        if fragment and (not path or path == "index.html") and fragment not in ids:
            errors.append(f"<{tag}> missing anchor target: #{fragment}")

    if errors:
        print("Portfolio link check failed:")
        for error in errors:
            print(f"  - {error}")
        return 1

    print(f"OK: checked {len(parser.references)} references and {len(parser.ids)} element IDs")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
