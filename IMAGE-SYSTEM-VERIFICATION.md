# FINAL IMAGE SYSTEM — v10 VERIFICATION

**Architecture:** semantic image slots; no generic image gallery/rail.
**Automatic behaviour:** place the exact JPG in the exact folder named by `IMAGE-PROMPTS.md`; the already-wired `<img>` reference will display it. Missing files remove only their own slot via `onerror`.

- Canonical assets: 31
- Canonical JPGs currently supplied: 19
- Canonical visible-page assets wired: 30 / 30
- Missing supplied JPGs: 12
- Unwired visible assets: 0
- Broken canonical refs detected: 0

## Missing JPGs (not supplied yet)
- `insights/jo-insights-editorial-01.jpg`
- `insights/jo-insights-boardroom-02.jpg`
- `insights/jo-insights-research-03.jpg`
- `insights/jo-insights-regulatory-04.jpg`
- `insights/jo-insights-economic-05.jpg`
- `career/jo-career-executive-01.jpg`
- `career/jo-career-audit-02.jpg`
- `career/jo-career-leadership-03.jpg`
- `education/jo-education-01.jpg`
- `research/jo-research-01.jpg`
- `training/jo-training-01.jpg`
- `contact/jo-contact-01.jpg`

## Placement rule
- Services index: service images are inside their matching capability cards.
- Industries index: industry images are inside their matching industry cards.
- Home/About/Discourse/Career/Education/Research/Training/Contact: images are inside their relevant content sections.
- No image is appended as a detached gallery.
- Open Graph image is metadata-only.