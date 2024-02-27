import {StyleSheet, Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const SelectPuskesmas = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Waled', value: 'pkm1'},
    {label: 'Cibogo', value: 'pkm2'},
    {label: 'Pasaleman', value: 'pkm3'},
    {label: 'Ciledug', value: 'pkm4'},
    {label: 'Pabuaran', value: 'pkm5'},
    {label: 'Losari', value: 'pkm6'},
    {label: 'Astanalanggar', value: 'pkm7'},
    {label: 'Tersana', value: 'pkm8'},
    {label: 'Kalibuntu', value: 'pkm9'},
    {label: 'Babakan', value: 'pkm10'},
    {label: 'Gembongan', value: 'pkm11'},
    {label: 'Gebang', value: 'pkm12'},
    {label: 'Karang Sembung', value: 'pkm13'},
    {label: 'Kubang Deleg', value: 'pkm14'},
    {label: 'Sindang Laut', value: 'pkm15'},
    {label: 'Susukan Lebak', value: 'pkm16'},
    {label: 'Sedong', value: 'pkm17'},
    {label: 'Astana Japura', value: 'pkm18'},
    {label: 'Sidamulya', value: 'pkm19'},
    {label: 'Pangenan', value: 'pkm20'},
    {label: 'Mundu', value: 'pkm21'},
    {label: 'Beber', value: 'pkm22'},
    {label: 'Kamarang', value: 'pkm23'},
    {label: 'Talun', value: 'pkm24'},
    {label: 'Ciperna', value: 'pkm25'},
    {label: 'Sumber', value: 'pkm26'},
    {label: 'Watu Belah', value: 'pkm27'},
    {label: 'Sendang', value: 'pkm28'},
    {label: 'Duku Puntang', value: 'pkm29'},
    {label: 'Sindang Jawa', value: 'pkm30'},
    {label: 'Palimanan', value: 'pkm31'},
    {label: 'Kepuh', value: 'pkm32'},
    {label: 'Plumbon', value: 'pkm34'},
    {label: 'Lurah', value: 'pkm35'},
    {label: 'Waruroyom', value: 'pkm36'},
    {label: 'Karangsari', value: 'pkm37'},
    {label: 'Pangkalan', value: 'pkm38'},
    {label: 'Plered', value: 'pkm39'},
    {label: 'Astapada', value: 'pkm40'},
    {label: 'Kedawung', value: 'pkm41'},
    {label: 'Gunung Jati', value: 'pkm42'},
    {label: 'Mayung', value: 'pkm43'},
    {label: 'Kedaton', value: 'pkm44'},
    {label: 'Suranenggala', value: 'pkm45'},
    {label: 'Klangenan', value: 'pkm46'},
    {label: 'Jemaras', value: 'pkm47'},
    {label: 'Wangun Harja', value: 'pkm48'},
    {label: 'Tegal Gubug', value: 'pkm49'},
    {label: 'Panguragan', value: 'pkm50'},
    {label: 'Ciwaringin', value: 'pkm51'},
    {label: 'Winong', value: 'pkm52'},
    {label: 'Gempol', value: 'pkm53'},
    {label: 'Susukan', value: 'pkm54'},
    {label: 'Bunder', value: 'pkm55'},
    {label: 'Gegesik', value: 'pkm56'},
    {label: 'Jagapura', value: 'pkm57'},
    {label: 'Kaliwedi', value: 'pkm58'},
  ]);
  return (
    <DropDownPicker
      style={{}}
      placeholder="Pilih Puskesmas"
      placeholderStyle={{color: '#C5C5C5'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

export default SelectPuskesmas;

const styles = StyleSheet.create({});
