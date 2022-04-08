import React, { FC, useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

interface showProp {
  navigation: any
  id: any
}

const EditScreen: FC<showProp> = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state, editBlogPost } = useContext(Context)

  const blogPost = state.find((blogPost: { id: any }) => blogPost.id === id)

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title: any, content: any) => {
        editBlogPost(id, title, content, () => navigation.pop())
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
