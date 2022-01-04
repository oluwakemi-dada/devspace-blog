import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { FC } from 'react';
import styles from '@/styles/Post.module.css';
import { PostsData } from '../types';

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

const Post: FC<{ post: PostsData; compact?: boolean }> = ({ post, compact }) => {
  const { slug, frontmatter } = post;
  const { title, date, excerpt, cover_image, category, author, author_image } =
    frontmatter;

  return (
    <div className={styles.postContainer}>
      {!compact && (
        <Image
          src={cover_image}
          height={420}
          width={600}
          className={styles.postImage}
          alt=''
        />
      )}

      <div className={styles.dateCategory}>
        <span>{date}</span>
        <Link href={`/blog/category/${category.toLowerCase()}`} passHref>
          <Category category={category}>{category}</Category>
        </Link>
      </div>

      <div>
        <Link href={`/blog/${slug}`}>
          <a className={styles.postTitle}>{title}</a>
        </Link>

        <p className={styles.postexcerpt}>{excerpt}</p>
      </div>

      {!compact && (
        <div className={styles.readmoreAuthor}>
          <Link href={`/blog/${post.slug}`}>
            <a className={styles.readmore}>Read More</a>
          </Link>
          <div className={styles.author}>
            <Image
              src={author_image}
              width={37}
              height={37}
              className={styles.authorImage}
              alt=''
            />
            <h3 className={styles.authorName}>{author}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
