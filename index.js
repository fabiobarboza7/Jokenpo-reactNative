import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

// Action

class myApp extends Component{

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario : '',
                   escolhaComputador : '',
                   resultado: ''};
  }

  jokenpo(escolhaUsuario){
    var random = Math.floor(Math.random() * 3);
    var pcChoose = '';

    switch(random){
      case 0: pcChoose = 'pedra';
        break;
      case 1: pcChoose = 'papel';
        break;
      case 2: pcChoose = 'tesoura';
        break;
    }

    var resultado = '';

    "pedra"==pcChoose&&("pedra"==escolhaUsuario&&(resultado="Empate",Alert.alert(resultado)),"papel"==escolhaUsuario&&(resultado="Você venceu",Alert.alert(resultado)),"tesoura"==escolhaUsuario&&(resultado="Você perdeu",Alert.alert(resultado))),"papel"==pcChoose&&("papel"==escolhaUsuario&&(resultado="Empate",Alert.alert(resultado)),"tesoura"==escolhaUsuario&&(resultado="Você ganhou",Alert.alert(resultado)),"pedra"==escolhaUsuario&&(resultado="Você perdeu",Alert.alert(resultado))),"tesoura"==pcChoose&&("tesoura"==escolhaUsuario&&(resultado="Empate",Alert.alert(resultado)),"pedra"==escolhaUsuario&&(resultado="Você ganhou",Alert.alert(resultado)),"papel"==escolhaUsuario&&(resultado="Você perdeu",Alert.alert(resultado)));

    this.setState({ escolhaUsuario : escolhaUsuario,
                    escolhaComputador : pcChoose,
                    resultado : resultado
                  });

  }

  render(){
    return (
      <View style={styles.alignItems}>
        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={ () => {this.jokenpo('pedra')} } />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={ () => {this.jokenpo('papel')} } />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={ () => {this.jokenpo('tesoura')} } />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador={'Computador'}></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador={'Você'}></Icone>

        </View>

      </View>
    );
  }
}

// Styles

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
    padding: 5
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  alignItems: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red'
  },
  palco: {
    marginTop: 10,
    alignItems: 'center'
  },
  hands: {
    marginTop: 10,
    width: 100,
    height: 80
  }

});

// Run App
AppRegistry.registerComponent('jokenpo', () => myApp);
