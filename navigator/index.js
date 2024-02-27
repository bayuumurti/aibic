import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './appNavigator';
import AuthNavigator from './authNavigator';
import auth from '@react-native-firebase/auth';

export default AppContainer = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChange(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
