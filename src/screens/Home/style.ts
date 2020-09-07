import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63C2D1'
    },
    scrollView: {
        flex: 1,
        padding: 30,
    },
    headerArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    headerText: {
        width: 250,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
    input: {
        color: '#FFF'
    },
    searchSection: {
        flex: 1,
        marginTop: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingLeft: 15,
        alignItems: 'center',
        backgroundColor: '#4EADBE',
    },
    loading: {
        margin: '10%',
    }
})

export default styles;