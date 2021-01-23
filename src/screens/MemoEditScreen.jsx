import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, View, } from 'react-native';

import CircleBotton from '../components/CircleBotton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput  value= '買い物リスト' multiline style={styles.input}/>
      </View>
      <CircleBotton
      name='check'
      onPress={() => { navigation.goBack(); }}
      />

    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
