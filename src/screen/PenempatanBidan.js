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

class PenempatanBidan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      let value = await AsyncStorage.getItem('@bidan');
      value = JSON.parse(value);
      if (value !== null) {
        this.setState({bidan: value});
        console.log(value);
      }
    } catch (e) {
      console.log('Gagal', e);
    }
  };
  saveData = async bidan => {
    try {
      await AsyncStorage.setItem('@bidan', JSON.stringify(bidan));
    } catch (e) {
      console.log('Gagal', e);
    }
    this.setState({});
  };
  deleteData = () => {
    let bidan = this.state.bidan;
    bidan.splice(this.state.index, 1);
    this.setState({bidan});
    this.saveData(bidan);
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
          <View>
            <FlatList
              data={this.state.bidan}
              renderItem={({item, index}) => (
                <View
                  style={{
                    backgroundColor: '#b90000',
                    borderRadius: 5,
                    marginVertical: 5,
                    paddingVertical: 20,
                    elevation: 5,
                  }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginHorizontal: 5,
                      }}>
                      Nama Bidan: {item.item}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginHorizontal: 5,
                      }}>
                      Nomor Registrasi: 1701
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginHorizontal: 5,
                      }}>
                      Lokasi Penempatan: Plered
                    </Text>
                  </TouchableOpacity>
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

export default PenempatanBidan;

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
