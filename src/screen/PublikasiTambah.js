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

class PublikasiTambah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isiPengumuman: '',
      pengumuman: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  createPengumuman = isiPengumuman => {
    let pengumuman = this.state.pengumuman;
    pengumuman.push({item: isiPengumuman});
    this.setState({pengumuman});
    this.saveData(pengumuman);
    this.props.navigation.dispatch(StackActions.replace('Publikasi'));
    Alert.alert('Pemberitahuan', 'Sukses Menambah Data');
    console.log('pengumuman', pengumuman);
  };

  saveData = async pengumuman => {
    try {
      await AsyncStorage.setItem('@pengumuman', JSON.stringify(pengumuman));
    } catch (e) {
      console.log('Gagal', e);
    }
    this.setState({});
  };

  getData = async () => {
    try {
      let value = await AsyncStorage.getItem('@pengumuman');
      value = JSON.parse(value);
      if (value !== null) {
        this.setState({pengumuman: value});
        console.log(value);
      }
    } catch (e) {
      console.log('Gagal', e);
    }
  };

  deleteData = () => {
    let pengumuman = this.state.pengumuman;
    pengumuman.splice(this.state.index, 1);
    this.setState({pengumuman});
    this.saveData(pengumuman);
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
              <Text style={[styles.label]}>Isi Berita</Text>
              <TextInput
                style={[styles.textInput]}
                multiline
                numberOfLines={4}
                onChangeText={isiPengumuman => this.setState({isiPengumuman})}
                value={this.state.isiPengumuman}
                placeholder="Masukkan Isi Berita"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View style={[styles.buttonSubmit]}>
              <TouchableOpacity
                onPress={() => this.createPengumuman(this.state.isiPengumuman)}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <FlatList
              data={this.state.pengumuman}
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

export default PublikasiTambah;

const styles = StyleSheet.create({
  textInput: {
    elevation: 2,
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
