import React, { FC, useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen: FC = () => {
  const value = useContext<any>(BlogContext)

  return (
    <View>
      <Text>Index Screen {value}</Text>
    </View>
  )
}

export default IndexScreen

const styles = StyleSheet.create({})
