/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Auth from '../services/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#dbe4f3'}}>
      <StatusBar backgroundColor={'#dbe4f3'} barStyle="dark-content" />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 70}}>
        <Image
          source={require('../images/ibilogo.png')}
          style={{width: 200, height: 200}}
        />
      </View>

      <View>
        <Text
          style={{
            textAlign: 'center',
            flex: 1,
            marginTop: 50,
            color: '#000000',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Masuk menggunakan akun anda
        </Text>

        <Text
          style={{
            textAlign: 'center',
            flex: 1,
            color: '#6A6A6A',
            fontSize: 13,
            fontWeight: '400',
          }}>
          Masukkan alamat email dan password anda
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 20}}>
        <View style={[styles.iconstyle]}>
          <Icon name="envelope" size={20} color="#bdbdbd" />
        </View>
        <TextInput
          placeholder="Masukkan Alamat Email"
          placeholderTextColor="#C5C5C5"
          onChangeText={e => setEmail(e)}
          style={[styles.textInput]}
        />
      </View>

      <View style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 10}}>
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

      <View>
        <TouchableOpacity onPress={() => Auth.signIn(email, password)}>
          <View style={styles.buttonLogin}>
            <Text
              style={{
                color: '#FFFFFF',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Masuk
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={[styles.duapilihan]}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => navigation.navigate('SignUp')}>
          <View>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Daftar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}
          onPress={() => Auth.forgetPassword(email)}>
          <View>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Lupa Password?
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

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

  buttonLogin: {
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 20,
    marginHorizontal: 25,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: 'red',
    padding: 10,
  },

  duapilihan: {
    marginHorizontal: 25,
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom: 20,
  },
});
