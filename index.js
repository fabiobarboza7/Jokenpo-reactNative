import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  ScrollView
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

    "pedra"==pcChoose&&("pedra"==escolhaUsuario&&(resultado="Empate"),"papel"==escolhaUsuario&&(resultado="Você venceu"),"tesoura"==escolhaUsuario&&(resultado="Você perdeu")),"papel"==pcChoose&&("papel"==escolhaUsuario&&(resultado="Empate"),"tesoura"==escolhaUsuario&&(resultado="Você ganhou"),"pedra"==escolhaUsuario&&(resultado="Você perdeu")),"tesoura"==pcChoose&&("tesoura"==escolhaUsuario&&(resultado="Empate"),"pedra"==escolhaUsuario&&(resultado="Você ganhou"),"papel"==escolhaUsuario&&(resultado="Você perdeu"));

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

        <ScrollView>
          <View style={styles.palco}>
            <Text style={styles.txtResultado}>{this.state.resultado}</Text>

            <Icone escolha={this.state.escolhaComputador} jogador={'Computador'}></Icone>
            <Icone escolha={this.state.escolhaUsuario} jogador={'Você'}></Icone>

          </View>
        </ScrollView>

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
  }

});

// Run App
AppRegistry.registerComponent('jokenpo', () => myApp);
