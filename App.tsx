/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    if (inputValue.length == 0) {
      setResult(`Result: ${0}`);
      return;
    }

    const inputData = inputValue.split('');
    let totalresult = 0;
    let nagetivVal = '';
    let isNagitive = false;

    inputData.forEach((value, index) => {
      if (!!value && !isNaN(+value)) {
        if (isNagitive) {
          nagetivVal += nagetivVal.length > 0 ? ', -' + value : '-' + value;
          isNagitive = false;
        } else totalresult += Number(value);
      } else if (value == '-') {
        isNagitive = true;
      } else {
        isNagitive = false;
      }
    });
    if (nagetivVal.length > 0) {
      setResult(`Error: Nagative number is not allowed (${nagetivVal})`);
    } else {
      setResult(`Result: ${totalresult}`);
    }
  };

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
        onPress={() => handleSubmit()}
        testID="handleSubmit">
        <Text style={styles.btnName}>Submit</Text>
      </TouchableOpacity>
      {result.length > 0 && (
        <Text style={styles.resultText} testID="result">
          {result}
        </Text>
      )}
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  resultText: {
    color: 'red',
    fontWeight: '700',
    marginTop: 10,
    alignSelf: 'center',
  },
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
