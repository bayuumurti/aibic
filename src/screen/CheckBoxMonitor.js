import {View, Text} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxMonitor = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBoxx, setToggleCheckBoxx] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#E0E0E0',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
      }}>
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          tintColors={'black'}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={{color: 'black', marginVertical: 5, fontWeight: 'bold'}}>
          Ada
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          tintColors={'black'}
          disabled={false}
          value={toggleCheckBoxx}
          onValueChange={newValue => setToggleCheckBoxx(newValue)}
        />
        <Text style={{color: 'black', marginVertical: 5, fontWeight: 'bold'}}>
          Tidak Ada
        </Text>
      </View>
    </View>
  );
};

export default CheckBoxMonitor;
