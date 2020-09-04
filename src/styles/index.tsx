import {normalize} from "react-native-elements";
import {Dimensions, StyleSheet} from "react-native";

const {height} = Dimensions.get("window");

export const userRowStyles = StyleSheet.create({
    userContainer: {
        flex: 1,
        height: height / 10,
        borderRadius: normalize(10),
        borderColor: "grey",
        borderWidth: 1,
        marginTop: normalize(2),
        marginBottom: normalize(2),
        marginRight: normalize(1),
        marginLeft: normalize(1)
    },
    image: {
        height: '100%',
        width: '20%',
        borderRadius: normalize(20)
    },
    text: {
        fontSize: normalize(15),
        marginLeft: normalize(10)
    }
});

export const homeScreenStyles = StyleSheet.create({
    emptyMessage: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }

});

export const repAndFollStyles = StyleSheet.create({
    title: {
        fontSize: normalize(20),
        fontWeight:'bold',
        textAlign:'center',
        marginTop:normalize(10),
        marginBottom:normalize(10)
    }
});

export const userDetailStyles = StyleSheet.create({
    tittle: {
        fontSize: normalize(30),
        fontWeight: 'bold',
        textAlign: 'center',
        flexWrap: 'wrap',
        marginRight: normalize(10)
    },
    tittleContainer: {
        flex:1,
        justifyContent: 'center',
        paddingLeft: normalize(30)
    },
    image: {
        height: '90%',
        width: '30%',
        margin: normalize(5),
        borderRadius: normalize(10)
    },
    information: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginBottom: normalize(20),
        paddingTop: normalize(10)
    },
    userInfo: {
        marginLeft: normalize(5),
        marginTop: normalize(1),
        fontSize: normalize(15)
    },
    headAndFooter: {
        flex: 2,
        flexDirection: 'row'
    },
    footer:{
        justifyContent:'space-around',
        alignItems:'center'
    },
    buttons:{
        height:'50%',
        width: '40%',
        borderWidth: normalize(2),
        borderColor: 'grey',
        backgroundColor: 'cornsilk',
        borderRadius: normalize(10),
        justifyContent:'center',
        alignItems: 'center'
    }

});
