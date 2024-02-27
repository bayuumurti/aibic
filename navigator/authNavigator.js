/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstSplash from '../src/screen/firstSplash';
import Splash from '../src/screen/splash';
import Login from '../src/screen/login';
import SignUp from '../src/screen/signup';
import LoginAdmin from '../src/screen/loginAdmin';
import HomeAdmin from '../src/screen/HomeAdmin';
import VisitasiAdmin from '../src/screen/VisitasiAdmin';
import VisitasiAdminTambah from '../src/screen/VisitasiAdminTambah';
import VisitasiAdminLihat from '../src/screen/VisitasiAdminLihat';
import MonitorAdmin from '../src/screen/MonitorAdmin';
import MonitorAdminTambah from '../src/screen/MonitorAdminTambah';
import MonitorAdminLihat from '../src/screen/MonitorAdminLihat';
import LokasiAdmin from '../src/screen/LokasiAdmin';
import PenempatanBidanAdmin from '../src/screen/PenempatanBidanAdmin';
import PenempatanBidanAdminTambah from '../src/screen/PenempatanBidanAdminTambah';
import Publikasi from '../src/screen/Publikasi';
import PublikasiTambah from '../src/screen/PublikasiTambah';
import ProfileAdmin from '../src/screen/ProfileAdmin';
import LoginOperator from '../src/screen/loginOperator';
import HomeOperator from '../src/screen/HomeOperator';
import ProfileKoordinator from '../src/screen/ProfileKoordinator';
import VisitasiKoordinator from '../src/screen/VisitasiKoordinator';
import VisitasiKoordinatorTambah from '../src/screen/VisitasiKoordinatorTambah';
import VisitasiKoordinatorLihat from '../src/screen/VisitasiKoordinatorLihat';
import MonitorKoordinator from '../src/screen/MonitorKoordinator';
import LokasiKoordinator from '../src/screen/LokasiKoordinator';
import PenempatanBidanKoordinator from '../src/screen/PenempatanBidanKoordinator';
import PublikasiKoordinator from '../src/screen/PublikasiKoordinator';
import MonitorKoordinatorTambah from '../src/screen/MonitorKoordinatorTambah';
import MonitorKoordinatorLihat from '../src/screen/MonitorKoordinatorLihat';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#b90000',
        headerStyle: {
          backgroundColor: '#b90000',
        },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
      }}
      initialRouteName="FirstSplash">
      <Stack.Screen
        name="FirstSplash"
        component={FirstSplash}
        options={{headerShown: false, statusBarColor: '#b90000'}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false, statusBarColor: '#b90000'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false, statusBarColor: '#dbe4f3'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false, statusBarColor: '#dbe4f3'}}
      />
      <Stack.Screen
        name="LoginAdmin"
        component={LoginAdmin}
        options={{headerShown: false, statusBarColor: '#dbe4f3'}}
      />
      <Stack.Screen
        options={{headerBackVisible: false, title: 'Beranda'}}
        name="HomeAdmin"
        component={HomeAdmin}
      />
      <Stack.Screen
        options={{title: 'Evaluasi Kinerja'}}
        name="VisitasiAdmin"
        component={VisitasiAdmin}
      />
      <Stack.Screen
        options={{title: 'Evaluasi Kinerja'}}
        name="VisitasiAdminTambah"
        component={VisitasiAdminTambah}
      />
      <Stack.Screen
        options={{title: 'Evaluasi Kinerja'}}
        name="VisitasiAdminLihat"
        component={VisitasiAdminLihat}
      />
      <Stack.Screen
        options={{title: 'Monitoring Pelayanan'}}
        name="MonitorAdmin"
        component={MonitorAdmin}
      />
      <Stack.Screen
        options={{title: 'Lokasi Puskesmas'}}
        name="LokasiAdmin"
        component={LokasiAdmin}
      />
      <Stack.Screen
        options={{title: 'Penempatan Bidan'}}
        name="PenempatanBidanAdmin"
        component={PenempatanBidanAdmin}
      />
      <Stack.Screen
        options={{title: 'Penempatan Bidan'}}
        name="PenempatanBidanAdminTambah"
        component={PenempatanBidanAdminTambah}
      />
      <Stack.Screen
        options={{title: 'Berita'}}
        name="Publikasi"
        component={Publikasi}
      />
      <Stack.Screen
        options={{title: 'Berita'}}
        name="PublikasiTambah"
        component={PublikasiTambah}
      />
      <Stack.Screen
        options={{title: 'Monitoring Pelayanan'}}
        name="MonitorAdminTambah"
        component={MonitorAdminTambah}
      />
      <Stack.Screen
        options={{title: 'Monitoring Pelayanan'}}
        name="MonitorAdminLihat"
        component={MonitorAdminLihat}
      />
      <Stack.Screen
        options={{title: 'Profil'}}
        name="ProfileAdmin"
        component={ProfileAdmin}
      />
      <Stack.Screen
        name="LoginOperator"
        component={LoginOperator}
        options={{headerShown: false, statusBarColor: '#dbe4f3'}}
      />
      <Stack.Screen
        options={{headerBackVisible: false, title: 'Beranda'}}
        name="HomeOperator"
        component={HomeOperator}
      />
      <Stack.Screen
        options={{title: 'Profil'}}
        name="ProfileKoordinator"
        component={ProfileKoordinator}
      />
      <Stack.Screen
        options={{title: 'Evaluasi Kinerja'}}
        name="VisitasiKoordinator"
        component={VisitasiKoordinator}
      />
      <Stack.Screen
        options={{title: 'Evaluasi Kinerja'}}
        name="VisitasiKoordinatorTambah"
        component={VisitasiKoordinatorTambah}
      />
      <Stack.Screen
        options={{title: 'Evaluasi Kinerja'}}
        name="VisitasiKoordinatorLihat"
        component={VisitasiKoordinatorLihat}
      />
      <Stack.Screen
        options={{title: 'Monitoring Pelayanan'}}
        name="MonitorKoordinator"
        component={MonitorKoordinator}
      />
      <Stack.Screen
        options={{title: 'Monitoring Pelayanan'}}
        name="MonitorKoordinatorTambah"
        component={MonitorKoordinatorTambah}
      />
      <Stack.Screen
        options={{title: 'Monitoring Pelayanan'}}
        name="MonitorKoordinatorLihat"
        component={MonitorKoordinatorLihat}
      />
      <Stack.Screen
        options={{title: 'Lokasi Puskesmas'}}
        name="LokasiKoordinator"
        component={LokasiKoordinator}
      />
      <Stack.Screen
        options={{title: 'Penempatan Bidan'}}
        name="PenempatanBidanKoordinator"
        component={PenempatanBidanKoordinator}
      />
      <Stack.Screen
        options={{title: 'Berita'}}
        name="PublikasiKoordinator"
        component={PublikasiKoordinator}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
