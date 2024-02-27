import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const signUp = (fullname, email, password) => {
  if (!fullname || !email || !password) {
    Alert.alert('Pemberitahuan', 'Masukkan data dengan detail!');
  } else {
    return auth()
      .createUserWithEmailAndPassword(email.trim(), password)
      .then(cred => {
        const {uid} = cred.user;
        auth().currentUser.updateProfile({
          displayName: fullname,
        });
        return uid;
      })
      .catch(err => alert(err.code, err.message));
  }
};

const signIn = (email, password) => {
  if (!email || !password) {
    Alert.alert('Pemberitahuan', 'Masukkan data dengan detail!');
  } else {
    return auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        console.log(auth().currentUser.uid);
      })
      .catch(err => alert(err.code, err.message));
  }
};

const signOut = () => {
  return auth().signOut();
};

const forgetPassword = email => {
  if (email != null) {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Pemberitahuan', 'Cek Email Anda');
      })
      .catch(err => alert(err.code, err.message));
  } else {
    Alert.alert('Pemberitahuan', 'Masukkan alamat email');
  }
};

const Auth = {
  signUp,
  signIn,
  signOut,
  forgetPassword,
};

export default Auth;
