// import React from 'react';
// import { graphql, Link } from 'gatsby';

// export default function BlogIndex({ data }) {
//   const posts = data.allMdx.nodes;

//   return (
//     <main>
//       <h1>Blog</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

// export const query = graphql`
//   query {
//     allMdx(
//       filter: { internal: { contentFilePath: { regex: "/src/posts/" } } }
//       sort: { fields: [frontmatter___title], order: ASC }
//     ) {
//       nodes {
//         id
//         frontmatter {
//           title
//           slug
//         }
//       }
//     }
//   }
// `;

import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export default function BlogIndex({ data }) {
  const posts = data.allMdx.nodes;
  // Get unique categories
  const categories = Array.from(
    new Set(posts.map((post) => post.frontmatter.category))
  );

  return (
    <Layout>
      <h1>Blog Posts</h1>

      <h2>Filter by Category:</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/tags/${category.toLowerCase()}/`}>{category}</Link>
          </li>
        ))}
      </ul>

      <h2>All Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.frontmatter.slug}>
              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.excerpt}</p>
              {/* Category with Link */}
              <p>
                <strong>Category:</strong>{' '}
                <Link to={`/tags/${post.frontmatter.category.toLowerCase()}/`}>
                  {post.frontmatter.category}
                </Link>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/src/posts/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          slug
          title
          excerpt
          category
          author
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 300, height: 200)
            }
          }
          imageAlt
        }
      }
    }
  }
`;
