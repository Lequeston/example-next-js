import Link from "next/link"
import MainLayout from "../components/MainLayout"
import { useState, useEffect } from 'react';

const Posts = ({ posts: serverPosts }) => {
  const [ posts, setPosts ] = useState(serverPosts);

  useEffect(() => {
    const load = async () => {
      const response = await fetch('http://localhost:4200/posts');
      const json = await response.json();
      setPosts(json);
    }
    if (!serverPosts) {
      load();
    }
  }, [])

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }
  return (
    <MainLayout title={"Post Page | Next Course"}>
      <h1>Page Posts</h1>
      <ul>
        {}
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null }
  }
  const response = await fetch('http://localhost:4200/posts');
  const posts = await response.json();

  return {
    posts
  }
}

export default Posts;

// /posts
// /post/42