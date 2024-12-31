import path from 'path';

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`./src/templates/post-template.jsx`);

  const result = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/posts/" } }) {
        nodes {
          id
          frontmatter {
            slug
            title
          }
          internal {
            // For MDX v4, we pass this below so MDX knows which file to render
            contentFilePath
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

  posts.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      // Attach the MDX file path so the template can render it
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};
