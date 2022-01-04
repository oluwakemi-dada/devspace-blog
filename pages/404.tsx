import { FC } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from '@/styles/NotFoundPage.module.css';

const NotFoundPage: FC = () => {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.content}>
        <Image
          src='/images/logo.png'
          width={70}
          height={70}
          alt=''
          className={styles.logo}
        />
        <h1>Whoops!</h1>
        <h2>This page does not exist</h2>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
