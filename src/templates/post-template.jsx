// import React from 'react';
// import { graphql } from 'gatsby';

// export default function PostTemplate({ data: { mdx }, children }) {
//   const { frontmatter } = mdx;

//   return (
//     <main style={{ margin: '0 auto', maxWidth: '700px' }}>
//       <h1>{frontmatter.title}</h1>
//       <p style={{ fontStyle: 'italic' }}>Published on {frontmatter.date}</p>

//       {/* Here’s where your MDX content actually renders */}
//       {children}
//     </main>
//   );
// }

// export const query = graphql`
//   query PostTemplateQuery($id: String!) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function PostTemplate({ data: { mdx }, children }) {
  const { frontmatter } = mdx;

  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <p style={{ fontStyle: 'italic' }}>Published on {frontmatter.date}</p>

      {/* Render the actual MDX content */}
      {children}
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
