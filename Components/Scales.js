import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, FlatList } from 'react-native'
import ScaleItem from './ScaleItem'
import scales from '../Helpers/ScalesData'

export default class Scales extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={scales}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <ScaleItem scale={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
})