# DevSpace Blog

This is a blog built with Next.js, Typescript and Markdown.

[Preview app](https://devspace-blog-puce-nu.vercel.app/)

## Getting Started

In the project directory, run:

```bash
npm install
# or
yarn install
```

## Start Application

In the project directory, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating posts

* Create a markdown file in the **"posts"** folder and name it the post title. This name will be the slug.
* Add the frontmatter and post body at the top and bottom respectively. See the **'posts'** folder for samples. 
* Add your cover image and author image in the **'public/images folder'**.
* Edit the Category styled component in **"Components/Posts.tsx"** file for category color coding.

## Caching

Husky is used to run a cache script on git commit. Caching is used for the search api route/serverless function.
