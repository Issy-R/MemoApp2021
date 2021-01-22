import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';

import AppBar from '../components/AppBar';
import CircleBotton from '../components/CircleBotton';

export default function MemoEditScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput  value= '買い物リスト' multiline style={styles.input}/>
      </View>
      <CircleBotton name='check' />

    </KeyboardAvoidingView>
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
