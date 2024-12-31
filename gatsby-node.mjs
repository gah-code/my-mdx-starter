// import path from 'path';

// export const createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;

//   // Paths for templates

//   const postTemplate = path.resolve(`./src/templates/post-template.jsx`);
//   const tagTemplate = path.resolve(`./src/templates/tag-template.jsx`);

//   // Query all MDX posts

//   const result = await graphql(`
//     {
//       allMdx(filter: { fileAbsolutePath: { regex: "/src/posts/" } }) {
//         nodes {
//           id
//           frontmatter {
//             slug
//             title
//           }
//           internal {
//             // For MDX v4, we pass this below so MDX knows which file to render
//             contentFilePath
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     reporter.panicOnBuild('Error loading MDX posts', result.errors);
//     return;
//   }

//   const posts = result.data.allMdx.nodes;

//   posts.forEach((node) => {
//     createPage({
//       path: node.frontmatter.slug,
//       // Attach the MDX file path so the template can render it
//       component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
//       context: { id: node.id },
//     });
//   });

//   // 2. Create tag pages for filtering
//   const categories = Array.from(
//     new Set(posts.map((post) => post.frontmatter.category))
//   );

//   categories.forEach((category) => {
//     createPage({
//       path: `/tags/${category.toLowerCase()}/`,
//       component: tagTemplate,
//       context: { category },
//     });
//   });
// };

import path from 'path';

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Paths for templates
  const postTemplate = path.resolve(`./src/templates/post-template.jsx`);
  const tagTemplate = path.resolve(`./src/templates/tag-template.jsx`);

  // Query all MDX posts
  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            title
            category # Ensure category is queried
          }
          internal {
            contentFilePath # Needed for MDX v4
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX posts', result.errors);
    return;
  }

  const posts = result.data.allMdx.nodes;

  // 1. Create individual post pages
  posts.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });

  // 2. Create paginated tag pages
  const postsByCategory = {};

  // Group posts by category
  posts.forEach((post) => {
    const category = post.frontmatter.category;
    if (!postsByCategory[category]) {
      postsByCategory[category] = [];
    }
    postsByCategory[category].push(post);
  });

  Object.keys(postsByCategory).forEach((category) => {
    const categoryPosts = postsByCategory[category];
    const postsPerPage = 5; // Number of posts per page
    const numPages = Math.ceil(categoryPosts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/tags/${category.toLowerCase()}/` // First page
            : `/tags/${category.toLowerCase()}/${i + 1}/`, // Paginated pages
        component: tagTemplate,
        context: {
          category,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages,
        },
      });
    });
  });
};
