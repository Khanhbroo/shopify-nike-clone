# Shopify Cyberpunk E-Commerce Theme (Nike Clone Base)

A premium, state-of-the-art Shopify theme built to deliver a highly interactive, futuristic shopping experience. Originally starting as a Nike-inspired clone, this theme has been completely overhauled into a **Cyberpunk Dark Mode** aesthetic.

## 🚀 Key Features

- **Cyberpunk Dark Mode Aesthetic:** Deep blacks (`#0a0a0a`), sleek dark gray cards (`#171717`), and striking, glowing **Cyber Lime** (`#ccff00`) accents for all interactive primary CTA buttons and hover states.
- **Strict Boxed Layout Architecture:** A centralized maximum-width layout (`1440px`) globally applied across all templates, ensuring ultra-wide modern monitors have a beautifully constrained, focused browsing experience.
- **GSAP ScrollTrigger Animations:** Fluid, native-feeling micro-interactions and scroll animations powered by the GreenSock Animation Platform. Elements cascade, fade, and slide into view seamlessly.
- **Strict 1:1 Product Grid Alignment:** All product cards (whether they have placeholder SVGs or actual photos of varying dimensions) are mathematically forced into pixel-perfect 1:1 aspect ratio square containers with a stark `#ffffff` canvas, blending beautifully against the dark background.
- **Modern Split-Grid Product Page:** An overhauled `/products/` layout featuring a massive image viewer on the left, paired with elegant typography, variant selectors, and a massive pill-shaped "Add to Cart" checkout button on the right.
- **Glassmorphism Header:** A sticky navigation bar utilizing `backdrop-filter: blur` to integrate smoothly with the dark background as the user scrolls.

## 🛠️ Installation

1. Clone this repository to your local machine.
2. Ensure you have the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) installed.
3. Authenticate with your Shopify store context:
   ```bash
   shopify auth login
   ```
4. Start the local development server to preview and push changes:
   ```bash
   shopify theme dev
   ```

## 📁 File Structure

- `/assets`: Contains the global stylesheet variables (`theme.css`), GSAP animation logic (`animations.js`), and static images.
- `/layout`: Contains the master `theme.liquid` template structure.
- `/sections`: Contains the modular UI sections (e.g., `header.liquid`, `banner.liquid`, `products.liquid`, `collections.liquid`, `main-product.liquid`).
- `/snippets`: Reusable Liquid components and SVGs.
- `/templates`: JSON templates that act as the structural glue, defining the section order for the index, cart, Collections, etc.

## 💻 Technologies Used

- **Shopify Liquid:** Core templating engine.
- **CSS3:** Native CSS variables, CSS Grid, Flexbox Layouts, `aspect-ratio` constraints, `mix-blend-mode`, and neo-brutalism aesthetics.
- **JavaScript ES6:** DOM manipulation and GSAP hook initialization.
- **GSAP:** GreenSock Animation Platform + ScrollTrigger plugin.

## 📝 License

This project is for educational and demonstrative purposes only. Open-source structure.
