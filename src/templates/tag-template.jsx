import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const TagTemplate = ({ data, pageContext }) => {
  const { category, currentPage, numPages } = pageContext;
  const posts = data.allMdx.nodes;

  // Pagination Links
  const prevPage =
    currentPage === 2
      ? `/tags/${category.toLowerCase()}/`
      : `/tags/${category.toLowerCase()}/${currentPage - 1}/`;
  const nextPage = `/tags/${category.toLowerCase()}/${currentPage + 1}/`;

  return (
    <Layout>
      <h1>Category: {category}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.frontmatter.slug}>
              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.excerpt}</p>
              <p>
                <strong>Author:</strong> {post.frontmatter.author}
              </p>
              <p>
                <strong>Category:</strong> {post.frontmatter.category}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div style={{ marginTop: '2rem' }}>
        {currentPage > 1 && <Link to={prevPage}>&laquo; Previous Page</Link>}
        {currentPage < numPages && (
          <Link to={nextPage} style={{ marginLeft: '1rem' }}>
            Next Page &raquo;
          </Link>
        )}
      </div>

      <Link to='/blog' style={{ display: 'block', marginTop: '2rem' }}>
        Back to All Posts
      </Link>
    </Layout>
  );
};

// GraphQL query for paginated data
export const query = graphql`
  query ($category: String!, $limit: Int!, $skip: Int!) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          excerpt
          author
          category
        }
      }
    }
  }
`;

export default TagTemplate;
