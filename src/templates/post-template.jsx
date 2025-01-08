import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/Layout';

export default function PostTemplate({ data: { mdx }, children }) {
  const { frontmatter } = mdx;
  const image = getImage(frontmatter.image);

  return (
    <Layout>
      <article>
        {/* Post Image */}
        <GatsbyImage image={image} alt={frontmatter.imageAlt} />
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.excerpt}</p>

        {/* Category Link */}
        <p>
          <strong>Category:</strong>{' '}
          <Link to={`/tags/${frontmatter.category.toLowerCase()}/`}>
            {frontmatter.category}
          </Link>
        </p>

        {/* Author */}
        <p>
          <strong>Author:</strong> {frontmatter.author}
        </p>

        {/* Post Content */}
        {children}
      </article>
    </Layout>
  );
}

// GraphQL Query
export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
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
`;
