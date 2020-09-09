import React, {useState, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const pictureHeight = 200;

const Picture = ({key, item, onPressLike}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.url}} style={styles.photo} />
      <View style={styles.actionContainer}>
        <View style={styles.likes}>
          <Text style={styles.likesText}>{`${
            item.like - item.dislike
          } LIKES`}</Text>
        </View>
        <View style={styles.likeActionContainer}>
          <View style={styles.button}>
            <Button
              onPress={() => {
                onPressLike(1);
              }}
              title="LIKE"
              color="#27ae60"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                onPressLike(-1);
              }}
              title="DISLIKE"
              color="#c0392b"
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Picture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 18,
  },
  photo: {
    flex: 1,
    height: pictureHeight,
    borderColor: '#999',
    borderWidth: 1,
  },
  actionContainer: {
    flex: 1,
    height: pictureHeight,
    width: '100%',
    position: 'absolute',
  },
  likes: {
    alignSelf: 'flex-end',
    margin: 16,
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 12,
    fontWeight: 'bold',
  },
  likesText: {
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
  likeActionContainer: {
    flex: 1,
    margin: 16,
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: deviceWidth / 2,
  },
});
