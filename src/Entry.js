import React from 'react'

import { connect } from 'react-redux'
import { setMessage } from './store/actions/message';
import { Alert } from 'react-native'
import Navigator from './Navigator'

class Entry extends React.Component {
  componentDidUpdate = () => {
    if (this.props.text && this.props.text.trim()) {
      Alert.alert(
        this.props.title || 'Message',
        this.props.text
      )
      this.props.clearMessage()
    }
  }

  render() {
    return <Navigator />
  }
}

const mapStateToProps = ({ message }) => {
  return {
    title: message.title,
    text: message.text
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearMessage: () => dispatch(setMessage({ title: '', message: '' }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry)