import React, { FC, useContext, useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

interface showProp {
  navigation: any
}

const CreateScreen: FC<showProp> = ({ navigation }) => {
  const [title, setTitle] = useState<any>('')
  const [content, setContent] = useState<any>('')
  const { addBlogPost } = useContext(Context)

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title='Add Blog Post'
        onPress={() => addBlogPost(title, content)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    padding: 5,
  },
})

export default CreateScreen