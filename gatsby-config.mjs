import { dirname } from 'path';
import { fileURLToPath } from 'url';
import rehypePrism from 'rehype-prism-plus';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  siteMetadata: {
    title: 'My Site',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          // remarkPlugins: [] // If you want any remark plugins, list them here
          // rehype-prism-plus should be placed in rehypePlugins
          remarkPlugins: [],
          rehypePlugins: [rehypePrism],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
  ],
};

export default config;
