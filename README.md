# dgvai.github.io

Source for [dgvai.github.io](https://dgvai.github.io), the academic website of Jalal Uddin.

It is a plain Jekyll site that GitHub Pages builds directly from the `main` branch. There is no build workflow, theme gem or JavaScript framework.

## Editing content

Almost everything lives in `_data/`:

| File                    | What it holds                                                  |
| ----------------------- | -------------------------------------------------------------- |
| `profile.yml`           | Name, title, affiliation, photo, home page bio, research interests, links |
| `news.yml`              | News items on the home page (newest first)                     |
| `publications.yml`      | Publications page intro and papers; `selected: true` puts one on the home page |
| `projects.yml`          | Research projects                                              |
| `software.yml`          | Open-source apps and Laravel packages                          |
| `notes.yml`             | Short thoughts for the Sticky Notes page, optionally linking a Threads post |
| `cv.yml`                | Education, experience, service, awards, skills for the CV page |

The Projects and CV pages (`projects.html`, `cv.html`) are hidden for now with `published: false`. To bring one back, remove that line and add the page to the nav list in `_includes/header.html`.

Paper PDFs go in `assets/pdf/`. Name each file after the paper's `key` and set `pdf: <key>.pdf` on that paper in `publications.yml`.

Styles are in `assets/css/main.css`.

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Deployment

In the repository settings under **Pages**, set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`. Every push to `main` republishes the site.

Icons are from [Font Awesome Free](https://fontawesome.com) (CC BY 4.0).
