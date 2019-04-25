import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, FlatList, TouchableOpacity, ImageBackground, SectionList} from 'react-native'
import firebase from 'firebase'
import _ from 'lodash'

export default class Pieces extends React.Component {
    constructor(){
        super()
        //firebase.auth()
        this.state={pieces:[], chargement:true}
    }

    fromArrayToSectionData(data) {
        let ds = _.groupBy(data, d => d.compo);
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
            const formatedData = this.fromArrayToSectionData(array);
            const renderSection = ({section}) => (
                <View style={{padding: 8, backgroundColor: '#E5892D', width:'100%', opacity:0.9}}>
                    <Text style={{ color: 'white'}}>{section.key}</Text>
                </View>
            )
            return(
                <ImageBackground source={require('../assets/backgroundViolin.png')} style={styles.container}>
                    <SectionList
                        sections={formatedData}
                        keyExtractor={(item) => item.titre.toString()}
                        renderItem={({item}) =>
                            <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('PieceItem', {morceau: item.titre})}>
                                    <Text style={styles.morceau}>{item.titre}</Text>
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