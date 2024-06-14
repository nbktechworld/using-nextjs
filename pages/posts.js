import React from 'react';
import styles from '@/pages/Posts.module.css';
import Link from 'next/link';

export default function Posts(props) {
  const { posts } = props;
  // const [posts, setPosts] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
  //     .then((response) => response.json())
  //     .then((retrievedPosts) => {
  //       setPosts(retrievedPosts)
  //     });
  // }, [])

  return (
    <div className={styles['post-box-list']}>
      {posts.map((post) => (
        <div key={post.id} className={styles['post-box']}>
          <div>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

// export async function getStaticProps() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
//   const retrievedPosts = await response.json();

//   return {
//     props: {
//       posts: retrievedPosts,
//     }
//   }
// }

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const retrievedPosts = await response.json();

  return {
    props: {
      posts: retrievedPosts,
    }
  }
}
