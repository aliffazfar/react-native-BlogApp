import React, { FC, useState, useReducer } from 'react'

const BlogContext = React.createContext<any>('')

const blogReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }]
    default:
      return state
  }
}

export const BlogProvider: FC = ({ children }) => {
  const [blogPosts, dispatch] = blogReducer(blogReducer, [])

  const addBlogPosts = () => {
    dispatch({ type: 'add_blogpost' })
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPosts }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext
