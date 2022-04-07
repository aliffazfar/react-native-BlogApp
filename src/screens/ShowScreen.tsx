import React, { FC, useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

interface showProp {
  navigation: any
}

const ShowScreen: FC<showProp> = ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPost = state.find(
    (blogPost: { id: any }) => blogPost.id === navigation.getParam('id')
  )

  return (
    <View>
      <Text>{blogPost.title} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ShowScreen
