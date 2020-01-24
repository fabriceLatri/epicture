import React, { Component } from 'react';
import { Text, Image } from 'react-native'


export class MyImage extends Component {
    constructor(props) {
        super(props);
        this.state = { imageURI: null };
    }

    componentDidMount() {
        const clientId = 'Client-ID 1252df312e05a80';
        const addressUri = 'https://api.imgur.com/3/image/2bcNAqg';
        fetch(addressUri, {
            method: 'GET',
            headers: {
                Authorization: clientId,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({imageURI: responseJson.data.link})
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        if(this.state.imageURI == null){
            return (
                <Text>Loading</Text>
            ) 
        }
        else {
            return (
                <Image source={{uri: this.state.imageURI }} style={{width: 400, height: 400}} />
            )
        }
    }
}