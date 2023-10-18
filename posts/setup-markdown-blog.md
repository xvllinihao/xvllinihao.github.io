---
title: 'Build your personal blog with Nextjs13 app router and Markdown'
metaTitle: 'Build your personal blog with Nextjs13 app router and Markdown'
metaDesc: 'How to set up markdown posts in Nextjs'
socialImage: /jin.jpg
date: '2023-10-15'
tags:
  - nextjs
---

The Next.js App Router is a new paradigm for building applications. To set up your blog with App Router. You should pay attention to the dynamic routing. 

Before Next.js evolves to App Router. It was using the Page router. Most tutorials you can find on the Internet are using the Page router to set up dynamic routes. However if you want to try the latest App router, few reference can be found on the internet. This article will teach you how to generate the dynamic routes and how to fetch the posts stored on the server.

## 1. Fetch your posts
First, you should create a folder to stored your blogs/posts. In my repo, I created a `posts` folder under the root folder. And I will store all my markdown files there.

## 2. Use gray-matter to parse front-matter
To help the transform your markdown blog to html blog. We can use the gray-matter package to parse the front-matter.

To use gray-matter, first you should use the following command to install it
`npm install --save gray-matter`


## 3. Setup the dynamic routes
The trick is that we should use `generateStaticParams()` rather than the old `getStaticParams()` to generate dynamic routes. 

The values you return in the `generateStaticParams()` function should have the following form:
`[slug: {your-desired-route}]`