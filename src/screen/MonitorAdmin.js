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

class MonitorAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      let value = await AsyncStorage.getItem('@monitor');
      value = JSON.parse(value);
      if (value !== null) {
        this.setState({monitor: value});
        console.log(value);
      }
    } catch (e) {
      console.log('Gagal', e);
    }
  };
  saveData = async monitor => {
    try {
      await AsyncStorage.setItem('@monitor', JSON.stringify(monitor));
    } catch (e) {
      console.log('Gagal', e);
    }
    this.setState({});
  };
  deleteData = () => {
    let monitor = this.state.monitor;
    monitor.splice(this.state.index, 1);
    this.setState({monitor});
    this.saveData(monitor);
  };
  render() {
    return (
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <StatusBar backgroundColor={'#b90000'} barStyle="dark-content" />
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Hai, Admin!
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
                  onPress={() =>
                    this.props.navigation.navigate('ProfileAdmin')
                  }>
                  <Image
                    source={require('../images/user.png')}
                    style={{width: 40, height: 40}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              marginVertical: 5,
              backgroundColor: '#b90000',
              paddingHorizontal: 10,
              paddingVertical: 10,
              width: 170,
              borderRadius: 10,
              elevation: 2,
            }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('MonitorAdminTambah')
              }>
              <Text style={[styles.label]}>Tambah Data</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('MonitorAdminLihat')
              }
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
                <TouchableOpacity style={{marginHorizontal: 10}}>
                  <Icon name="trash" size={15} color="white" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 10}}>
            <FlatList
              data={this.state.monitor}
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
                    <TouchableOpacity
                      style={{marginHorizontal: 10}}
                      onPress={() =>
                        this.setState({index}, () => this.deleteData())
                      }>
                      <Icon name="trash" size={15} color="white" />
                    </TouchableOpacity>
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

export default MonitorAdmin;

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
