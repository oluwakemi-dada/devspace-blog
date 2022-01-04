import Link from 'next/link';
import type { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import Post from '@/components/Post';
import { PostsData } from '../types';
import { getPosts } from '@/lib/posts';

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.3rem;
  row-gap: 4.3rem;
  margin-top: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const HomePage: NextPage<{ posts: PostsData[] }> = ({ posts }) => {
  return (
    <Layout>
      <h1>Latest Posts</h1>
      <PostGrid>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </PostGrid>
      <Link href='/blog' passHref>
        <div className={styles.allPostsBtn}>All Posts</div>
      </Link>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
};
