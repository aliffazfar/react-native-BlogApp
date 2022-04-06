import React, { FC, useReducer } from 'react'

export default (
  reducer: any,
  actions: { [x: string]: (arg0: React.DispatchWithoutAction) => any },
  initialState: unknown
) => {
  const Context = React.createContext<any>('')

  const Provider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions: any = {}
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}
