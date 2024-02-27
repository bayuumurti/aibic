/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import SelectPuskesmas from './SelectPuskesmas';

class PenempatanBidanAdminTambah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsiBidan: '',
      bidan: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  createBidan = isiBidan => {
    let bidan = this.state.bidan;
    bidan.push({item: isiBidan});
    this.setState({bidan});
    this.saveData(bidan);
    this.props.navigation.dispatch(
      StackActions.replace('PenempatanBidanAdmin'),
    );
    Alert.alert('Pemberitahuan', 'Sukses Menambah Data');
    console.log('bidan', bidan);
  };

  saveData = async bidan => {
    try {
      await AsyncStorage.setItem('@bidan', JSON.stringify(bidan));
    } catch (e) {
      console.log('Gagal', e);
    }
    this.setState({});
  };
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
          <View style={{}}>
            <View>
              <Text style={[styles.label]}>
                Pengisian Data Penempatan Bidan
              </Text>
              <TextInput
                style={[styles.textInput]}
                onChangeText={IsiBidan => this.setState({IsiBidan})}
                value={this.state.IsiBidan}
                placeholder="Nama Bidan"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                placeholder="Nomor Registrasi Bidan"
                placeholderTextColor="#C5C5C5"
              />
              <SelectPuskesmas />
            </View>
            <View style={[styles.buttonSubmit]}>
              <TouchableOpacity
                onPress={() => this.createBidan(this.state.IsiBidan)}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default PenempatanBidanAdminTambah;

const styles = StyleSheet.create({
  textInput: {
    elevation: 2,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  buttonSubmit: {
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 20,
    marginHorizontal: 25,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: '#b90000',
    padding: 10,
  },
});
