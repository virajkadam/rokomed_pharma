# Rokomed Pharma UI/UX Guidelines

## Design System Overview

### Brand Colors
```css
/* Primary Colors */
--primary: #005BAA;     /* Cipla-inspired corporate blue */
--secondary: #00A859;   /* Health/wellness green */
--accent: #FF4B55;      /* Call-to-action red */

/* Neutral Colors */
--neutral-100: #FFFFFF;
--neutral-200: #F8FAFC;
--neutral-300: #E2E8F0;
--neutral-400: #94A3B8;
--neutral-500: #64748B;
--neutral-600: #475569;
--neutral-700: #334155;
--neutral-800: #1E293B;
--neutral-900: #0F172A;

/* Semantic Colors */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

### Typography
```css
/* Font Families */
--font-primary: 'Inter', sans-serif;
--font-secondary: 'Roboto', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

## Component Architecture

### Header Component
```jsx
<Header>
  {/* Top Bar */}
  <TopBar>
    <EmergencyContact />
    <LanguageSelector />
    <QuickLinks />
  </TopBar>

  {/* Main Header */}
  <MainHeader>
    <Logo />
    <MainNavigation />
    <SearchBar />
    <WhatsAppButton />
  </MainHeader>

  {/* Mega Menu (on hover) */}
  <MegaMenu>
    <ProductCategories />
    <FeaturedProducts />
    <QuickContact />
  </MegaMenu>
</Header>
```

### Hero Section Patterns
```jsx
<HeroSection>
  {/* Main Slider */}
  <Slider>
    <SlideContent>
      <h1>Leading Healthcare Innovation</h1>
      <p>WHO-GMP Certified Manufacturing</p>
      <CTAButton>Explore Products</CTAButton>
    </SlideContent>
    <CertificationBadges>
      <Badge type="WHO-GMP" />
      <Badge type="ISO" />
      <Badge type="FDA" />
    </CertificationBadges>
  </Slider>
</HeroSection>
```

### Product Card Component
```jsx
<ProductCard>
  <ProductImage />
  <ProductCategory>Generic Medicines</ProductCategory>
  <ProductName>Amoxicillin 500mg</ProductName>
  <ProductDescription>
    Broad-spectrum antibiotic
  </ProductDescription>
  <ProductActions>
    <LearnMoreButton />
    <WhatsAppEnquiry />
  </ProductActions>
</ProductCard>
```

## Responsive Design Guidelines

### Breakpoints
```css
/* Tailwind CSS Breakpoints */
sm: '640px'   /* Mobile landscape */
md: '768px'   /* Tablets */
lg: '1024px'  /* Laptops */
xl: '1280px'  /* Desktop */
2xl: '1536px' /* Large screens */
```

### Mobile-First Approach
- Implement collapsible navigation for mobile
- Stack grid items vertically on smaller screens
- Adjust font sizes and spacing for readability
- Use touch-friendly tap targets (min 44px)
- Implement swipe gestures for sliders

## Performance Optimizations

### Image Optimization
```javascript
// Next-gen format usage
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" loading="lazy" />
</picture>
```

### Code Splitting Strategy
```javascript
// Route-based code splitting
const ProductPage = React.lazy(() => import('./pages/Product'));
const AboutPage = React.lazy(() => import('./pages/About'));
```

## Interactive Elements

### Button Styles
```css
/* Primary Button */
.btn-primary {
  @apply bg-primary text-white px-6 py-3 rounded-lg
         hover:bg-primary/90 transition-colors
         focus:ring-2 focus:ring-primary/50;
}

/* Secondary Button */
.btn-secondary {
  @apply bg-secondary text-white px-6 py-3 rounded-lg
         hover:bg-secondary/90 transition-colors
         focus:ring-2 focus:ring-secondary/50;
}
```

### Form Elements
```css
/* Input Fields */
.input-field {
  @apply w-full px-4 py-2 rounded-lg border border-neutral-300
         focus:ring-2 focus:ring-primary/50 focus:border-primary
         placeholder-neutral-400;
}

/* Select Dropdowns */
.select-field {
  @apply appearance-none bg-white border border-neutral-300
         rounded-lg px-4 py-2 pr-8 focus:ring-2
         focus:ring-primary/50 focus:border-primary;
}
```

## Animation Guidelines

### Transition Standards
```css
/* Standard Transitions */
.transition-standard {
  @apply transition-all duration-300 ease-in-out;
}

/* Hover Effects */
.hover-scale {
  @apply hover:scale-105 transition-transform duration-300;
}
```

## Accessibility Guidelines

### ARIA Landmarks
```jsx
<header role="banner">
<nav role="navigation">
<main role="main">
<footer role="contentinfo">
```

### Focus Management
```css
/* Focus Styles */
.focus-visible {
  @apply focus:outline-none focus:ring-2 focus:ring-primary
         focus:ring-offset-2 focus:ring-offset-white;
}
```

## Best Practices

### Loading States
- Use skeleton loaders for content
- Implement progressive loading
- Show loading spinners for actions
- Maintain layout stability

### Error Handling
- Display clear error messages
- Provide recovery actions
- Maintain form state on errors
- Show validation feedback inline

### SEO Optimization
- Implement semantic HTML
- Use proper heading hierarchy
- Add meta descriptions
- Optimize for core web vitals

## Component Library Integration

### Reusable Components
```jsx
// Example component with Tailwind
const Card = ({ title, children, className }) => (
  <div className={`
    rounded-lg shadow-lg bg-white p-6
    hover:shadow-xl transition-shadow
    ${className}
  `}>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {children}
  </div>
);
```

## Implementation Notes

1. **Priority Features**
   - Sticky header with smooth scroll
   - Product search with instant results
   - WhatsApp business integration
   - Distributor portal access
   - News/blog section

2. **Performance Targets**
   - First Contentful Paint < 1.5s
   - Time to Interactive < 3.5s
   - Cumulative Layout Shift < 0.1
   - First Input Delay < 100ms

3. **Browser Support**
   - Chrome (last 2 versions)
   - Firefox (last 2 versions)
   - Safari (last 2 versions)
   - Edge (last 2 versions)

This document should be used in conjunction with CONTEXT.md to maintain consistency while implementing Cipla-inspired UI/UX patterns. 