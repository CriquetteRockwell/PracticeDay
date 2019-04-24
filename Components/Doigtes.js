import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, FlatList } from 'react-native'
import firebase from 'firebase'

export default class Doigtes extends React.Component {
    constructor(){
        super()
        //firebase.auth()
        this.state={doigtes:[], chargement:true}
    }
    
    componentDidMount(){
        const ref = firebase.database().ref('doigtes')
        ref.on('value', (snapshot) => {
            this.setState({doigtes: snapshot.val(), chargement:false})
        });
    }

    render(){
        if(this.state.chargement){
            return(
                <Text>Chargement en cours</Text>
            )
        }
        else{
            const array = Object.values(this.state.doigtes);
            return(
                <View style={styles.container}>
                    <FlatList
                        data={array.sort((a,b) => a.rang.localeCompare(b.rang))}
                        keyExtractor={(item) => item.nom.toString()}
                        renderItem={({item}) => <View><Text style={styles.titre}>{item.nom}</Text>
                        <Image source={{uri:item.pic}} style={styles.pic} resizeMode="contain"/>
                        </View>}
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    titre:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
    },
    pic:{
        width: '100%',
        height: 75
    }
})