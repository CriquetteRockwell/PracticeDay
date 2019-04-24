import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, FlatList, TouchableOpacity, ImageBackground} from 'react-native'
import firebase from 'firebase'

export default class Pieces extends React.Component {
    constructor(){
        super()
        //firebase.auth()
        this.state={pieces:[], chargement:true}
    }
    
    componentDidMount(){
        const ref = firebase.database().ref('morceaux')
        ref.orderByChild('titre').on('value', (snapshot) => {
            this.setState({pieces: snapshot.val(), chargement:false})
        });
    }

    render(){
        if(this.state.chargement){
            return(
                <Text>Chargement en cours</Text>
            )
        }
        else{
            const array = Object.values(this.state.pieces);
            return(
                <ImageBackground source={require('../assets/backgroundViolin.png')} style={styles.container}>
                    <FlatList
                        data={array.sort((a,b) => a.titre.localeCompare(b.titre))}
                        keyExtractor={(item) => item.titre.toString()}
                        renderItem={({item}) =>
                            <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('PieceItem', {morceau: item.titre})}>
                                    <Text style={styles.morceau}>{item.titre}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </ImageBackground>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    morceau:{
        fontSize: 16
    },
    button: {
        marginBottom: 15,
        marginTop: 15,
        padding:5,
        minWidth: 260,
        maxWidth: 360,
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF4EA',
        opacity:0.9,
        borderColor:'#FF9932',
        borderWidth:4,
        borderRadius: 25
    }
})