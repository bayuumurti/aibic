import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {StackActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Splash = ({navigation}) => {
  return (
    <View>
      <StatusBar backgroundColor={'#b90000'} barStyle="dark-content" />
      <View>
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

            <View
              style={{
                backgroundColor: '#fff',
                height: 80,
                borderRadius: 35,
                marginHorizontal: 25,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 230,
                elevation: 10,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginAdmin')}>
                <View style={{marginVertical: 13}}>
                  <Icon
                    style={[styles.iconstyle]}
                    name="user-secret"
                    size={35}
                    color="#686868"
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 14,
                      color: '#686868',
                    }}>
                    Admin
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('LoginOperator')}>
                <View style={{marginVertical: 13}}>
                  <Icon
                    style={[styles.iconstyle]}
                    name="user-tie"
                    size={35}
                    color="#686868"
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 14,
                      color: '#686868',
                    }}>
                    Koordinator
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={{marginVertical: 13}}>
                  <Icon
                    style={[styles.iconstyle]}
                    name="user-nurse"
                    size={35}
                    color="#686868"
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 14,
                      color: '#686868',
                    }}>
                    Bidan
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default Splash;

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
  iconstyle: {
    alignSelf: 'center',
  },
});
