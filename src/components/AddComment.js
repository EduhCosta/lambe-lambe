import React, { Component } from 'react';

import { connect } from 'react-redux'
import { addComment } from './../store/actions/posts'
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback as TWF,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      editMode: false
    }
  }

  render() {
    let commitArea = null
    if (this.state.editMode) {
      commitArea = (
        <View style={styles.container}>
          <TextInput 
            placeholder="Pode comentar..."
            style={styles.input}
            autoFocus={true}
            value={this.state.comment}
            onChangeText={comment => this.setState({ comment })}
            onSubmitEditing={this.handleAddComment.bind(this)}
          />
          <TWF onPress={() => this.setState({ editMode: false })}>
            <Icon name="times" size={15} color="#555" />
          </TWF>
        </View>
      )
    } else {
      commitArea = (
        <TWF onPress={() => this.setState({ editMode: true })}>
          <View style={styles.container}>
            <Icon name="comment-o" size={25} color="#555" />
            <Text style={styles.caption}>
              Adicione um comentário...
            </Text>
          </View>
        </TWF>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        {commitArea}
      </View>
    );
  }

  handleAddComment = () => {
    this.props.onAddComment({
      postId: this.props.postId,
      comment: {
        nickname: this.props.name,
        comment: this.state.comment
      }
    })
    this.setState({ comment: '', editMode: false })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  caption: {
    marginLeft: 10,
    fontSize: 10,
    color: '#CCC'
  },
  input: {
    width: '90%'
  }
})

const mapStateToProps = ({ user }) => {
  return {
    name: user.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddComment: payload => dispatch(addComment(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);