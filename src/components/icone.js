import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Icone extends Component{
  render(){
    if(this.props.escolha == 'pedra'){
      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image style={styles.hands} source={require('../../img/pedra.png')} />
        </View>
      );
    } else if(this.props.escolha == 'papel'){
      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image style={styles.hands} source={require('../../img/papel.png')} />
        </View>
      );
    } else if(this.props.escolha == 'tesoura'){
      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image style={styles.hands} source={require('../../img/tesoura.png')} />
        </View>
      );
    } else {
      return false;
    }
  }
}

export default Icone;

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  txtJogador: {
    fontSize: 18
  }
});
