import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path'; // <-- Import 'path' module for ESM

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
        defaultLayouts: {
          default: path.resolve(
            __dirname,
            './src/components/layout/Layout.jsx'
          ),
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/posts`, // Include images for posts
      },
    },

    `gatsby-plugin-image`, // For optimized images
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
  ],
};

export default config;
