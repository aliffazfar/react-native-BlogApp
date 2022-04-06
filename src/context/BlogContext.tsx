import React, { FC, useState } from 'react'

interface ContextState {
  title: string
}

const BlogContext = React.createContext<any>('')

export const BlogProvider: FC<ContextState> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<any>([])

  const addBlogPosts = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ])
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPosts }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext
