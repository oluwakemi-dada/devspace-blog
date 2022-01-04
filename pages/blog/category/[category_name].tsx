import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import Post from '@/components/Post';
import CategoryList from '@/components/CategoryList';
import { PostsData, CategoryParams } from '../../../types';
import { getPosts } from '@/lib/posts';

const CategoryBlogPage: NextPage<{
  posts: PostsData[];
  categoryName: string;
  categories: string[];
}> = ({ posts, categoryName, categories }) => {
  return (
    <Layout>
      <div className={styles.mainAside}>
        <div>
          <h1>Posts in {categoryName}</h1>
          <div className={styles.postsGrid}>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
        <div>
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
};

export default CategoryBlogPage;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: {
      category_name: category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { category_name },
}: {
  params: CategoryParams;
}) => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = getPosts();

  // Get category for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = Array.from(new Set(categories));

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() == category_name
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
};
