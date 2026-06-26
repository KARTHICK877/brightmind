// ─────────────────────────────────────────────────────────────────────────
//  PHOTO CONFIGURATION
//  HOW TO ADD YOUR PHOTOS
//  Drop image files into the folders below. Filenames must be 1.jpg, 2.jpg, …
//
//  General gallery  ->  public/images/gallery/<slug>/1.jpg, 2.jpg ...
//  Event galleries  ->  public/images/events/<slug>/1.jpg, 2.jpg ...
//
//  `count` = how many photos that section has. Change it after you add photos.
//  .jpg is assumed; if you use .png, change `ext` for that section.
// ─────────────────────────────────────────────────────────────────────────

// ===== GENERAL GALLERY (10 photos per section) =====
export const gallerySections = [
  { slug: "activities",          title: "Activities",            emoji: "🎨", count: 10, ext: "jpg" },
  { slug: "infrastructure",      title: "Infrastructure",        emoji: "🏫", count: 10, ext: "jpg" },
  { slug: "students-classroom",  title: "Students at Classroom", emoji: "📚", count: 10, ext: "jpg" },
  { slug: "management",          title: "Management",            emoji: "🤝", count: 10, ext: "jpg" },
  { slug: "group-photo-2025",    title: "Group Photo 2025",      emoji: "📸", count: 10, ext: "jpg" },
];

// ===== EVENT GALLERIES (each has up to 10 photos) =====
// Real BMKA event names from the Day Book
export const eventSections = [
  // Signature annual events first
  { slug: "little-spartans",         title: "Little Spartans — Sports Day",    emoji: "🏃", count: 10, ext: "jpg", featured: true },
  { slug: "saarang-kids-cosmos",     title: "Saarang Kids Cosmos — Annual Day",emoji: "🌌", count: 10, ext: "jpg", featured: true },
  { slug: "little-star-flair-hunt",  title: "Little Star Flair Hunt",          emoji: "⭐", count: 10, ext: "jpg", featured: true },
  { slug: "graduation-day",          title: "Graduation Day",                  emoji: "🎓", count: 10, ext: "jpg", featured: true },
  // Festivals & cultural
  { slug: "vijayadhashami-admission",title: "Vijayadhashami Admission",        emoji: "🪔", count: 10, ext: "jpg" },
  { slug: "vinayagar-chathurthi",    title: "Vinayagar Chathurthi",            emoji: "🐘", count: 10, ext: "jpg" },
  { slug: "pongal-celebration",      title: "Pongal Celebration",              emoji: "🌾", count: 10, ext: "jpg" },
  { slug: "independence-day",        title: "Independence Day",                emoji: "🇮🇳", count: 10, ext: "jpg" },
  { slug: "republic-day",            title: "Republic Day",                    emoji: "🎏", count: 10, ext: "jpg" },
  { slug: "diwali-celebration",      title: "Diwali Celebration",              emoji: "✨", count: 10, ext: "jpg" },
  { slug: "christmas-celebration",   title: "Christmas Celebration",           emoji: "🎄", count: 10, ext: "jpg" },
  { slug: "ramzan",                  title: "Ramzan",                          emoji: "🌙", count: 10, ext: "jpg" },
  { slug: "krishna-jayanthi",        title: "Krishna Jayanthi",               emoji: "🦚", count: 10, ext: "jpg" },
  { slug: "kamaraj-day",             title: "Kamaraj Day",                    emoji: "🎖️", count: 10, ext: "jpg" },
  // Activities & learning
  { slug: "science-day",             title: "Science Day",                     emoji: "🔬", count: 10, ext: "jpg" },
  { slug: "educational-trip",        title: "Learning Adventure Trips",        emoji: "🚌", count: 10, ext: "jpg" },
  { slug: "summer-camp",             title: "Summer Camp — Little Tinkers",    emoji: "🏕️", count: 10, ext: "jpg" },
  { slug: "safety-drills",           title: "Safety Drills & Social Campaigns",emoji: "🧯", count: 10, ext: "jpg" },
  { slug: "fancy-dress",             title: "Fancy Dress",                     emoji: "🎭", count: 10, ext: "jpg" },
  { slug: "friendship-day",          title: "Friendship Day",                  emoji: "🤝", count: 10, ext: "jpg" },
  { slug: "colours-day",             title: "Colours Day",                     emoji: "🎨", count: 10, ext: "jpg" },
  { slug: "childrens-day",           title: "Children's Day",                  emoji: "🎈", count: 10, ext: "jpg" },
  { slug: "charity-day",             title: "Random Act of Kindness",          emoji: "💝", count: 10, ext: "jpg" },
  { slug: "religious-visit",         title: "Universal Brotherhood Visit",     emoji: "🛕", count: 10, ext: "jpg" },
];

// Helper: build the list of image paths for a section
export function buildImagePaths(base, section) {
  const list = [];
  for (let i = 1; i <= section.count; i++) {
    list.push(`${import.meta.env.BASE_URL}images/${base}/${section.slug}/${i}.${section.ext}`);
  }
  return list;
}
