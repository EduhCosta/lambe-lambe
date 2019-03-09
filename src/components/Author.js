import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

const Post = props => {
  return (
    <View style={styles.container}>
      <Gravatar 
        options={{ email: props.email, secure: true}}
        style={styles.avatar}
      />
      <Text style={styles.nickname}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10
  },
  nickname: {
    color: '#444',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default Post;