import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import CircleBotton from '../components/CircleBotton';
import LogOutButton from '../components/LogOutButton';
import MemoList from '../components/MemoList';

export default function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(()=> {
    navigation.setOptions ({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <MemoList />
      <CircleBotton
      name='plus'
      onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4F8',
  },
});

