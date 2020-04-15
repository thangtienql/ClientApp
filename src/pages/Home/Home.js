import React, {Component} from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity,ScrollView,Button} from 'react-native';
import {Container,Content, Left,Right,Body,Icon, ListItem, Thumbnail,Header,Item,Input} from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';  



export default class Home extends Component{
    render(){
        return(
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Input
                        placeholder="Search"
                        />
                    </Item>
                </Header>
                <Content>
                    <ListItem avatar onPress={()=> {
                        this.props.navigation.navigate('DetailProduct')
                    }}>
                        <Left>
                            <Thumbnail source={{uri: 'https://image.pharmacity.vn/live/uploads/2019/04/P10423_1_l.jpg'}}/>
                        </Left>
                        <Body>
                            <Text>Product1</Text>
                            <Text>13800</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}