import { useRouter } from 'next/router';
import MainLayout from '../../components/MainLayout';
import Link from 'next/link';
import {useState, useEffect } from 'react';

const Post = ({ post: serverPost }) => {
  const router = useRouter();
  const [ post, setPost ] = useState(serverPost);
  useEffect(() => {
    const load = async () => {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const post = await response.json();
      setPost(post);
    }
    if (!serverPost) {
      load();
    }
  }, [])

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }
  return (
    <MainLayout title={'Post page'}>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href={'/posts'}><a>Back to all posts</a></Link>
    </MainLayout>
  )
}

Post.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return {
      post: null
    }
  }
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();
  return {
    post
  }
} 
// export const getServerSideProps = async (ctx) => {
//   // if (!ctx.req) {
//   //   return { 
//   //     props: {
//   //       post: null
//   //     }
//   //   }
//   // }
//   const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
//   const post = await response.json();
//   return {
//     props: {post}
//   }
// } 

export default Post;