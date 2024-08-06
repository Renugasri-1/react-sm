import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Postlayout = () => {
  return (
    <>
    <Link to="/postpage/1">Post1</Link>
      <br></br>
      <Link to="/postpage/2">Post2</Link>
      <br></br>
      <Link to="/postpage/3">Post3</Link>
      <br></br>
      <Link to="/newpost">NewPost</Link>
      <Outlet/>
      </>
  )
}

export default Postlayout