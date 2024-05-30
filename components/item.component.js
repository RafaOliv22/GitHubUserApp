import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

export default function Item({ title, number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  number: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 22,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 5,
  },
});
