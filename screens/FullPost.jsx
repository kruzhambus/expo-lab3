import React from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import data from '../assets/data.json';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const { id, title } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: data[id]?.imageUrl }} />
      <PostText>{data[id]?.text}</PostText>
    </View>
  );
};
