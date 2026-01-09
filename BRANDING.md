# AccuraX Branding Guide

## Logo

The AccuraX logo features a modern "X" icon in a gradient box that appears before the brand name.

### Logo Components

1. **Icon**: Stylized "X" symbol with blue-to-purple gradient
2. **Background**: Rounded gradient box (from blue #3B82F6 to purple #9333EA)
3. **Brand Name**: "AccuraX" in bold white text

### Visual Design

```
┌─────────────────┐
│  [X Logo] AccuraX │
└─────────────────┘
```

The X logo is:
- Rendered as an SVG icon
- White colored on a gradient background
- Placed in a rounded-lg container (8px border radius)
- Has a subtle shadow effect (shadow-lg shadow-blue-500/20)
- Includes hover animation (scale-105 on hover)

### Color Scheme

- **Primary Gradient**: Blue (#3B82F6) to Purple (#9333EA)
- **Background**: Pure Black (#000000)
- **Text**: White (#FFFFFF)
- **Icon Color**: White on gradient background

### Logo Sizes

Different sizes are used across the platform:

- **Header**: 36px × 36px (w-9 h-9)
- **Footer**: 36px × 36px (w-9 h-9)
- **Login Page**: 40px × 40px (w-10 h-10)
- **Default**: 32px × 32px (w-8 h-8)

### Usage Locations

The X logo appears in:

1. **Header Navigation** (top-left)
   - Logo + "AccuraX" text
   - Clickable link to homepage
   - Hover effect (scales to 105%)

2. **Footer** (brand section)
   - Logo + "AccuraX" text
   - Clickable link to homepage
   - Same hover effect

3. **Login Page** (top of form)
   - Larger logo (40px)
   - Logo + "AccuraX" text
   - Clickable link to homepage

### Technical Implementation

The logo is implemented as a React component in `/src/app/components/Logo.tsx`:

```tsx
// Three variants available:

1. Logo - Full SVG with gradient effects and background circle
   - Use for: Marketing materials, large displays
   - Size: Scalable, default 32×32px

2. LogoIcon - Simplified icon in gradient box (RECOMMENDED)
   - Use for: Header, Footer, Navigation, Login page
   - Size: Typically 36×36px or 40×40px
   - Features: Shadow effect, hover animation

3. LogoCompact - Ultra-compact version
   - Use for: Tight spaces, mobile menu, badges
   - Size: 24×24px
   - Features: Minimal design, smaller rounded corners
```

### Brand Name

- **Full Name**: AccuraX
- **Do NOT use**: AccuraX.in (removed from branding)
- **Font**: Bold, sans-serif
- **Color**: White (#FFFFFF)
- **Size**: Varies by location (text-xl to text-2xl)

### Email Addresses

While ".in" is removed from the brand name, email addresses remain:
- support@accurax.in
- sales@accurax.in

### Spacing & Layout

- **Gap between logo and text**: 0.5rem (gap-2)
- **Logo alignment**: Centered vertically with text
- **Display**: Flexbox with items-center

### Interactive States

- **Default**: Normal size
- **Hover**: Scale to 105% (smooth transition)
- **Active/Click**: Navigation to homepage (/)

### Accessibility

- Logo is wrapped in a semantic link element
- Includes hover states for better UX
- Proper color contrast (white on gradient)
- Clickable area includes both logo and text

### File Locations

- **Component**: `/src/app/components/Logo.tsx`
- **Used in**: 
  - `/src/app/components/Header.tsx`
  - `/src/app/components/Footer.tsx`
  - `/src/app/pages/Login.tsx`

### Design Philosophy

The X logo represents:
- **Precision**: Clean, geometric design
- **Technology**: Modern SVG implementation
- **Trust**: Professional gradient styling
- **Innovation**: Dynamic hover interactions

### Gradient Definition

```css
background: linear-gradient(to bottom right, #3B82F6, #9333EA);

/* In Tailwind */
bg-gradient-to-br from-blue-600 to-purple-600
```

### Shadow Effect

```css
box-shadow: 0 10px 15px -3px rgb(59 130 246 / 0.2);

/* In Tailwind */
shadow-lg shadow-blue-500/20
```

---

## Quick Reference

| Element | Size | Location | Hover Effect |
|---------|------|----------|--------------|
| Header Logo | 36×36px | Top Navigation | Scale 105% |
| Footer Logo | 36×36px | Footer Brand | Scale 105% |
| Login Logo | 40×40px | Login Form | Scale 105% |
| Icon Color | White | All | - |
| Background | Gradient | All | - |
| Brand Text | text-xl/2xl | Next to logo | - |

---

**Note**: Always use the `LogoIcon` component from `/src/app/components/Logo.tsx` for consistency across the platform.

### Which Logo to Use?

| Location | Component | Reason |
|----------|-----------|--------|
| Header | `LogoIcon` | Professional, recognizable |
| Footer | `LogoIcon` | Consistent branding |
| Login Page | `LogoIcon` | Trust and familiarity |
| Mobile Menu | `LogoCompact` | Space-efficient |
| Badges | `LogoCompact` | Clean, minimal |
| Marketing | `Logo` | Full featured design |