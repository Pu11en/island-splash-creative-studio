# Island Splash Creative Studio - Specification

## Project Overview
- **Name:** Island Splash Creative Studio
- **Type:** Web Application (Next.js)
- **Purpose:** Social media content generator for Island Splash beverage brand
- **Vibe:** Florida Caribbean - tropical, refreshing, energetic

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Color Palette
- **Primary:** Lime Green (#32CD32 / #84CC16)
- **Secondary:** Ocean Turquoise (#14B8A6)
- **Accent:** Sunset Orange (#F97316)
- **Background:** Cream White (#FFFBF5)
- **Text:** Charcoal (#1F2937)

## Core Features

### 1. Brand Manager
- Upload brand logo
- Set brand colors (primary, secondary, accent)
- Save product images
- Brand profile management

### 2. Creative Generator
- Text-to-image prompt input
- Reference image upload
- Style templates (Tropical, Minimal, Bold, Party)
- Platform selection (Instagram, TikTok, Facebook)
- Aspect ratio (9:16, 1:1, 16:9)

### 3. Template Library
- Pre-made layouts for social media
- Editable text overlays
- Background templates
- Platform-specific sizes

### 4. Asset Library
- Upload product shots
- Store logos
- Background image library
- Organize by category

### 5. Export
- Download as PNG, JPG
- Copy to clipboard
- Direct social media sharing

## Pages Structure

### `/` - Dashboard
- Quick actions (Create New, Browse Templates, Manage Assets)
- Recent projects
- Brand overview

### `/create` - Creative Generator
- Prompt input
- Reference image upload
- Style/Platform selection
- Generate button
- Preview area

### `/templates` - Template Library
- Grid of templates
- Filter by platform/type
- Preview and use

### `/assets` - Asset Library
- Upload interface
- Gallery view
- Organize/manage assets

### `/brand` - Brand Manager
- Logo upload
- Color configuration
- Product images

## UI Components

### Navigation
- Sidebar with icons
- Active state indicator
- Smooth transitions

### Cards
- Rounded corners (12px)
- Subtle shadows
- Hover effects

### Buttons
- Primary: Lime green
- Secondary: Outline
- Rounded (8px)

### Inputs
- Rounded (8px)
- Focus ring
- Clear labels

## Animations (Framer Motion)
- Page transitions (fade + slide)
- Card hover (scale + shadow)
- Button press (scale)
- Modal open (fade + scale)
- Staggered list reveals

## Acceptance Criteria
1. App builds without errors
2. All pages render correctly
3. Navigation works between all pages
4. Responsive on mobile/tablet/desktop
5. Animations are smooth
6. Brand colors can be customized
7. Assets can be uploaded (UI only, no backend)
