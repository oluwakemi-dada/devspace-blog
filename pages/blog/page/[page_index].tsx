import fs from 'fs';
import path from 'path';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import styles from '@/styles/Blog.module.css';
import Post from '@/components/Post';
import Pagination from '@/components/Pagination';
import CategoryList from '@/components/CategoryList';
import { PostsData, PageIndexParams } from '../../../types';
import { POSTS_PER_PAGE } from '@/config/index';
import { getPosts } from '@/lib/posts';

const BlogPage: NextPage<{
  posts: PostsData[];
  numPages: number;
  currentPage: number;
  categories: string[];
}> = ({ posts, numPages, currentPage, categories }) => {
  return (
    <Layout>
      <div className={styles.mainAside}>
        <div>
          <h1>Blog</h1>
          <div className={styles.postsGrid}>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>
        <div>
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: PageIndexParams;
}) => {
  const page = parseInt((params && params.page_index) || '1');

  const files = fs.readdirSync(path.join('posts'));

  const posts = getPosts();

  // Get category for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = Array.from(new Set(categories));

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  };
};
