import React, { FC, useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

interface showProp {
  navigation: any
}

const CreateScreen: FC<showProp> = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  return (
    <BlogPostForm
      initialValues={{ title: '', content: '' }}
      onSubmit={(title: any, content: any) => {
        addBlogPost(title, content, () => navigation.navigate('Index'))
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default CreateScreen
