import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';


const placeList = props => {

	return (
		<FlatList 
			style={styles.listContainer}
			data={props.places}
			renderItem={(info) => (
	      <ListItem 
	      	placeName={info.item.name}
	      	placeImg={info.item.image}
	      	onItemPressed={() => props.onItemDeleted(info.item.key)}
	      />
			)}
		/>
	);
};


const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    margin: 5
  }
});

export default placeList;

