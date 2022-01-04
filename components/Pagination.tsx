import { FC } from 'react';
import Link from 'next/link';
import styles from '@/styles/Pagination.module.css';

const Pagination: FC<{ numPages: number; currentPage: number }> = ({
  numPages,
  currentPage,
}) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) <></>;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.flex}>
        {!isFirst && (
          <Link href={prevPage} passHref>
            <li>Prev</li>
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`} passHref key={i}>
            <li>{i + 1}</li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage} passHref>
            <li>Next</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
