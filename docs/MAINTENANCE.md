# Portfolio maintenance and release checklist

This repository is a static HTML, CSS, and JavaScript portfolio. It does not require a package manager or a build step.

## Preview locally

From the repository root:

```bash
python3 -m http.server 5500
```

Open http://localhost:5500. On Windows, `py -m http.server 5500` may be used if Python is installed.

## Before proposing a change

1. Check existing open pull requests to avoid overlapping work.
2. Keep university and group-project materials out of this personal portfolio repository.
3. Do not commit credentials, API keys, `.env` files, or unpublished personal information.
4. Make the smallest useful change and explain its user-facing effect.
5. For project descriptions, link only to repositories that actually exist and distinguish prototypes from completed applications.

## Manual smoke tests

- **Navigation:** Test header links, skip-to-content, and mobile menu open/close at narrow widths.
- **Languages:** Switch between English and Arabic; check text, RTL layout, button labels, and dialog close labels.
- **Projects:** Try every filter and verify the visible count matches the displayed cards.
- **Details:** Open and close project details using both mouse and keyboard; check focus returns to the triggering control.
- **Keyboard:** Navigate with Tab and Shift+Tab; confirm focus remains visible.
- **Motion:** With reduced-motion enabled, confirm content remains readable and usable.
- **Assets:** Check the profile image, favicon, CSS, and JavaScript load without errors.
- **Links:** Confirm external links and contact actions go to their intended destinations.

## Automated checks

The default branch currently has no required build command. Two proposed checks are under review:

- PR #1 proposes a local asset, anchor, and duplicate-ID checker.
- PR #3 proposes a GitHub Actions JavaScript syntax check.

Do not claim these checks run on `main` until their pull requests are reviewed and merged. Once available, run the documented checks before merging further changes.

## Pull request review

For each change, record:

- What problem it solves and which files changed.
- What was actually tested, and what was not tested.
- Screenshots for visible UI changes when possible.
- Any overlap with other open PRs.

Keep changes on separate branches. Merge or deploy only after the portfolio owner reviews and approves them.
