import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'

class ScaleItem extends React.Component{
    constructor(){
        super()
    }
    render(){
        const scale = this.props.scale
        return(
            <View style={styles.main}>
                <Text style={styles.titre}>{scale.tonic} {scale.mode}</Text>
                <View style={{flex:1}}>
                    <Image style={styles.image} source={{uri:scale.pic}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        alignItems:'center'
    },
    titre:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    image:{
        height: 50,
        width: 400
    }
})

export default ScaleItem