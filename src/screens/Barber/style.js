import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    scroller: {
        flex: 1
    },
    swipeDot:{
        width: 10,
        height: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        margin: '3px'
    },
    swipeDotActive: {
        width: 10,
        height: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        margin: '3px'
    },
    swipeItem:{
        flex:1,
        backgroundColor: '#63C2D1',
    },
    swipeImage:{
        width: 100,
        height: '240px'
    },
})

export default styles;