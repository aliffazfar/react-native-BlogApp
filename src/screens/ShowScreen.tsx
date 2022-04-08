import React, { FC, useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

interface showProp {
  navigation: any
  id: any
}

const ShowScreen: NavigationStackScreenComponent<showProp> = ({
  navigation,
}) => {
  const { state } = useContext(Context)

  const blogPost = state.find(
    (blogPost: { id: any }) => blogPost.id === navigation.getParam('id')
  )

  return (
    <View>
      <Text>{blogPost.title} </Text>
      <Text>{blogPost.content} </Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Edit', { id: navigation.getParam('id') })
      }
    >
      <EvilIcons style={{ marginRight: 10 }} name='pencil' size={35} />
    </TouchableOpacity>
  ),
})

const styles = StyleSheet.create({})

export default ShowScreen
