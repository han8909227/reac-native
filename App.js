import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/place.jpg';


export default class App extends React.Component {
  state = {
    places: []
  };



  placeAddedHandler = placeName => {

    this.setState(prevState => {
      return{
        places: prevState.places.concat({
          key: Math.random(), 
          name: placeName,
          image: placeImage
        })
      }
    });
  };

  placeDeleteHandler = index => {
    this.setState(prevState => {
      return{
        places: prevState.places.filter(p => {
          return p.key != index;
        })
      };
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeleteHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
