import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux'
import { login } from './../store/actions/user'
// React Native
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

class Login extends Component {
  state = {
    name: 'Temporario',
    email: '',
    password: ''
  }

  componentDidUpdate = prevProps  => {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.props.navigation.navigate('Profile')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          autofocus={true}
          keyboardType="email-address"
          placeholder="Email"
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput 
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToRegisterScreen} style={styles.button}>
          <Text style={styles.textButton}>Criar nova conta...</Text>
        </TouchableOpacity>
      </View>
    );
  }

  login = () => {
    this.props.onLogin({ ...this.state })
  }

  goToRegisterScreen = () => {
    this.props.navigation.navigate('Register')
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
    height: 40,
    borderWidth: 1,
    borderColor: '#333'
  }
})

const mapStateToProps = ({ user }) => {
  return {
    isLoading: user.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);