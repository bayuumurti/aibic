import {View, Text} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxBangunan = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBoxx, setToggleCheckBoxx] = useState(false);
  const [toggleCheckBoxxx, setToggleCheckBoxxx] = useState(true);
  const [toggleCheckBoxxxx, setToggleCheckBoxxxx] = useState(false);
  return (
    <View
      style={{
        gap: 5,
        backgroundColor: '#E0E0E0',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
      }}>
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          tintColors={'black'}
          disabled={true}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={{color: 'black', marginVertical: 5, fontWeight: 'bold'}}>
          Rumah
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          tintColors={'black'}
          disabled={true}
          value={toggleCheckBoxx}
          onValueChange={newValue => setToggleCheckBoxx(newValue)}
        />
        <Text style={{color: 'black', marginVertical: 5, fontWeight: 'bold'}}>
          Bagian dari rumah
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          tintColors={'black'}
          disabled={true}
          value={toggleCheckBoxxx}
          onValueChange={newValue => setToggleCheckBoxxx(newValue)}
        />
        <Text style={{color: 'black', marginVertical: 5, fontWeight: 'bold'}}>
          Bagian dari kantor atau tempat kerja
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          tintColors={'black'}
          disabled={true}
          value={toggleCheckBoxxxx}
          onValueChange={newValue => setToggleCheckBoxxxx(newValue)}
        />
        <Text style={{color: 'black', marginVertical: 5, fontWeight: 'bold'}}>
          Bagian dari gedung
        </Text>
      </View>
    </View>
  );
};

export default CheckBoxBangunan;
