/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import {Auth} from '../services';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

class HomeOperator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getData();
  }

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
  render() {
    return (
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <StatusBar backgroundColor={'#b90000'} barStyle="dark-content" />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Hai <Text>Koordinator</Text>!
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

        <View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <ScrollView
              showsVerticalScrollIndicator
              horizontal={true}
              style={{}}>
              <Image
                source={require('../images/banneribi.png')}
                style={{width: 400, height: 230, marginRight: 10}}
              />
              <Image
                source={require('../images/banner1.png')}
                style={{width: 400, height: 230, marginRight: 10}}
              />
              <Image
                source={require('../images/banner3.png')}
                style={{width: 400, height: 230, marginRight: 10}}
              />
            </ScrollView>
          </View>

          <View style={[styles.menustyle]}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('VisitasiKoordinator')
              }>
              <View style={[styles.iconstyle]}>
                <Image
                  source={require('../images/Visitasi.png')}
                  style={[styles.gambaricon]}
                />
              </View>
              <View>
                <Text style={[styles.namaicon]}>Visitasi</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('MonitorKoordinator')
              }>
              <View style={[styles.iconstyle]}>
                <Image
                  source={require('../images/Monitor.png')}
                  style={[styles.gambaricon]}
                />
              </View>
              <View>
                <Text style={[styles.namaicon]}>Monitoring</Text>
                <Text style={[styles.namaicon]}>Pelayanan</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('LokasiKoordinator')
              }>
              <View style={[styles.iconstyle]}>
                <Image
                  source={require('../images/Lokasi.png')}
                  style={[styles.gambaricon]}
                />
              </View>
              <View>
                <Text style={[styles.namaicon]}>Lokasi</Text>
                <Text style={[styles.namaicon]}>Puskesmas</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('PenempatanBidanKoordinator')
              }>
              <View style={[styles.iconstyle]}>
                <Image
                  source={require('../images/doctor.png')}
                  style={[styles.gambaricon]}
                />
              </View>
              <View>
                <Text style={[styles.namaicon]}>Penempatan</Text>
                <Text style={[styles.namaicon]}>Bidan</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('PublikasiKoordinator')
            }
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              elevation: 5,
            }}>
            <View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  Berita
                </Text>
              </View>
            </View>
            <View style={{marginHorizontal: 10}}>
              <Icon name="ellipsis-v" size={20} color="#000" />
            </View>
          </TouchableOpacity>
          <View>
            <FlatList
              data={this.state.pengumuman}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#b90000',
                    borderRadius: 5,
                    marginVertical: 5,
                    elevation: 5,
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../images/thumb.png')}
                    style={{width: 60, height: 60, borderRadius: 5}}
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      marginHorizontal: 10,
                    }}>
                    {item.item}
                  </Text>
                </TouchableOpacity>
              )}
              //keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeOperator;

const styles = StyleSheet.create({
  menustyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  iconstyle: {
    backgroundColor: '#caca',
    borderRadius: 10,
    height: 90,
    width: 90,
  },
  gambaricon: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginVertical: 15,
  },
  namaicon: {
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
