import {StyleSheet, Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const SelectHari = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Senin', value: 'day1'},
    {label: 'Selasa', value: 'day2'},
    {label: 'Rabu', value: 'day3'},
    {label: 'Kamis', value: 'day4'},
    {label: 'Jumat', value: 'day5'},
    {label: 'Sabtu', value: 'day6'},
    {label: 'Minggu', value: 'day7'},
  ]);
  return (
    <DropDownPicker
      style={{}}
      placeholder="Pilih Hari Praktik"
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

export default SelectHari;

const styles = StyleSheet.create({});
