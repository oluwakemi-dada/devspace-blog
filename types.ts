export interface LayoutProps {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
}

export interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  cover_image: string;
  category: string;
  author: string;
  author_image: string;
}

export interface PostsData {
  slug: string;
  frontmatter: Frontmatter;
}

export interface SlugParams {
  slug: string;
}

export interface PageIndexParams {
  page_index: string;
}

export interface CategoryParams {
  category_name: string;
}
