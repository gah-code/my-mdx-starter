import React from 'react';
import { graphql, Link } from 'gatsby';

export default function BlogIndex({ data }) {
  const posts = data.allMdx.nodes;

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const query = graphql`
  query {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/src/posts/" } } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;
