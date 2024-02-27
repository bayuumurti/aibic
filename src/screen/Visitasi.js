/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Auth} from '../services';
import auth from '@react-native-firebase/auth';

class Visitasi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      let value = await AsyncStorage.getItem('@visitasi');
      value = JSON.parse(value);
      if (value !== null) {
        this.setState({visitasi: value});
        console.log(value);
      }
    } catch (e) {
      console.log('Gagal', e);
    }
  };
  render() {
    return (
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <StatusBar backgroundColor={'#b90000'} barStyle="dark-content" />
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Hai, <Text>{auth().currentUser.displayName}</Text>!
              </Text>
              <Text style={{color: 'grey', fontSize: 12}}>
                Selamat datang di AIBIC
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 40,
                flexDirection: 'row',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Profile')}>
                  <Image
                    source={require('../images/user.png')}
                    style={{width: 40, height: 40}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('VisitasiLihat')}
              style={{
                backgroundColor: '#b90000',
                borderRadius: 5,
                marginVertical: 5,
                paddingVertical: 20,
                elevation: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginHorizontal: 5,
                  }}>
                  Irene Suswita
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 5}}>
            <FlatList
              data={this.state.visitasi}
              renderItem={({item, index}) => (
                <View
                  style={{
                    backgroundColor: '#b90000',
                    borderRadius: 5,
                    marginVertical: 5,
                    paddingVertical: 20,
                    elevation: 5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginHorizontal: 5,
                      }}>
                      {item.item}
                    </Text>
                  </View>
                </View>
              )}
              //keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Visitasi;

const styles = StyleSheet.create({
  wrpBtn: {
    flex: 1,
    position: 'absolute',
    bottom: 100,
    right: 0,
  },
  plusBtn: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
