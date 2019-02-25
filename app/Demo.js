//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { ActivityIndicator, Button, Appbar, Avatar, Badge, Banner } from 'react-native-paper'

// create a component
class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true
        }
    }
    render() {
        const { animating } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header dark={false}>
                    <Appbar.BackAction
                        onPress={() => this.setState({ animating: !animating })}
                    />
                    <Appbar.Content
                        title="Title"
                        subtitle="Subtitle"
                    />
                    <Appbar.Action icon="search" onPress={this._onSearch} />
                    <Appbar.Action icon="more-vert" onPress={this._onMore} />
                </Appbar.Header>              
                <Banner
                    visible={animating}
                    actions={[
                        {
                            label: 'Fix it',
                            onPress:() => this.setState({ animating: !animating }),
                        },
                        {
                            label: 'Learn more',
                            onPress: () => this.setState({ animating: !animating }),
                        },
                    ]}
                    image={() =>
                        <Image
                            source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    }
                >
                    There was a problem processing a transaction on your credit card.
      </Banner>
                <View style={styles.container}>
                    <Button
                        style={{margin:10}}
                        raised theme={{ roundness: 15 }}
                        mode='outlined'
                        onPress={() => this.setState({ animating: !animating })}
                        icon={{ source: 'add-alert' }}
                    >
                        Press Here
                </Button>
                    <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', width: '100%' }}>
                        <ActivityIndicator animating={this.state.animating} size={50} />
                        <Avatar.Icon icon='folder' size={50} />
                        <Avatar.Image source={{ uri: 'https://bit.ly/2Nosm5k' }} size={50} />
                        <Avatar.Text label='AT' size={50} />
                        <Badge>Badge</Badge>
                    </View>

                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Demo;
