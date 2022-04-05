import React, { FC } from 'react'

const BlogContext = React.createContext<any | undefined>(undefined)

export const BlogProvider: FC = ({ children }) => {
  return (
    <BlogContext.Provider value='hi there'>{children}</BlogContext.Provider>
  )
}

export default BlogContext
