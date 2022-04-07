import createDataContext from './createDataContext'

const blogReducer = (state: any, action: any) => {
  switch (action.type) {
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
    callback()
  }
}

const deleteBlogPost = (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  return (id: any) => {
    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
)
