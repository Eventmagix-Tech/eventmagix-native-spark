
# SEO Improvements for Navigation

This plan implements comprehensive SEO enhancements to the navigation bar and related components to improve search engine visibility and accessibility.

## Overview

The changes will make the navigation more SEO-friendly by using semantic HTML, proper ARIA attributes, React Router's Link component for internal navigation, and fixing hash links to work correctly across all pages.

## Changes to Implement

### 1. Navbar Component (`src/components/Navbar.tsx`)

**Semantic HTML Structure:**
- Wrap the navigation in a `<header>` element for proper document structure
- Add `role="navigation"` and `aria-label="Main navigation"` to the nav element

**Use React Router Link Component:**
- Replace `<a href="/">` with `<Link to="/">` for the logo
- Use `Link` component for internal routes (Contact page)

**Fix Hash Links for Cross-Page Navigation:**
- Change `#features` to `/#features` and `#pricing` to `/#pricing`
- This ensures hash links work when navigating from sub-pages like `/contact`

**Smart Link Handling:**
- Create logic to detect if user is on home page
- If on home page: use smooth scroll for hash links
- If on other pages: navigate to home page with hash

**Improved Alt Text:**
- Update logo alt text to be more descriptive: "Eventmagix - Native Mobile Event App Platform"

**Mobile Menu Accessibility:**
- Add `aria-expanded` attribute to mobile menu button
- Add `id` to mobile menu for proper aria-controls relationship

### 2. Footer Component (`src/components/Footer.tsx`)

**Fix Hash Links:**
- Update `#features` and `#pricing` to `/#features` and `/#pricing`
- Ensures footer links work correctly from any page

### 3. Skip to Content Link

**Add Skip Link (in Navbar):**
- Add a visually hidden "Skip to main content" link at the top of the header
- This link becomes visible on keyboard focus
- Improves accessibility for screen reader users and helps SEO crawlers

### 4. Main Content Landmarks

**Update Index.tsx and Contact.tsx:**
- Add `id="main-content"` to main elements for skip link target

---

## Technical Details

### Updated navLinks Structure
```text
navLinks will include a "type" field to distinguish:
- hash links (scroll on home, navigate+scroll on other pages)  
- internal routes (use Link component)
```

### Smart Hash Link Handler
```text
When clicking a hash link:
1. Check if on home page (pathname === "/")
2. If yes: smooth scroll to section
3. If no: navigate to "/#section" which will scroll after page load
```

### Skip Link Styling
```text
- Positioned absolutely off-screen by default
- On focus: moves into view with visible styling
- Uses brand colors for consistency
```

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/Navbar.tsx` | Semantic HTML, Link component, hash link fixes, skip link, ARIA attributes |
| `src/components/Footer.tsx` | Fix hash links to use `/#features` format |
| `src/pages/Index.tsx` | Add `id="main-content"` to main element |
| `src/pages/Contact.tsx` | Add `id="main-content"` to main element |

## Expected Outcomes

- Improved search engine crawlability with semantic HTML
- Better accessibility scores (WCAG compliance)
- Hash links work correctly from any page on the site
- Proper internal navigation using React Router
- Skip link for keyboard/screen reader users
