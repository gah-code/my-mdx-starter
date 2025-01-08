import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/Layout';

const PostCard = ({ post }) => {
  const image = getImage(post.frontmatter.image);
  return (
    <Link
      to={post.frontmatter.slug}
      css={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform 0.2s, box-shadow 0.2s',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <GatsbyImage
        image={image}
        alt={post.frontmatter.imageAlt}
        css={{ height: '200px' }}
      />
      <div css={{ padding: '1rem' }}>
        <h2 css={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
          {post.frontmatter.title}
        </h2>
        <p css={{ fontSize: '1rem', color: '#555', marginBottom: '0.5rem' }}>
          {post.frontmatter.excerpt}
        </p>
        <small css={{ color: '#888' }}>{post.frontmatter.date}</small>
      </div>
    </Link>
  );
};

const PostGrid = ({ posts }) => {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        justifyItems: 'center',
        padding: '2rem',
      }}
    >
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default function HomePage({ data }) {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <section
        css={{
          padding: '4rem 1rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <header css={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 css={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            Welcome to My Gatsby MDX Blog Starter!
          </h1>
          <p
            css={{ fontSize: '1.125rem', lineHeight: '1.6', marginTop: '1rem' }}
          >
            Create dynamic blogs using Gatsby, MDX, and Prism with features like
            category filtering, pagination, and beautiful post cards.
          </p>
        </header>

        <PostGrid posts={posts.slice(0, 9)} />

        <div css={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            to='/blog'
            css={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              backgroundColor: '#007acc',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
              ':hover': {
                backgroundColor: '#005fa3',
              },
            }}
          >
            View All Posts
          </Link>
        </div>
      </section>
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
