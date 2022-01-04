import { NextPage } from 'next';
import Layout from '@/components/Layout';
import styles from '@/styles/About.module.css';

const AboutPage: NextPage = () => {
  return (
    <Layout title='About DevSpace'>
      <h1 className=''>About</h1>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>DevSpace Blog</h3>
        <p className={styles.about}>
          This is a blog built with Next.js and Markdown
        </p>
        <p>
          <span className={styles.version}>Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
