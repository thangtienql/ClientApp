import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Button,
    FlatList
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
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { RequestPostBaseApi, RequestGetBaseApi } from '../../services/ApiRequest'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProducts: [],
            listTemps: [],
            key: ''
        }
    }
    search(st) {
        this.setState({
            key: st
        })
        const arrSearch = this.state.listTemps.filter((e) => {
            return e.name.includes(st)
        })
        console.log('search:', arrSearch)
        if (st == '') {
            this.setState({
                listProducts: this.state.listTempsa
            })
        } else {
            this.setState({
                listProducts: arrSearch
            })
        }
    }
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Input onChangeText={(st) => {

                            this.search(st);

                        }} value={this.state.key} placeholder="Search" />
                    </Item>
                </Header>
                <Content>
                    <FlatList
                        data={this.state.listProducts}
                        renderItem={({ item }) => {
                            return this.renderItem(item)
                        }}
                        keyExtractor={item => item._id}
                    />
                </Content>
            </Container>
        );
    }

    componentDidMount() {
        this.getListProducts();
    }

    async getListProducts() {
        const res = await RequestGetBaseApi('/api/products', {}, {});
        console.log(res);
        this.setState({
            listProducts: res.data,
            listTemps: res.data
        })
    }

    renderItem(item) {
        return (
            <ListItem
                avatar
                onPress={() => {
                    this.props.navigation.navigate('DetailProduct', item);
                }}>
                <Left>
                    <Thumbnail
                        source={{
                            uri:
                                'https://image.pharmacity.vn/live/uploads/2019/04/P10423_1_l.jpg',
                        }}
                    />
                </Left>
                <Body>
                    <Text>{item.name}</Text>
                    <Text>Giá: {item.price}</Text>
                </Body>
            </ListItem>
        )
    }
}
