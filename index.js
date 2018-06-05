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

// Action

class app3 extends Component{

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

    if(pcChoose == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
        Alert.alert(resultado);
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Você venceu';
        Alert.alert(resultado);
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você perdeu';
        Alert.alert(resultado);
      }
    }

    if(pcChoose == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
        Alert.alert(resultado);
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você ganhou';
        Alert.alert(resultado);
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Você perdeu';
        Alert.alert(resultado);
      }
    }

    if(pcChoose == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
        Alert.alert(resultado);
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou';
        Alert.alert(resultado);
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Você perdeu';
        Alert.alert(resultado);
      }
    }

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

class Topo extends Component {
  render(){
    return(
      <Image style={styles.logo} source={require('./img/mozart.jpg')}/>
    );
  }
}

class Icone extends Component{
  render(){
    if(this.props.escolha == 'pedra'){
      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image style={styles.hands} source={require('./img/pedra.png')} />
        </View>
      );
    } else if(this.props.escolha == 'papel'){
      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image style={styles.hands} source={require('./img/papel.png')} />
        </View>
      );
    } else if(this.props.escolha == 'tesoura'){
      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image style={styles.hands} source={require('./img/tesoura.png')} />
        </View>
      );
    } else {
      return false;
    }
  }
}

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
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
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
  },
  icone: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  txtJogador: {
    fontSize: 18
  }


});
AppRegistry.registerComponent('jokenpo', () => app3);
