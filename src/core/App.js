import React from 'react'

import { View } from 'react-native'
// Components
import Header from './../components/Header'
import Post from './../components/Post'

class App extends React.Component {
  render() {
    const comments = [{
      nickname: 'Joana Elena Silva',
      comment: 'Excelente Foto'
    }, {
      nickname: 'Rafael Gustavo Pereira',
      comment: 'Muito ruim! Faço melhor...'
    }]
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post 
          image={require('./../../assets/imgs/fence.jpg')}
          comments={comments}
        />
      </View>
    )
  }
}

export default App