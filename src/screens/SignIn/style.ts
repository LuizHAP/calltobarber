import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63C2D1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInArea: {
        padding: 40,
        width: '100%'
    },
    signInButton: {
        height: 56,
        backgroundColor: '#268596',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInButtonText: {
        fontSize: 18,
        color: '#FFF'
    },
    signButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    signButtonText: {
        fontSize: 16,
        color: '#268596'
    },
    signButtonTextBold: {
        fontSize: 16,
        color: '#268596',
        fontWeight: 'bold',
        marginLeft: 5
    }
})

export default styles;