import React, { Component } from 'react';
import { View, Image, StyleSheet} from 'react-native';

class Topo extends Component {
  render(){
    return(
      <View>
        <Image style={styles.logo} source={require('../../img/mozart.jpg')}/>
      </View>
    );
  }
}

export default Topo;

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100
  }
});
