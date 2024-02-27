import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Auth from '../services/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  return (
    <View style={{flex: 1, backgroundColor: '#dbe4f3'}}>
      <StatusBar backgroundColor={'#dbe4f3'} barStyle="dark-content" />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 70}}>
        <Image
          source={require('../images/ibilogo.png')}
          style={{width: 200, height: 200}}
        />
      </View>

      <ScrollView style={{}}>
        <View>
          <Text
            style={{
              flex: 1,
              marginHorizontal: 25,
              marginTop: 50,
              color: '#000000',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Daftar menggunakan alamat email anda
          </Text>

          <Text
            style={{
              flex: 1,
              marginHorizontal: 25,
              marginTop: 2,
              color: '#6A6A6A',
              fontSize: 13,
              fontWeight: '500',
            }}>
            Masukkan nama lengkap, alamat email, dan password anda
          </Text>
        </View>

        <View
          style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 20}}>
          <View style={[styles.iconstyle]}>
            <Icon name="user" size={20} color="#bdbdbd" />
          </View>
          <TextInput
            placeholder="Masukkan Nama Lengkap"
            placeholderTextColor="#C5C5C5"
            onChangeText={e => setName(e)}
            style={[styles.textInput]}
          />
        </View>

        <View
          style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 10}}>
          <View style={[styles.iconstyle]}>
            <Icon name="envelope" size={20} color="#bdbdbd" />
          </View>
          <TextInput
            placeholder="Masukkan Email"
            placeholderTextColor="#C5C5C5"
            onChangeText={e => setEmail(e)}
            style={[styles.textInput]}
          />
        </View>

        <View
          style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 10}}>
          <View style={[styles.iconstyle]}>
            <Icon name="lock" size={20} color="#bdbdbd" />
          </View>
          <TextInput
            placeholder="Masukkan Password"
            placeholderTextColor="#C5C5C5"
            onChangeText={e => setPassword(e)}
            secureTextEntry={true}
            style={[styles.textInput]}
          />
        </View>

        <View
          style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 10}}>
          <View style={[styles.iconstyle]}>
            <Icon name="lock" size={20} color="#bdbdbd" />
          </View>
          <TextInput
            placeholder="Konfirmasi Password"
            placeholderTextColor="#C5C5C5"
            onChangeText={e => setPassword(e)}
            secureTextEntry={true}
            style={[styles.textInput]}
          />
        </View>

        <View>
          <TouchableOpacity onPress={() => Auth.signUp(name, email, password)}>
            <View style={styles.buttonDaftar}>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Daftar
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.pilihan}>
          <View>
            <Text style={{fontWeight: '400', fontSize: 13, color: '#AFAFAF'}}>
              Sudah memiliki akun?
            </Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View>
                <Text
                  style={{fontWeight: '400', fontSize: 13, color: '#6FB7FA'}}>
                  Masuk
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 10,
    elevation: 2,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },

  iconstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 50,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 2,
  },

  buttonDaftar: {
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 20,
    marginHorizontal: 25,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: 'red',
    padding: 10,
  },

  pilihan: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: 5,
    gap: 5,
  },
});
