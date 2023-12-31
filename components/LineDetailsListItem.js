import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';

export default LineDetailsListItem = ({ myLine, clickHandler }) => {

    //console.log("station item mystation: ", myStation);
    console.log("myline");
    console.log(myLine)


    //calculated departure
    departure = "";
    if (myLine.delay != undefined && myLine.delay > 0) {
        departure = myLine.timeOffset + " + " + (myLine.delay/60)
    } else {
        departure = myLine.timeOffset
    }
    

    return (

        <View style={styles.container}>
            <Text style={styles.text}>{departure + " min - Endhaltestelle:\n" + myLine.line.direction}</Text>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        //padding: Style.standartPadding,
        marginBottom: Style.standartMargin,
    },
    text: {
        fontSize: Style.fontSizeText,
        fontFamily: Style.fontFamilyRegular,
        color: Colors.textLight

    },
});

/*<Pressable 
            
            //onPress={() => clickHandler(myStation)}
            unstable_pressDelay={50}
            style={ ({ pressed }) => [
              styles.container,
              { opacity: pressed ? 0.5 : 1 },
            ]}
        >
            <Text style={styles.text}>{myLine.timeOffset + " min,"}</Text>
        </Pressable>
*/