import React, { FC, useContext } from 'react'
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen: FC = () => {
  const { data, addBlogPosts } = useContext(BlogContext)

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='Add Post' onPress={addBlogPosts} />
      <FlatList
        data={data}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

export default IndexScreen

const styles = StyleSheet.create({})
