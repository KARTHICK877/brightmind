# Bright Mind Kids Academy — Website

A React + Vite website for Bright Mind Kids Academy, with a dedicated
**Child Guidance Academy** section.

## Pages
- **Home** — hero, the four teaching components, quick links
- **About** — philosophy, components, what sets the school apart
- **Programs** — 2-4 & 4-6 year programs, learning modes, methodology, assessment
- **Gallery** — general photos (Activities, Infrastructure, Classroom, Management, Group 2025)
- **Events** — 19 event galleries with jump-navigation
- **Admission** — enquiry form, school details, parent Dos & Don'ts
- **Child Guidance** — the special section (own teal identity + BMCGA logo)

---

## Run it

```bash
npm install      # first time only
npm run dev      # local development  -> http://localhost:5173
npm run build    # production build   -> creates the dist/ folder
npm run preview  # preview the build
```

To publish, upload the **dist/** folder (after `npm run build`) to any web host.

---

## Adding your photos

All photos live under **public/images/**. Just drop files in — no code needed.
Name them **1.jpg, 2.jpg, 3.jpg ...** in order.

### General gallery (5 sections)
```
public/images/gallery/activities/1.jpg
public/images/gallery/infrastructure/1.jpg
public/images/gallery/students-classroom/1.jpg
public/images/gallery/management/1.jpg
public/images/gallery/group-photo-2025/1.jpg
```

### Event galleries (10 photos each)
```
public/images/events/sports-day/1.jpg ... 10.jpg
public/images/events/pongal-celebration/1.jpg ... 10.jpg
```

Event folder names:
vijayadhashami-admission, vinayagar-chathurthi, sports-day, science-day,
independence-day, kamaraj-day, krishna-jayanthi, pongal-celebration,
ramzan, religious-visit, republic-day, diwali-celebration,
educational-trip, fancy-dress, friendship-day, charity-day,
childrens-day, christmas-celebration, colours-day

### How many photos per section?
Open **src/data/galleries.js** and set `count` for each section.
- Default: gallery sections = 1 photo, event sections = 10 photos.
- If a section has fewer photos than `count`, the missing ones show a neat
  labelled placeholder instead of a broken image — so the page never looks broken.
- Using PNGs? change `ext: "jpg"` to `ext: "png"` for that section.

---

## Editing text & contact details

- School name, address, phone, email, written content: **src/data/content.js**
- Section titles / photo counts: **src/data/galleries.js**
- Colours and styling: **src/index.css** (CSS variables at the top)

## Logos
In public/images/logos/:
- brightmind.png — main Kids Academy logo
- bmcga.jpeg — Child Guidance Academy logo
