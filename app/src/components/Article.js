import React from 'react';
// import elements for react native
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Card } from 'react-native-elements';
// moment for getting the time zone
import moment from 'moment';

export default class Article extends React.Component {
    render() {
        // Bring all the elements in from api
        const {title, description, publishedAt, source, urlToImage, url}
        = this.props.article;
        // Bring in all styles used
        const { noteStyle, featuredTitleStyle, textStyle } = styles;
        // Use moment for time zone
        const time = moment(publishedAt || moment.now()).fromNow();
        // Declare elements in UI
        return (
            <TouchableNativeFeedback useForeground onPress={ () => Linking.openURL(url)}>
                <Card featuredTitle={title}
                      featuredTitleStyle={featuredTitleStyle}
                      image={{uri: urlToImage}}>

                    <Text style={textStyle}>{description || 'Description'}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={noteStyle}>{source.name}</Text>

                        <Text style={noteStyle}>{time}</Text>

                        <Text style={noteStyle}>Powered by NewsAPI.org</Text>

                    </View>
                </Card>
            </TouchableNativeFeedback>
        );
    }
}
// Stylesheet
const styles = {
    noteStyle: {
        margin: 5,
        color: 'gray',
        fontSize: 10,
    },
    featuredTitleStyle: {
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 15
    },
    textStyle: {
        marginBottom: 10,
        color: 'black',
        fontSize: 12
    }
};