import React from 'react';
import { WebView, Text, StyleSheet, View, AsyncStorage } from 'react-native';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accessToken: undefined,
      refreshToken: undefined
    }
  }

  componentDidMount() {
  
  }

  render() {
    var {
      accessToken,
      refreshToken
    } = this.state;
    // if (accessToken === undefined || refreshToken === undefined)
    // {
      return (
        <WebView
        style={styles.main_container}
        source={{uri: 'https://api.imgur.com/oauth2/authorize?client_id=1252df312e05a80&response_type=token&state=state' }}
        onNavigationStateChange= {
          function(data) {
            if (data !== undefined){

              storeData = async() => {
                accessToken = data.url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
                refreshToken = data.url.match(/\&(?:refresh_token)\=([\S\s]*?)\&/)[1];
                
              
              
                        try {
                          await AsyncStorage.setItem('accessToken', accessToken)
                          await AsyncStorage.setItem('RefreshToken', refreshToken) 
                          const toto = await AsyncStorage.getItem('accessToken');
                          console.log(toto);
                          
                        } catch(error) {
                          console.error(error);
                        }
                      }
                      storeData()
                    }
              }
            }
          />
        )
      // }else {
        return (
          <View style={styles.main_container}>
            <Text>
              j'ai un token!
            </Text>
          </View>
        )
    // }
  }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  })

export default Landing