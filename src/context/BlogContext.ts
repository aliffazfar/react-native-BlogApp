import createDataContext from './createDataContext'

interface stateProp {
  length: number
  title: string
}

const blogReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }]
    default:
      return state
  }
}

const addBlogPost = (dispatch: (arg0: { type: string }) => void) => {
  return () => {
    dispatch({ type: 'add_blogpost' })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
)
