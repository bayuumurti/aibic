import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Auth} from '../services';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';

class LokasiKoordinator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: {
        coords: {
          accuracy: 0,
          altitude: 0,
          heading: 0,
          latitude: 0,
          longitude: 0,
          speed: 0,
        },
        mocked: false,
        timestamp: 0,
      },
      daftarPuskesmas: [
        {
          id: '1',
          color: '#4942E4',
          title: 'Puskesmas Plered',
          description: 'Puskesmas Plered',
          coordinate: {latitude: -6.70469, longitude: 108.50347},
        },
        {
          id: '2',
          color: '#4942E4',
          title: 'Puskesmas Kedawung',
          description: 'Puskesmas Kedawung',
          coordinate: {latitude: -6.70967, longitude: 108.53019},
        },
        {
          id: '3',
          color: '#4942E4',
          title: 'Puskesmas Gunungsari',
          description: 'Puskesmas Gunungsari',
          coordinate: {latitude: -6.7147, longitude: 108.5534},
        },
        {
          id: '4',
          color: '#4942E4',
          title: 'Puskesmas Plumbon',
          description: 'Puskesmas Plumbon',
          coordinate: {latitude: -6.7016, longitude: 108.47521},
        },
        {
          id: '5',
          color: '#4942E4',
          title: 'Puskesmas Dukupuntang',
          description: 'Puskesmas Dukupuntang',
          coordinate: {latitude: -6.77203, longitude: 108.41404},
        },
        {
          id: '6',
          color: '#4942E4',
          title: 'Puskesmas Jagasatru',
          description: 'Puskesmas Jagasatru',
          coordinate: {latitude: -6.72882, longitude: 108.5648},
        },
        {
          id: '7',
          color: '#4942E4',
          title: 'Puskesmas Beber',
          description: 'Puskesmas Beber',
          coordinate: {latitude: -6.80836, longitude: 108.52343},
        },
        {
          id: '8',
          color: '#4942E4',
          title: 'Puskesmas Kesambi',
          description: 'Puskesmas Kesambi',
          coordinate: {latitude: -6.73001, longitude: 108.556},
        },
        {
          id: '9',
          color: '#4942E4',
          title: 'Puskesmas Larangan',
          description: 'Puskesmas Larangan',
          coordinate: {latitude: -6.74682, longitude: 108.56322},
        },
        {
          id: '10',
          color: '#4942E4',
          title: 'Puskesmas Klangenan',
          description: 'Puskesmas Klangenan',
          coordinate: {latitude: -6.71034, longitude: 108.44058},
        },
        {
          id: '11',
          color: '#4942E4',
          title: 'Puskesmas Kalitanjung',
          description: 'Puskesmas Kalitanjung',
          coordinate: {latitude: -6.74461, longitude: 108.54188},
        },
        {
          id: '12',
          color: '#4942E4',
          title: 'Puskesmas Watubelah',
          description: 'Puskesmas Watubelah',
          coordinate: {latitude: -6.73368, longitude: 108.4968},
        },
        {
          id: '13',
          color: '#4942E4',
          title: 'Puskesmas Kejaksan',
          description: 'Puskesmas Kejaksan',
          coordinate: {latitude: -6.70144, longitude: 108.55465},
        },
        {
          id: '14',
          color: '#4942E4',
          title: 'Puskesmas Kaliwedi',
          description: 'Puskesmas Kaliwedi',
          coordinate: {latitude: -6.59089, longitude: 108.38128},
        },
        {
          id: '15',
          color: '#4942E4',
          title: 'Puskesmas Astana Garib',
          description: 'Puskesmas Astana Garib',
          coordinate: {latitude: -6.72271, longitude: 108.56608},
        },
        {
          id: '16',
          color: '#4942E4',
          title: 'Puskesmas Sunyaragi',
          description: 'Puskesmas Sunyaragi',
          coordinate: {latitude: -6.73886, longitude: 108.5434},
        },
        {
          id: '17',
          color: '#4942E4',
          title: 'Puskesmas Waled',
          description: 'Puskesmas Waled',
          coordinate: {latitude: -6.91821, longitude: 108.7091},
        },
        {
          id: '18',
          color: '#4942E4',
          title: 'Puskesmas Cibogo',
          description: 'Puskesmas Cibogo',
          coordinate: {latitude: -6.89005, longitude: 108.69585},
        },
        {
          id: '19',
          color: '#4942E4',
          title: 'Puskesmas Pasaleman',
          description: 'Puskesmas Pasaleman',
          coordinate: {latitude: -6.9240356, longitude: 108.7304044},
        },
        {
          id: '20',
          color: '#4942E4',
          title: 'Puskesmas Ciledug',
          description: 'Puskesmas Ciledug',
          coordinate: {latitude: -6.9079262, longitude: 108.7464228},
        },
        {
          id: '21',
          color: '#4942E4',
          title: 'Puskesmas Pabuaran',
          description: 'Puskesmas Pabuaran',
          coordinate: {latitude: -6.8969289, longitude: 108.7204908},
        },
        {
          id: '22',
          color: '#4942E4',
          title: 'Puskesmas Losari',
          description: 'Puskesmas Losari',
          coordinate: {latitude: -6.8403497, longitude: 108.8000563},
        },
        {
          id: '23',
          color: '#4942E4',
          title: 'Puskesmas Astanalanggar',
          description: 'Puskesmas Astanalanggar',
          coordinate: {latitude: -6.8545652, longitude: 108.8021132},
        },
        {
          id: '24',
          color: '#4942E4',
          title: 'Puskesmas Tersana',
          description: 'Puskesmas Tersana',
          coordinate: {latitude: -6.8512981, longitude: 108.7543278},
        },
        {
          id: '25',
          color: '#4942E4',
          title: 'Puskesmas Kalimukti',
          description: 'Puskesmas Kalimukti',
          coordinate: {latitude: -6.8512977, longitude: 108.7363031},
        },
        {
          id: '26',
          color: '#4942E4',
          title: 'Puskesmas Babakan',
          description: 'Puskesmas Babakan',
          coordinate: {latitude: -6.8596819, longitude: 108.7172939},
        },
        {
          id: '27',
          color: '#4942E4',
          title: 'Puskesmas Gembongan',
          description: 'Puskesmas Gembongan',
          coordinate: {latitude: -6.8633715, longitude: 108.7034042},
        },
        {
          id: '28',
          color: '#4942E4',
          title: 'Puskesmas Gebang',
          description: 'Puskesmas Gebang',
          coordinate: {latitude: -6.8175482, longitude: 108.7171294},
        },
        {
          id: '29',
          color: '#4942E4',
          title: 'Puskesmas Karang Sembung',
          description: 'Puskesmas Karang Sembung',
          coordinate: {latitude: -6.8547486, longitude: 108.6425298},
        },
        {
          id: '30',
          color: '#4942E4',
          title: 'Puskesmas Kubang Deleg',
          description: 'Puskesmas Kubang Deleg',
          coordinate: {latitude: -6.8714959, longitude: 108.6539661},
        },
        {
          id: '31',
          color: '#4942E4',
          title: 'Puskesmas Sindang Laut',
          description: 'Puskesmas Sindang Laut',
          coordinate: {latitude: -6.8298641, longitude: 108.6233109},
        },
        {
          id: '32',
          color: '#4942E4',
          title: 'Puskesmas Susukan Lebak',
          description: 'Puskesmas Susukan Lebak',
          coordinate: {latitude: -6.8662264, longitude: 108.625636},
        },
        {
          id: '33',
          color: '#4942E4',
          title: 'Puskesmas Sedong',
          description: 'Puskesmas Sedong',
          coordinate: {latitude: -6.8612948, longitude: 108.5843981},
        },
        {
          id: '34',
          color: '#4942E4',
          title: 'Puskesmas Astana Japura',
          description: 'Puskesmas Astana Japura',
          coordinate: {latitude: -6.8028711, longitude: 108.6122001},
        },
        {
          id: '35',
          color: '#4942E4',
          title: 'Puskesmas Sidamulya',
          description: 'Puskesmas Sidamulya',
          coordinate: {latitude: -6.8135245, longitude: 108.6064455},
        },
        {
          id: '36',
          color: '#4942E4',
          title: 'Puskesmas Pangenan',
          description: 'Puskesmas Pangenan',
          coordinate: {latitude: -6.8140786, longitude: 108.6926942},
        },
        {
          id: '37',
          color: '#4942E4',
          title: 'Puskesmas Mundu',
          description: 'Puskesmas Mundu',
          coordinate: {latitude: -6.7700918, longitude: 108.5917951},
        },
        {
          id: '38',
          color: '#4942E4',
          title: 'Puskesmas Kamarang',
          description: 'Puskesmas Kamarang',
          coordinate: {latitude: -6.8464863, longitude: 108.543409},
        },
        {
          id: '39',
          color: '#4942E4',
          title: 'Puskesmas Talun',
          description: 'Puskesmas Talun',
          coordinate: {latitude: -6.7542242, longitude: 108.5107937},
        },
        {
          id: '40',
          color: '#4942E4',
          title: 'Puskesmas Ciperna',
          description: 'Puskesmas Ciperna',
          coordinate: {latitude: -6.7615484, longitude: 108.5288841},
        },
        {
          id: '41',
          color: '#4942E4',
          title: 'Puskesmas Sumber',
          description: 'Puskesmas Sumber',
          coordinate: {latitude: -6.761582, longitude: 108.4828391},
        },
        {
          id: '42',
          color: '#4942E4',
          title: 'Puskesmas Sendang',
          description: 'Puskesmas Sendang',
          coordinate: {latitude: -6.7594538, longitude: 108.494472},
        },
        {
          id: '43',
          color: '#4942E4',
          title: 'Puskesmas Sindang Jawa',
          description: 'Puskesmas Sindang Jawa',
          coordinate: {latitude: -6.7643008, longitude: 108.4432513},
        },
        {
          id: '44',
          color: '#4942E4',
          title: 'Puskesmas Palimanan',
          description: 'Puskesmas Palimanan',
          coordinate: {latitude: -6.7155508, longitude: 108.428982},
        },
        {
          id: '45',
          color: '#4942E4',
          title: 'Puskesmas Kepuh',
          description: 'Puskesmas Kepuh',
          coordinate: {latitude: -6.7213846, longitude: 108.4287769},
        },
        {
          id: '46',
          color: '#4942E4',
          title: 'Puskesmas Lurah',
          description: 'Puskesmas Lurah',
          coordinate: {latitude: -6.7251877, longitude: 108.4625047},
        },
        {
          id: '47',
          color: '#4942E4',
          title: 'Puskesmas Waruroyom',
          description: 'Puskesmas Waruroyom',
          coordinate: {latitude: -6.7369964, longitude: 108.4366522},
        },
        {
          id: '48',
          color: '#4942E4',
          title: 'Puskesmas Karangsari',
          description: 'Puskesmas Karangsari',
          coordinate: {latitude: -6.7252086, longitude: 108.4822228},
        },
        {
          id: '49',
          color: '#4942E4',
          title: 'Puskesmas Pangkalan',
          description: 'Puskesmas Pangkalan',
          coordinate: {latitude: -6.6615157, longitude: 108.4941329},
        },
        {
          id: '50',
          color: '#4942E4',
          title: 'Puskesmas Astapada',
          description: 'Puskesmas Astapada',
          coordinate: {latitude: -6.7184414, longitude: 108.5133499},
        },
        {
          id: '51',
          color: '#4942E4',
          title: 'Puskesmas Gunung Jati',
          description: 'Puskesmas Gunung Jati',
          coordinate: {latitude: -6.6544913, longitude: 108.532407},
        },
        {
          id: '52',
          color: '#4942E4',
          title: 'Puskesmas Mayung',
          description: 'Puskesmas Mayung',
          coordinate: {latitude: -6.653924, longitude: 108.5132029},
        },
        {
          id: '53',
          color: '#4942E4',
          title: 'Puskesmas Kedaton',
          description: 'Puskesmas Kedaton',
          coordinate: {latitude: -6.5589875, longitude: 108.4977385},
        },
        {
          id: '54',
          color: '#4942E4',
          title: 'Puskesmas Suranenggala',
          description: 'Puskesmas Suranenggala',
          coordinate: {latitude: -6.6215617, longitude: 108.5198097},
        },
        {
          id: '55',
          color: '#4942E4',
          title: 'Puskesmas Jemaras',
          description: 'Puskesmas Jemaras',
          coordinate: {latitude: -6.6644985, longitude: 108.4541167},
        },
        {
          id: '56',
          color: '#4942E4',
          title: 'Puskesmas Jamblang',
          description: 'Puskesmas Jamblang',
          coordinate: {latitude: -6.6816068, longitude: 108.4700887},
        },
        {
          id: '57',
          color: '#4942E4',
          title: 'Puskesmas Tegal Gubug',
          description: 'Puskesmas Tegal Gubug',
          coordinate: {latitude: -6.6245881, longitude: 108.3786148},
        },
        {
          id: '58',
          color: '#4942E4',
          title: 'Puskesmas Panguragan',
          description: 'Puskesmas Panguragan',
          coordinate: {latitude: -6.6267455, longitude: 108.4481598},
        },
        {
          id: '59',
          color: '#4942E4',
          title: 'Puskesmas Ciwaringin',
          description: 'Puskesmas Ciwaringin',
          coordinate: {latitude: -6.6946247, longitude: 108.3733274},
        },
        {
          id: '60',
          color: '#4942E4',
          title: 'Puskesmas Winong',
          description: 'Puskesmas Winong',
          coordinate: {latitude: -6.6762621, longitude: 108.4207497},
        },
        {
          id: '61',
          color: '#4942E4',
          title: 'Puskesmas Gempol',
          description: 'Puskesmas Gempol',
          coordinate: {latitude: -6.7045865, longitude: 108.4089778},
        },
        {
          id: '62',
          color: '#4942E4',
          title: 'Puskesmas Susukan Lebak',
          description: 'Puskesmas Susukan Lebak',
          coordinate: {latitude: -6.8662264, longitude: 108.625636},
        },
        {
          id: '63',
          color: '#4942E4',
          title: 'Puskesmas Bunder',
          description: 'Puskesmas Bunder',
          coordinate: {latitude: -6.6160968, longitude: 108.3732586},
        },
        {
          id: '64',
          color: '#4942E4',
          title: 'Puskesmas Gegesik',
          description: 'Puskesmas Gegesik',
          coordinate: {latitude: -6.5996663, longitude: 108.4170687},
        },
        {
          id: '65',
          color: '#4942E4',
          title: 'Puskesmas Jagapura',
          description: 'Puskesmas Jagapura',
          coordinate: {latitude: -6.5338633, longitude: 108.4291039},
        },
      ],
    };
  }

  componentDidMount() {
    this.requestLocationPermission();
  }

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Izinkan aplikasi untuk mangakses lokasi',
          message: 'Izinkan?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Izin diterima');
        Geolocation.getCurrentPosition(info =>
          this.setState({userLocation: info}),
        );
      } else {
        console.log('Izin tidak diterima');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <StatusBar backgroundColor={'#b90000'} barStyle="dark-content" />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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

        <View
          style={{
            backgroundColor: '#b90000',
            marginVertical: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{height: 500}}
            region={{
              latitude: -6.73161,
              longitude: 108.55095,
              latitudeDelta: 0.9,
              longitudeDelta: 0.1,
            }}>
            {this.state.daftarPuskesmas.map((item, index) => (
              <Marker
                pinColor={item.color}
                key={item.id}
                coordinate={item.coordinate}
                title={item.title}
                description={item.description}
              />
            ))}
            <Marker
              pinColor="#F4CE14"
              key={'user'}
              coordinate={{
                latitude: this.state.userLocation.coords.latitude,
                longitude: this.state.userLocation.coords.longitude,
              }}
              title={'Lokasi saya'}
              description={'Lokasi saya saat ini'}
            />
          </MapView>
          <View
            style={{
              backgroundColor: '#b90000',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
              Keterangan:
            </Text>
            <View style={{marginVertical: 5, flexDirection: 'row'}}>
              <Icon name="map-marker-alt" size={30} color="#F4CE14" />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  marginVertical: 6,
                  marginHorizontal: 6,
                }}>
                Lokasi anda saat ini
              </Text>
            </View>
            <View style={{marginVertical: 5, flexDirection: 'row'}}>
              <Icon name="map-marker-alt" size={30} color="#4942E4" />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  marginVertical: 6,
                  marginHorizontal: 6,
                }}>
                Lokasi Puskesmas
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default LokasiKoordinator;
