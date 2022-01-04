import { FC, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/Search.module.css';
import SearchResults from './SearchResults';
import { PostsData } from 'types';

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResult, setSearchResult] = useState<PostsData[]>([]);

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResult([]);
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`);
        const resData = await res.json();
        const { results } = resData;

        setSearchResult(results);
      }
    };

    getResults();
  }, [searchTerm]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <div className={styles.formIcon}>
          <form>
            <input
              type='search'
              name='search'
              id='search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search Posts'
              className={styles.searchInput}
            />
          </form>
          <FaSearch />
        </div>
      </div>
      <SearchResults results={searchResult} />
    </div>
  );
};

export default Search;
