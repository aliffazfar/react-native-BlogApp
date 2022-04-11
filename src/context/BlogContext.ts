import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'get_blogpost':
      return action.payload
    case 'edit_blogpost':
      return state.map((blogPost: any) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      })
    case 'delete_blogpost':
      return state.filter(
        (blogPost: { id: any }) => blogPost.id !== action.payload
      )
    default:
      return state
  }
}

const getBlogPosts = (dispatch: any) => {
  return async () => {
    const response = await jsonServer.get('/blogposts')

    dispatch({ type: 'get_blogpost', payload: response.data })
  }
}

const addBlogPost = (dispatch: any) => {
  return async (title: string, content: string, callback: any) => {
    await jsonServer.post('/blogposts', { title, content })

    // dispatch({ type: 'add_blogpost', payload: { title, content } })
    if (callback) {
      callback()
    }
  }
}

const deleteBlogPost = (dispatch: any) => {
  return async (id: number) => {
    await jsonServer.delete(`/blogposts/${id}`)
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
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
)
