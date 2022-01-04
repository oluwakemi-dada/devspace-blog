import { FC } from 'react';
import styles from '@/styles/SearchResults.module.css';
import Post from './Post';
import { PostsData } from 'types';

const SearchResults: FC<{ results: PostsData[] }> = ({ results }) => {
  if (results.length === 0) return <></>;

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.resultTitle}>{results.length} Results</h3>
      {results.map((result, index) => (
        <div key={index} className={styles.result}>
          <Post post={result} compact={true} />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
