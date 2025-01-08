import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack vertically on smaller screens */
    padding: 1rem;
  }
`;

const Sidebar = styled.aside`
  border-right: 1px solid #ddd;
  padding-right: 1rem;

  @media (max-width: 768px) {
    border-right: none;
    padding-right: 0;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        text-decoration: none;
        color: #007acc;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on smaller screens */
  }
`;

const PostCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    border: 1px solid #007acc;
    background: #007acc;
    color: white;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      background: #ddd;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      padding: 0.5rem; /* Smaller buttons on mobile */
    }
  }
`;

export default function BlogIndex({ data }) {
  const posts = data.allMdx.nodes;

  // Get unique categories
  const categories = Array.from(
    new Set(posts.map((post) => post.frontmatter.category))
  );

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <Container>
        {/* Sidebar */}
        <Sidebar>
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/tags/${category.toLowerCase()}/`}>{category}</Link>
              </li>
            ))}
          </ul>
        </Sidebar>

        {/* Blog Posts */}
        <div>
          <h1>Blog Posts</h1>
          <PostList>
            {currentPosts.map((post) => {
              const image = getImage(post.frontmatter.image);
              return (
                <PostCard key={post.id}>
                  <Link to={post.frontmatter.slug}>
                    <GatsbyImage
                      image={image}
                      alt={post.frontmatter.imageAlt}
                    />
                    <div style={{ padding: '1rem' }}>
                      <h2>{post.frontmatter.title}</h2>
                      <p>{post.frontmatter.excerpt}</p>
                      <small>
                        <strong>Category:</strong> {post.frontmatter.category}
                      </small>
                    </div>
                  </Link>
                </PostCard>
              );
            })}
          </PostList>

          {/* Pagination */}
          <Pagination>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastPost >= posts.length}
            >
              Next
            </button>
          </Pagination>
        </div>
      </Container>
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
