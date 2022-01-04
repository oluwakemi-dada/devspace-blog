import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href='/'>
          <a className={styles.logo}>
            <Image src='/images/logo.png' width={35} height={35} alt='logo' />
            <span className=''>DevSpace</span>
          </a>
        </Link>
        <nav className={styles.nav}>
          <Link href='/blog'>
            <a className={styles.navLink}>BLOG</a>
          </Link>
          <Link href='/about'>
            <a className={styles.navLink}>ABOUT</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
