import React, { Component } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './style';


class Register extends Component {

    constructor(props) {
    super(props);
    
    this.state ={
    uername:"",
    email:"",
    phone:"",
    address :""
    
    }
    
    
    }
  
  
      render() {
          return (
              <View style={styles.container}>
              <KeyboardAwareScrollView
                  style={{ flex: 1, width: '100%' }}
                  keyboardShouldPersistTaps="always">
                  <TextInput
                      style={styles.input}
                      onChangeText={(username) => this.setState({ username : username})}
                      
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                  />
                  <TextInput
                      style={styles.input}
                      placeholder='E-mail'
                      placeholderTextColor="#aaaaaa"
                      onChangeText={(email) => this.setState({ email : email})}
                     
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                  />
                  <TextInput
                      style={styles.input}
                      onChangeText={(phone) => this.setState({ phone : phone})}
                      
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                  />
                  
                  <TextInput
                      style={styles.input}
                      placeholderTextColor="#aaaaaa"
                      
                      placeholder='Address'
                      onChangeText={(address) => this.setState({ address : address})}
                      
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                  />
                  <TouchableOpacity
                      style={styles.button}
                      onPress={this.registerUser}
                      >
                      <Text style={styles.buttonTitle}>Submit</Text>
                  </TouchableOpacity>
              </KeyboardAwareScrollView>
          </View>
          );
      }
  }
  
  export default Register;