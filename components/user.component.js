import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, Text } from 'react-native';
import Item from './item.component';

export default function User({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name || data.login}</Text>
      <Image source={{ uri: data.avatar_url }} style={styles.image} />
      <View style={styles.itemsContainer}>
        <Item title="Repositórios" number={data.public_repos} />
        <Item title="Seguidores" number={data.followers} />
        <Item title="Seguindo" number={data.following} />
      </View>
    </View>
  );
}

User.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    public_repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginVertical: 20,
    width: '95%',
    marginTop: 40,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
