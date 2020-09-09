import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  ScrollView,
  LogBox,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import styles from './style';

//redux
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {fetchAttemp, likeAttemp} from '../../stores/actions/profile';

import {Picture, Profile} from '../../components';

export default function Home() {
  const [refreshing, setRefreshing] = React.useState(false);

  const [isLoadMore, setIsLoadMore] = useState(false);
  const {profile} = useSelector(
    (state) => ({
      profile: state.profile,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAttemp());
  }, []);
  useEffect(() => {
    console.log('profile', profile);
    if (profile.attemp && !isLoadMore) {
      setIsLoadMore(true);
    } else {
      setIsLoadMore(false);
    }
  }, [profile]);

  const onPressLike = (item, like) => {
    dispatch(likeAttemp(item, like));
  };

  const renderItem = ({item, index}) => {
    return (
      <Picture item={item} onPressLike={(like) => onPressLike(item, like)} />
    );
  };

  const onLoadMore = () => {
    dispatch(fetchAttemp(true));
  };

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchAttemp());
    wait(1000).then(() => {
      setRefreshing(false);
    });
  }, []);

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={{flexGrow: 1}}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            onLoadMore();
          }
        }}
        scrollEventThrottle={400}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Profile profile={profile.detail} />
        <View style={styles.pictureContainer}>
          <FlatList
            scrollEnabled={false}
            data={profile.pictures}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
      {isLoadMore && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
}
