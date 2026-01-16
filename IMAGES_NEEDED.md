# Images Needed for Portfolio

## Required Images and Their Locations

### 1. **Books Stack Image**
- **Filename**: `books-stack.png`
- **Location**: `/public/books-stack.png`
- **Used in**: Skills Section (right side)
- **Description**: Stack of design/tech books showing titles and covers
- **Recommended size**: 400x300px or higher resolution
- **Reference**: Screenshot shows a tilted stack of books with visible titles

---

### 2. **Project Screenshots/Mockups**

#### NEXA EDU Project
- **Location**: Currently using placeholder in phone mockup
- **Note**: Phone mockup is generated with CSS, but you could add actual screenshots

#### GueCyber LMS Project  
- **Filenames needed**: 
  - `guecyber-phone-1.png`
  - `guecyber-phone-2.png`
  - `guecyber-phone-3.png`
- **Location**: `/public/projects/guecyber/`
- **Used in**: GueCyberProject component (3 angled phone mockups)
- **Description**: Screenshots of the LMS platform interface
- **Recommended size**: 375x812px (iPhone mockup size)

#### Styleit Padi Backend
- **Filenames needed**:
  - `styleit-backend-1.png`
  - `styleit-backend-2.png`
  - `styleit-backend-3.png`
  - `styleit-backend-4.png`
- **Location**: `/public/projects/styleit/`
- **Used in**: StyleitPadiProject component (4 screenshot grid)
- **Description**: Backend architecture diagrams, API documentation, or dashboard screenshots
- **Recommended size**: 800x600px

#### Teaching & Training Project
- **Filenames needed**:
  - `teaching-topic-1.png`
  - `teaching-topic-2.png`
  - `teaching-topic-3.png`
  - `teaching-topic-4.png`
- **Location**: `/public/projects/teaching/`
- **Used in**: TeachingProject component
- **Description**: Screenshots from teaching materials, presentations, or student work
- **Recommended size**: 800x600px

---

### 3. **Projects Section Cards**
- **Current**: Using text placeholders
- **Optional**: Could add thumbnail images for each project card
- **Location**: `/public/projects/thumbnails/`
- **Filenames**:
  - `nexa-thumb.png`
  - `guecyber-thumb.png`
  - `styleit-thumb.png`
  - `teaching-thumb.png`

---

### 4. **Journey Section**
- **Current**: Using CSS-generated phone mockup with text
- **Optional**: Could add actual app screenshots inside the phone
- **Location**: `/public/journey/`

---

## Summary

### **CRITICAL (Must Have)**:
1. **books-stack.png** - For Skills section ✅ PRIORITY

### **RECOMMENDED (Project Screenshots)**:
2. GueCyber LMS - 3 phone screenshots
3. Styleit Padi - 4 backend screenshots  
4. Teaching - 4 topic screenshots

### **OPTIONAL (Nice to Have)**:
5. Project thumbnail images for cards
6. Journey section app screenshots

---

## How to Add Images

1. Create a `/public` folder in your project root (if not exists)
2. Add `books-stack.png` directly in `/public/`
3. Create subfolders for projects: `/public/projects/guecyber/`, etc.
4. Place images in their respective folders
5. Images will be accessible at `/books-stack.png`, `/projects/guecyber/phone-1.png`, etc.

---

## Current Placeholders in Code

- **SkillsSection.tsx** line 243: `<img src="/books-stack.png" .../>`
- **GueCyberProject.tsx**: Using CSS-generated phone mockups (no images needed currently)
- **StyleitPadiProject.tsx**: Using `.screenshotPlaceholder` divs
- **TeachingProject.tsx**: Using `.screenshotPlaceholder` divs
- **ProjectsSection.tsx**: Using text placeholders in project cards
- **NexaProject.tsx**: Using CSS-generated phone mockup
