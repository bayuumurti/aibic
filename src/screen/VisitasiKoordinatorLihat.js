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
  Alert,
  TextInput,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';
import CheckBoxMonitorOn from './CheckBoxMonitorOn';
import CheckBoxBangunanOn from './CheckBoxBangunanOn';

class VisitasiKoordinatorLihat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isiVisitasi: '',
      visitasi: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  createVisitasi = isiVisitasi => {
    let visitasi = this.state.visitasi;
    visitasi.push({item: isiVisitasi});
    this.setState({visitasi});
    this.saveData(visitasi);
    this.props.navigation.dispatch(StackActions.replace('VisitasiKoordinator'));
    Alert.alert('Pemberitahuan', 'Sukses Menambah Data');
    console.log('visitasi', visitasi);
  };

  saveData = async visitasi => {
    try {
      await AsyncStorage.setItem('@visitasi', JSON.stringify(visitasi));
    } catch (e) {
      console.log('Gagal', e);
    }
    this.setState({});
  };

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

  deleteData = () => {
    let visitasi = this.state.visitasi;
    visitasi.splice(this.state.index, 1);
    this.setState({visitasi});
    this.saveData(visitasi);
  };

  render() {
    return (
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <StatusBar backgroundColor={'#b90000'} barStyle="dark-content" />
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              elevation: 5,
            }}>
            <View>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Hai, Koordinator!
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
                    this.props.navigation.navigate('ProfileKoordinator')
                  }>
                  <Image
                    source={require('../images/user.png')}
                    style={{width: 40, height: 40}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{}}>
            <View>
              <Text style={[styles.label]}>Identitas:</Text>
              <Text style={[styles.label]}>
                Nama<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={[styles.textInput]}
                onChangeText={IsiVisitasi => this.setState({IsiVisitasi})}
                value={this.state.IsiVisitasi}
                editable={false}
                placeholder="Irene Suswita"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>Alamat Rumah Lengkap:</Text>
              <Text style={[styles.label]}>
                Alamat<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                editable={false}
                placeholder="Jl. Kenangan No. 31"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>
                Nomor Telepon<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                editable={false}
                placeholder="085654684648"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>
                Provinsi<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                editable={false}
                placeholder="Jawa Barat"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>
                Kota<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                editable={false}
                placeholder="Cirebon"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>
                Kecamatan<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                editable={false}
                placeholder="Plered"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>
                Kode Pos<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                editable={false}
                placeholder="45168"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>
                Jam Praktik<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                editable={false}
                placeholder="09:00 - 17:00"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>
                Hari Praktik<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                editable={false}
                placeholder="Sabtu"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>SDM Pendukung:</Text>
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Tenaga Kesehatan Lain
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitorOn />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Tenaga Non Kesehatan
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitorOn />
            </View>
            <View>
              <Text style={[styles.label]}>Bangunan dan Ruang:</Text>
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                1. Bangunan
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxBangunanOn />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                2. Ruang Tunggu
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitorOn />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                3. Ruang Periksa
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitorOn />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                4. Ruang Bersalin
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitorOn />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                5. Ruang Nifas
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitorOn />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                6. WC/ Kamar Mandi
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitorOn />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                7. Ruang Lain Sesuai Kebutuhan
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitorOn />
            </View>
            <View>
              <Text></Text>
            </View>
            <View>
              <Text></Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default VisitasiKoordinatorLihat;

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
  quest: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 5,
    textAlign: 'justify',
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
