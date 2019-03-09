import React, { Component } from 'react';

import { connect } from 'react-redux'
import { createUser } from '../store/actions/user';
// React Native
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  componentDidUpdate = prevProps  => {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.setState({
        name: '',
        email: '',
        password: ''
      })
      this.props.navigation.navigate('Profile')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder="Nome"
          style={styles.input}
          autoFocus={true}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <TextInput 
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput 
          placeholder="Senha"
          style={styles.input}
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity
          onPress={this.props.onCreateUser.bind(this, this.state)}
          style={styles.button}
        >
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: { 
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  textButton: {
    fontSize: 20,
    color: '#FFF'
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEE',
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    paddingLeft: 15
  }
})

const mapStateToProps = ({ user }) => {
  return {
    isLoading: user.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateUser: user => dispatch(createUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)