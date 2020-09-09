import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  ScrollView,
  LogBox,
  Image,
} from 'react-native';

export default function Profile({profile}) {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profile}>
        <View style={styles.photoContainer}>
          <Image source={{uri: profile.photo}} style={styles.photo} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{profile.name}</Text>
          <View style={styles.likeContainer}>
            <View style={styles.likeItem}>
              <Text style={styles.likeVal}>{profile.like}</Text>
              <Text style={styles.likeLabel}>Like</Text>
            </View>
            <View style={styles.likeItem}>
              <Text style={styles.likeVal}>{profile.dislike}</Text>
              <Text style={styles.likeLabel}>Dislike</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bio}>
        <Text numberOfLines={2} ellipsizeMode="tail">
          {profile.bio}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 0.25,
    padding: 12,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
  },
  photoContainer: {
    backgroundColor: '#2980b9',
    borderRadius: 20,
    padding: 16,
    alignSelf: 'center',
  },
  photo: {
    width: 100,
    height: 100,
  },
  likeContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  likeItem: {
    alignItems: 'center',
  },
  likeVal: {
    fontSize: 20,
  },
  likeLabel: {
    fontSize: 14,
  },
  nameContainer: {
    flex: 1,
    padding: 22,
  },
  name: {
    marginLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
