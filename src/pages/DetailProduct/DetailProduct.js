import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {
  Container,
  Content,
  Left,
  Right,
  Body,
  Icon,
  ListItem,
  Thumbnail,
  Header,
  Item,
  Input,
} from 'native-base';

export default class DetailProduct extends Component {
  constructor(props){
    super(props)
    console.log("props:",props);
    this.state={
      porduct:props.route.params
    }
  }
  render() {
    return (
      <>
        <Container>
          <Content>
            <Thumbnail
              style={styles.thumbnail}
              source={{
                uri:
                  'https://image.pharmacity.vn/live/uploads/2019/04/P10423_1_l.jpg',
              }}
            />
            <Text>Tên Sản Phẩm:{this.state.porduct.name}</Text>
            <Text>Giá Sản Phẩm: </Text>
            <Text>Số Lượng: </Text>
          </Content>
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
    height: 200,
    flex: 1,
    resizeMode: 'contain',
  },
});
