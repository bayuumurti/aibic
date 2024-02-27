import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import React, {Component} from 'react';
import {StackActions} from '@react-navigation/native';

class FirstSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Splash'));
    }, 2000);
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor={'#f82e1c'} barStyle="dark-content" />
        <View>
          <ImageBackground
            source={require('../images/red.jpg')}
            style={[styles.bgstyle]}>
            <Image
              source={require('../images/ibilogo.png')}
              style={[styles.logostyle]}
            />
            <View style={{marginTop: 70}}>
              <Text style={[styles.namastyle]}>IKATAN BIDAN INDONESIA</Text>
              <Text style={[styles.namastyle]}>KABUPATEN CIREBON</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default FirstSplash;

const styles = StyleSheet.create({
  bgstyle: {
    height: '100%',
    width: '100%',
  },

  logostyle: {
    width: 230,
    height: 230,
    marginTop: 100,
    alignSelf: 'center',
  },

  namastyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});