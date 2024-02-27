import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const LoginAdmin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validateForm = () => {
    if (!email || !password) {
      Alert.alert('Pemberitahuan', 'Masukkan data dengan detail!');
    } else {
      return navigation.navigate('HomeAdmin');
    }
  };

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
            flex: 1,
            textAlign: 'center',
            marginHorizontal: 25,
            marginTop: 50,
            color: '#000000',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Login Admin
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
        <TouchableOpacity onPress={validateForm}>
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
    </ScrollView>
  );
};

export default LoginAdmin;

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
});
