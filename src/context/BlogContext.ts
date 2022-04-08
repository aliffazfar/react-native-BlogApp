import createDataContext from './createDataContext'

const blogReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'edit_blogpost':
      return state.map((blogPost: any) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      })
    case 'delete_blogpost':
      return state.filter(
        (blogPost: { id: any }) => blogPost.id !== action.payload
      )
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ]
    default:
      return state
  }
}

const addBlogPost = (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  return (title: string, content: string, callback: any) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } })
    if (callback) {
      callback()
    }
  }
}

const deleteBlogPost = (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  return (id: any) => {
    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

const editBlogPost = (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  return (id: any, title: any, content: any, callback: any) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
    if (callback) {
      callback()
    }
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'Test Post', content: 'Test Content', id: 1 }]
)
