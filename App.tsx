/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <TextInput
        style={styles.input}
        placeholder="Enter Here..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => {}}
        testID="handleSubmit">
        <Text style={styles.btnName}>Submit</Text>
      </TouchableOpacity>

      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  btnName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  btnStyle: {
    width: '50%',
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    borderColor: '#00000030',
    borderWidth: 1,
    color: 'black',
    borderRadius: 5,
    fontWeight: '600',
    paddingHorizontal: 10,
    height: 40,
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 20,
  },
});

export default App;
