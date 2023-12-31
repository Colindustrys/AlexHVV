import React, { useRef } from 'react';
import { View,ScrollView, Text, StyleSheet, Dimensions, Pressable  } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';

export default DepartureListItem = ({ myStation, clickHandler }) => {

    //console.log("mystation");
    //console.log(myStation);


    //make new array with calculated arrival times 
    vorwaerts = [];
    rueckwaerts = [];

    myStation.rueckwaerts.forEach(element => {
        //console.log(element.delay);
        //console.log(element.delay != undefined);
        
        if (element.delay != undefined && element.delay > 0) {
            rueckwaerts.push(element.timeOffset + " + " + (element.delay/60))
        } else {
            rueckwaerts.push(element.timeOffset)
        }

        //console.log(rueckwaerts);

    });

    myStation.vorwaerts.forEach(element => {
        //console.log(element.delay);
        //console.log(element.delay != undefined );
        
        if (element.delay != undefined && element.delay > 0) {
            vorwaerts.push(element.timeOffset + " + " + (element.delay/60))
        } else {
            vorwaerts.push(element.timeOffset)
        }

        //console.log(vorwaerts);

    });

    



    return (
        <View //einzelnes list item
            style={styles.container} 
        >

            <View style={styles.lineNameBox}>
                <Text style={styles.text}>  
                    {myStation.name}
                </Text>
            </View>
            
            <View style={styles.scrollview}>
                <ScrollView
                    horizontal
                    //pagingEnabled
                >

                    <View>
                        <Pressable 
                            onPress={() => clickHandler(myStation, 1)}
                            style={styles.vorwaertsBox}
                        >
                            <Text style={[styles.text, styles.directionText]}>
                                    Vorwärts: 
                            </Text>

                            {vorwaerts.map((element, index) => (
                                <Text 
                                    key={index} style={styles.text}>{element + " min "} 
                                </Text>
                            ))}

                        </Pressable>
                    </View>

                    <View >
                        <Pressable
                            onPress={() => clickHandler(myStation, 6)}
                            style={styles.rueckwaertsBox}
                        >
                            <Text style={[styles.text, styles.directionText]}>
                                Rückwärts: 
                            </Text>

                            {rueckwaerts.map((element, index) => (
                                <Text 
                                    key={index}  style={styles.text}>{element + " min "}
                                </Text>
                            ))}
                        </Pressable>
                    </View>

                </ScrollView>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        marginBottom: Style.standartMargin,
        //paddingHorizontal: Style.standartMargin
        
        
    },
    directionText: {
        fontFamily: Style.fontFamilyBold,
    },
    text: {
        color: Colors.textLight,
        
    },
    lineNameBox: {
        backgroundColor: Colors.accent,
        padding: 20,
        marginRight: Style.standartMargin,
        minHeight: 80,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Style.listItemRadius,
    },
    scrollview: {
        flex: 1,
        backgroundColor: Colors.accent,
        borderRadius: Style.listItemRadius,
    }, 
    vorwaertsBox: {
        padding: Style.standartPadding,
        //justifyContent: "flex-start",
        //alignItems: "flex-start",
        width: 200,
        height: "100%"
        
    },
    rueckwaertsBox:{
        padding: Style.standartPadding,
        //justifyContent: "flex-start",
        //alignItems: "flex-start",
        width: 200,
        height: "100%",
    }
});

{/*

        <View 
        style={styles.container} >
        <Text style={styles.text}>
            {myStation.name}
        </Text>
        <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            onLayout={handleLayout}
            >
            <View style={{ width: Dimensions.get('window').width }}>
                <Text style={styles.text}>
                        Vorwärts: 
                </Text >
                {myStation.vorwaerts.map((element, index) => (
                <Text key={index} style={styles.text}>{element.timeOffset + " min "} 
                </Text>
                ))}
            </View>
            <View style={{ width: Dimensions.get('window').width }}>
                <Text style={styles.text}>
                    Rückwärts: 
                </Text>
                    {myStation.rueckwaerts.map((element, index) => (
                    <Text key={index}  style={styles.text}>{element.timeOffset + " min "} 
                </Text>
                ))}
            </View>
        </ScrollView>
        </View>


*/}