import { FC } from 'react';
import Head from 'next/head';
import Header from './Header';
import Search from './Search';
import { LayoutProps } from '../types';

const Layout: FC<LayoutProps> = ({
  title,
  keywords,
  description,
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Header />
      <Search />
      <main className='container'>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  description: 'The best info and news in tech',
  keywords: 'development, coding, programming',
};

export default Layout;
