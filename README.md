# Gatsby MDX Prisma Blog Starter

This project is a **Gatsby MDX Blog Starter** that supports dynamic MDX pages, category filtering, and pagination. It leverages **Gatsby** and **MDX** to create a modern, component-driven blog with optimized image handling and syntax highlighting.

---

## 🚀 Features

- **MDX Support**: Write Markdown with embedded React components.
- **Dynamic Pages**: Automatically generates pages for posts and categories.
- **Filter by Category**: Posts can be filtered by category via dynamic tag pages (e.g., `/tags/featured/`).
- **Pagination**: Paginated category pages make browsing large datasets seamless.
- **Optimized Images**: Uses `gatsby-plugin-image` for responsive, optimized images.
- **Syntax Highlighting**: Code blocks use **PrismJS** for styling.
- **Layouts**: Shared layouts for consistent design.
- **ESM Syntax**: Uses modern ES modules for configuration.

---

## 📂 Folder Structure

```
my-mdx-starter
├── gatsby-config.mjs          # Gatsby configuration
├── gatsby-node.mjs            # Dynamic page creation for posts and categories
├── gatsby-browser.js          # Global styles and PrismJS theme imports
├── package.json               # Dependencies and scripts
├── src
│   ├── components
│   │   └── layout.jsx         # Shared layout for pages and posts
│   ├── pages
│   │   ├── index.js           # Homepage
│   │   ├── about.js           # About page
│   │   ├── blog.js            # Blog index with category filtering
│   ├── posts
│   │   ├── example-post
│   │   │   ├── index.mdx      # Example MDX post with frontmatter
│   │   │   └── example-image.png
│   └── templates
│       ├── post-template.jsx  # Template for individual posts
│       └── tag-template.jsx   # Template for paginated category pages
└── README.md
```

---

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run develop
```

### 3. View in Browser

```bash
http://localhost:8000
```

---

## 📖 Writing Posts

### Add a New Post

1. Create a new folder inside `src/posts/`.
2. Add an `index.mdx` file and optional images.
3. Include frontmatter:

```mdx
---
title: "New Features"
slug: "/new-features"
date: "2024-12-31"
excerpt: "Discover the latest updates and improvements..."
category: "Featured"
author: "Jane Doe"
image: "example-image.png"
imageAlt: "Feature Image"
---

# Introducing New Features

Discover the latest updates.

```javascript
const greet = (name) => `Hello, ${name}!`
console.log(greet("Gatsby"))
```

```

4. Access the post:
```

<http://localhost:8000/new-features/>

```

---

## ✨ Plugins Used

- **gatsby-plugin-mdx** - MDX support.
- **gatsby-source-filesystem** - Sources content.
- **gatsby-plugin-page-creator** - Generates pages from MDX files.
- **rehype-prism-plus** - Syntax highlighting.
- **gatsby-plugin-image** - Optimized images.
- **gatsby-plugin-sharp** - Image processing.
- **gatsby-transformer-sharp** - Image queries.

---

## 🌟 Customization

### Syntax Highlighting Theme
```javascript
import "prismjs/themes/prism-tomorrow.css"
```

### MDX Plugins

```javascript
mdxOptions: {
  remarkPlugins: [],
  rehypePlugins: [rehypePrism],
}
```

---

## 🚧 Development Notes

- Use **ESM Syntax** (`import/export`).
- Restart server after changes:

```bash
gatsby clean
gatsby develop
```

- Test GraphQL Queries:

```bash
http://localhost:8000/___graphql
```

---

## 📜 License

Licensed under the [MIT License](LICENSE).

---

## 📧 Contact

Created by **Gilbert Haro** - [GitHub](https://github.com/gah-code).
