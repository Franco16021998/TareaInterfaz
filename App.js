import React, {Component} from 'react';
import Message from './app/components/message/Message'
import {StyleSheet,Icon, Button, TouchableOpacity, Text, View, TextInput, Image} from 'react-native';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      textValue: '',
      count: 0,
    };
  }

  onPress = text => {

    if (text == "Juan") {
      text = "Mayor de edad"
    } else {
      text = "Menor de edad"
    }    

    this.setState({textValue: text});
  };

  render() {
    return (
      
      
      
<View>

    <Text
      style={styles.text}
    >
      Food Delivery
    </Text>
    <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="black"
        
    />
    <Image
      style={styles.imagen}
      source={require('./app/img/moto.png')}
    />
    <Text
      style={styles.popular}
    >
      Popular
    </Text>
    <Image
      style={styles.imagenpopular}
      source={require('./app/img/popular.png')}
    />
    <Text
      style={styles.popular}
    >
      Categories
    </Text>
    <Image
      style={styles.imagenpopular}
      source={require('./app/img/categorias.png')}
    />


</View>



      
    )
  }
}

const styles = StyleSheet.create({
  popular: {
    padding: 20,
    paddingLeft: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    
  },
  imagen: {
    padding: 5,
    paddingLeft: 5,
    position: 'relative',
  },
  imagenpopular: {
    padding: 50,
    paddingHorizontal: 105,
    position: 'relative',
  },
  input: {
    borderBottomWidth : 1.0,
    padding: 5,
    margin: 30,
    backgroundColor: '#FFB6C1',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    alignItems: 'center',
    padding: 20,
    paddingLeft: 175,
    fontSize: 25,
    
  },

  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});