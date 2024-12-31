
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/gilbertharo/Documents/GitHub/my-mdx-starter/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/gilbertharo/Documents/GitHub/my-mdx-starter/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/gilbertharo/Documents/GitHub/my-mdx-starter/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/gilbertharo/Documents/GitHub/my-mdx-starter/src/pages/index.js")),
  "component---src-posts-highlight-demo-index-mdx": preferDefault(require("/Users/gilbertharo/Documents/GitHub/my-mdx-starter/src/posts/highlight-demo/index.mdx")),
  "component---src-posts-my-first-post-index-mdx": preferDefault(require("/Users/gilbertharo/Documents/GitHub/my-mdx-starter/src/posts/my-first-post/index.mdx")),
  "component---src-templates-tag-template-jsx": preferDefault(require("/Users/gilbertharo/Documents/GitHub/my-mdx-starter/src/templates/tag-template.jsx"))
}

