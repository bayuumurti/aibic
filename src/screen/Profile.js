import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import {Auth} from '../services';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {
  return (
    <View style={{marginVertical: 10, marginHorizontal: 10}}>
      <StatusBar backgroundColor={'#b90000'} barStyle="dark-content" />
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
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={require('../images/user.png')}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{marginVertical: 10}}>
        <Image
          source={require('../images/bannerprofil.png')}
          style={{width: 390, height: 150}}
        />
      </View>
      <View style={{marginVertical: 5}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          Nama Lengkap<Text style={{color: 'red'}}>*</Text>
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'grey',
          padding: 10,
          borderRadius: 10,
          borderColor: 'black',
        }}>
        <Text style={{color: 'black', fontWeight: '500'}}>
          {auth().currentUser.displayName}
        </Text>
      </View>
      <View style={{marginVertical: 5}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          Email<Text style={{color: 'red'}}>*</Text>
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'grey',
          padding: 10,
          borderRadius: 10,
          borderColor: 'black',
        }}>
        <Text style={{color: 'black', fontWeight: '500'}}>
          {auth().currentUser.email}
        </Text>
      </View>
      <View style={[styles.menustyle]}>
        <TouchableOpacity onPress={() => Auth.signOut()}>
          <View style={[styles.iconstyle]}>
            <Image
              source={require('../images/logout.png')}
              style={[styles.gambaricon]}
            />
          </View>
          <View>
            <Text style={[styles.namaicon]}>Keluar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  menustyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  iconstyle: {
    backgroundColor: '#caca',
    borderRadius: 10,
    height: 65,
    width: 65,
  },
  gambaricon: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginVertical: 7,
  },
  namaicon: {
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
