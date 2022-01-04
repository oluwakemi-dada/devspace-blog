import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import {marked} from 'marked';
import styled from 'styled-components';
import { NextPage } from 'next';
import Layout from '@/components/Layout';
import styles from '@/styles/Blog.module.css';
import { SlugParams, Frontmatter } from '../../types';

const Category = styled.div`
  background: ${({ category }: { category: string }) => {
    if (category === 'PHP') {
      return '#7730DB';
    } else if (category === 'JavaScript') {
      return '#D97705';
    } else if (category === 'CSS') {
      return '#3929EB';
    } else if (category === 'Python') {
      return '#049669';
    }
  }};
  padding: 0.3rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;

const PostPage: NextPage<{
  frontmatter: Frontmatter;
  content: string;
  slug: string;
}> = ({ frontmatter, content, slug }) => {
  const { title, date, excerpt, cover_image, category, author, author_image } =
    frontmatter;

  return (
    <Layout title={title}>
      <Link href='/blog'>Go Back</Link>
      <div className={styles.contentWrapper}>
        <div className={styles.titleCategory}>
          <h1 className={styles.pageTitle}>{title}</h1>
          <Link href={`/blog/category/${category.toLowerCase()}`} passHref>
            <Category category={category}>{category}</Category>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={cover_image}
            layout='fill'
            className={styles.image}
            alt=''
          />
        </div>
        <div className={styles.authorDate}>
          <div className={styles.author}>
            <Image
              src={author_image}
              width={35}
              height={35}
              className={styles.authorImage}
              alt=''
            />
            <h4 className={styles.authorName}>{author}</h4>
          </div>
          <div>{date}</div>
        </div>
        <div className='blog-text'>
          <div
            dangerouslySetInnerHTML={{
              __html: marked(content),
            }}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: SlugParams;
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
};
