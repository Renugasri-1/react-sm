const NewPost=({
  handleSubmit,postTitle,setPostTitle,postBody,setPostBody
  })=>{
    return(
      <main className="NewPost">
        <h2>NewPost</h2>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlfor="postTitle">Title:</label>
          <input
          id="postTitle"
          type="text"
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)}/><br></br>
          <label htmlfor="postBody">Post:</label>
          <textarea
             id="postbody"
             value={postBody}
             onChange={(e)=> setPostBody(e.target.value)}
          
          ></textarea>

          <button type="submit">Submit</button>


        </form>
      </main>
    )
  }

  export default NewPost