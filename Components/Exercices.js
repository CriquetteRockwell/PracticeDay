import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, FlatList, TouchableOpacity, SectionList, ImageBackground } from 'react-native'
import firebase from 'firebase'
import _ from 'lodash'

export default class Exercices extends React.Component {
    constructor(){
        super()
        //firebase.auth()
        this.state={exercices:[], chargement:true}
    }
    
    componentDidMount(){
        const ref = firebase.database().ref('exercices')
        ref.orderByChild('cat').on('value', (snapshot) => {
            this.setState({exercices: snapshot.val(), chargement:false})
        });
    }

    fromArrayToSectionData(data) {
        let ds = _.groupBy(data, d => d.cat);
        ds = _.reduce(
            ds,
            (acc, next, index) =>{
                acc.push({
                    key: index,
                    data: next
                });
                return acc;
            },
            []
        );
        ds = _.orderBy(ds, ["key"]);
        return ds;
    }

    render(){
        if(this.state.chargement){
            return(
                <Text>Chargement en cours</Text>
            )
        }
        else{
            const array = Object.values(this.state.exercices);
            const formatedData = this.fromArrayToSectionData(array);
            const renderSection = ({section}) => (
                <View style={{padding: 8, backgroundColor: '#6A84A8', width:'100%', opacity:0.9}}>
                    <Text style={{ color: 'white'}}>{section.key}</Text>
                </View>
            )
            return(
                <ImageBackground source={require('../assets/backgroundPiano.png')} style={styles.container}>
                    <SectionList
                        sections={formatedData}
                        keyExtractor={(item) => item.titre.toString()}
                        renderItem={({item}) =>
                            <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Exercice', {exo: item.titre})}>
                                    <Text style={styles.exercice}>{item.titre}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        renderSectionHeader={renderSection}
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
    exercice:{
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
        backgroundColor: '#D5E4F9',
        opacity:0.9,
        borderColor:'#98BDF0',
        borderWidth:4,
        borderRadius: 25
    }
})