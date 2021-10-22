import * as React from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, TextInput, Text } from 'react-native';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.avoider}>
      <ScrollView
        style={styles.fill}
        contentContainerStyle={styles.fill}
        scrollEnabled={false}
        keyboardDismissMode='on-drag'
      >
        <Text style={{ color: '#888' }}>chat goes here</Text>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='enter message' placeholderTextColor='#fff'></TextInput>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  avoider: {
    flex: 1,
  },
  list: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  fill: {
    flex: 1,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 4,
    position: 'relative',
    width: '100%',
  },
  input: {
    backgroundColor: '#333',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    padding: 8,
    height: 32,
  },
});
