## UI changes and review screenshots

If the work does not change what a person sees on a screen, skip this section.

Do not chase a design score. Work from the defect list in the handoff or review. Reuse existing brand, type, and color tokens. Do not let polish drain brand color to gray.

When a UI change is ready for review, attach a comparison pack to the pull request:
- Before (current main) and after of each changed screen
- Light and dark if the product has both
- Mobile (390) and desktop (1280) at minimum
- Empty, error, or loading states this screen has
- An annotated before-and-after composite with numbered callouts when the changes are polish-scale

Throw out clipped, wrong-page, or unreadable captures.

How to put screenshots on the PR: GitHub’s comment API does not show a local file path pasted into Markdown. As of GitHub CLI 2.99.0 (September 2026), upload shots with `--attach`. You need write access to the repo.

1. Check `gh --version`. If it is older than 2.99.0, update GitHub CLI. Do not report that GitHub forbids images.
2. Write the PR body in a markdown file that references the local files, for example `![Home, 1280, after](./home-1280-after.png)`.
3. Update the PR with: `gh pr edit --body-file ./pr-body.md --attach ./home-1280-before.png --attach ./home-1280-after.png`

gh uploads each file and rewrites the local paths to github.com/user-attachments/assets/... URLs, the same kind a browser paste creates. Repeat `--attach` for every image. Keep each image under 10 MB. PNG, JPEG, GIF, and WebP are fine.

Do not commit review screenshots into the repo (not under docs/, public/, screenshots/, or content image folders). They are not site assets. On private repos, committed files also will not render in the PR description via raw.githubusercontent.com. Do not upload personal or admin UI shots to a public bucket.

If you can message Designer, send the same pack there. If you cannot, the pull request is the mailbox. Do not open a live design chat during the build.

Docs: https://docs.github.com/en/github-cli/github-cli/attaching-files-with-github-cli
