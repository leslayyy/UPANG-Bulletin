import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { upcomingEvents, eventCategory } from '../data/EventsData';
import COLORS from '../constants/colors';


const Latest = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const renderEventItem = ({ item }) => (
    <TouchableOpacity style={styles.eventItem}>
      <Image source={item.image} style={styles.eventImage} />
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryCard,
        { backgroundColor: item.categoryName === selectedCategory ? 'lightblue' : 'white' },
      ]}
      onPress={() => setSelectedCategory(item.categoryName)}
    >
      <Text style={styles.categoryName}>{item.categoryName}</Text>
    </TouchableOpacity>
  );

  const filteredEvents =
  selectedCategory === 'All'
    ? upcomingEvents
    : upcomingEvents.filter((event) => event.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.categoryList}
          data={eventCategory}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={filteredEvents}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={filteredEvents}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 16,
    color: COLORS.primary,
    marginTop: 50,


  },
  flatListContainer: {
    flexDirection: 'column',
    gap:16,
    
    
  },
  categoryCard: {
    height: 'fit-content',
    paddingRight: 25,
    backgroundColor: COLORS.primary,
    
    
    
  },
  categoryName: {
    color: COLORS.primary,
    fontWeight: 'bold',
    
  
  },
  eventItem: {
    width: '43vw',
    height: 250,
    marginRight: 16,
    marginTop:25,
    padding: 8,
    borderRadius: 10,
    backgroundColor:'#355E3B',
    borderColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 200,
    shadowRadius: 50,
    elevation: 4,
    color:COLORS.primary

  },
  eventImage: {
    width: 150,
    height: 120,
    borderRadius: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
    color: COLORS.white
  },
  eventDate: {
    fontSize: 12,
    color: COLORS.white,
    marginHorizontal: 8,
    marginBottom: 16,
  },
});

export default Latest;
