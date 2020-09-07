import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    input: {
        height: 54,
        backgroundColor: '#83D6E3',
        borderRadius: 30,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
    listArea:{
        marginVertical: 30,
    },
    area:{
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 20,
        padding: 15,
        flexDirection: 'row'
    },
    imageIcon: {
        width: 88,
        height: 88,
        borderRadius: 20,
    },
    infoArea:{
        marginLeft: 20,
        justifyContent: 'space-between'
    },
    userName: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    seeProfileButton:{
        width: 85,
        height: 26,
        borderColor: '#4EADBE',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    seeProfileButtonText:{
        fontSize: 13,
        color: '#268596',
    },
    starsArea:{
        flexDirection: 'row'
    },
    starText:{
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 5,
        color: "#737373"
    }
})

export default styles;