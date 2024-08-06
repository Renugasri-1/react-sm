import { useParams,Link } from "react-router-dom";

const PostPage = ({posts,handleDelete}) => {
  const {id}=useParams();
  const post=posts.find(post =>(post.id).toString()===id);
  return (
    <main className="PostPage">
      <article className="post">
        {post &&
        <>
        <h2>{post.title}</h2>
        <p className="postdate">{post.datetime}</p>
        <p className="postbody">{post.body}</p>
       <Link to={`/edit/${post.id}`}> <button className="editbutton">Edit post</button>_</Link>

        <button onClick={()=>handleDelete(post.id)}>Delete post

        </button>
        </>
}
{!post &&
  <>
  <h2>post not found</h2>
  <p>OOps ! unable to connect</p>
  <p>
    <Link to='/'>Visit our homepage</Link>
  </p>
  
  </>
}
 </article>
 </main>
  )
}

export default PostPage