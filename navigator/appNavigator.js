import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../src/screen/Home';
import Visitasi from '../src/screen/Visitasi';
import VisitasiLihat from '../src/screen/VisitasiLihat';
import Monitor from '../src/screen/Monitor';
import MonitorLihat from '../src/screen/MonitorLihat';
import Lokasi from '../src/screen/Lokasi';
import PenempatanBidan from '../src/screen/PenempatanBidan';
import Profile from '../src/screen/Profile';
import PublikasiUser from '../src/screen/PublikasiUser';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#b90000',
        headerStyle: {
          backgroundColor: '#b90000',
        },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen options={{title: 'Beranda'}} name="Home" component={Home} />
      <Stack.Screen
        options={{title: 'Evaluasi Kinerja'}}
        name="Visitasi"
        component={Visitasi}
      />
      <Stack.Screen
        options={{title: 'Evaluasi Kinerja'}}
        name="VisitasiLihat"
        component={VisitasiLihat}
      />
      <Stack.Screen
        options={{title: 'Monitoring Pelayanan'}}
        name="Monitor"
        component={Monitor}
      />
      <Stack.Screen
        options={{title: 'Monitoring Pelayanan'}}
        name="MonitorLihat"
        component={MonitorLihat}
      />
      <Stack.Screen
        options={{title: 'Lokasi Puskesmas'}}
        name="Lokasi"
        component={Lokasi}
      />
      <Stack.Screen
        options={{title: 'Penempatan Bidan'}}
        name="PenempatanBidan"
        component={PenempatanBidan}
      />
      <Stack.Screen
        options={{title: 'Profil'}}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{title: 'Berita'}}
        name="PublikasiUser"
        component={PublikasiUser}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
