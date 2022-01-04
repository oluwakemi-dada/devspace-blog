import { FC } from 'react';
import Link from 'next/link';
import styles from '@/styles/Blog.module.css';

const CategoryList: FC<{ categories: string[] }> = ({ categories }) => {
  return (
    <div className={styles.asideContainer}>
      <h3 className={styles.asideTitle}>Blog Categories</h3>
      <ul className={styles.asideCategories}>
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/blog/category/${category.toLowerCase()}`}
            passHref
          >
            <li>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
