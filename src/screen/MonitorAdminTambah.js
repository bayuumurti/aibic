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
import CheckBox from '@react-native-community/checkbox';
import CheckBoxMonitor from './CheckBoxMonitor';

class MonitorAdminTambah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsiMonitor: '',
      monitor: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  createMonitor = isiMonitor => {
    let monitor = this.state.monitor;
    monitor.push({item: isiMonitor});
    this.setState({monitor});
    this.saveData(monitor);
    this.props.navigation.dispatch(StackActions.replace('MonitorAdmin'));
    Alert.alert('Pemberitahuan', 'Sukses Menambah Data');
    console.log('monitor', monitor);
  };

  saveData = async monitor => {
    try {
      await AsyncStorage.setItem('@monitor', JSON.stringify(monitor));
    } catch (e) {
      console.log('Gagal', e);
    }
    this.setState({});
  };

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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              elevation: 5,
            }}>
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
                onChangeText={IsiMonitor => this.setState({IsiMonitor})}
                value={this.state.IsiMonitor}
                placeholder="Nama"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>
                Nomor Registrasi<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                placeholder="Nomor Registrasi"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>
                Nomor Dokumen<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                placeholder="Nomor Dokumen"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>
                Nomor Revisi<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{
                  marginVertical: 10,
                  elevation: 2,
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
                placeholder="Nomor Revisi"
                placeholderTextColor="#C5C5C5"
              />
            </View>
            <View>
              <Text style={[styles.label]}>Kegiatan:</Text>
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab pelayanan menetapkan standar dan
                indikator untuk menilai proses pelaksaaan pelayanan?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab pelayanan mengumpulkan data?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab pelayanan melakukan investigasi kinerja
                (pengamatan) dan pelaksaan kegiatan atau proses yang dipilih?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab pelayanan membandingkan data yang
                diperoleh dengan standar atau indikator (baik kualitatif atau
                kuantitatif) yang telah ditentukan?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab pelayanan mengamati perubahan
                lingkungan?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab pelayanan mengumpulkan data untuk
                pengkajian lingkungan tersebut terhadap kegiatan yang sedang
                dilaksanakan?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab pelayanan melakukan pengolahan, analisis
                data yang diperoleh?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab pelayanan membuat penilaian dan
                kesimpulan tentang proses pelaksanaan kegiatan?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab pelayanan mencatat hasil analisi dan
                kesimpulan?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab program merumuskan rekomendasi tindak
                lanjut?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab pelayanan mengambil keputusan melakukan
                tindakan (termasuk koreksi dan penyesuaian kegiatan, maupun
                perencanaan ulang)?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View
              style={{
                backgroundColor: '#b90000',
                borderRadius: 10,
                marginVertical: 5,
              }}>
              <Text style={[styles.quest]}>
                Apakah penanggung jawab pelayanan menyampaikan semua hasil
                monitoring, pengendalian dan tindak lanjut kepada pihak yang
                berkepentingan sebagai wujud akuntabilitas dan proses
                pengambilan keputusan lebih lanjut?
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <CheckBoxMonitor />
            </View>
            <View style={[styles.buttonSubmit]}>
              <TouchableOpacity
                onPress={() => this.createMonitor(this.state.IsiMonitor)}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
              </TouchableOpacity>
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

export default MonitorAdminTambah;

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
  quest: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
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
