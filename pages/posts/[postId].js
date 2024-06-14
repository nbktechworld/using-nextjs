// GET /posts/:postId  Like   /posts/1  ,  /posts/2, and so on
export default function PostsPostId(props) {
  return (
    <div className="post-content-box">
      <h1 className="post-content-box-title">{props.post.title}</h1>
      <div>{props.post.body}</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.postId}`);
  const retrievedPost = await response.json();
  console.log({ retrievedPost });

  return {
    props: {
      post: retrievedPost,
    }
  }
}
