import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreatScreen'
import EditScreen from './src/screens/EditScreen'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Edit: EditScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
      cardStyle: { backgroundColor: '#FFFFFF' },
    },
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
