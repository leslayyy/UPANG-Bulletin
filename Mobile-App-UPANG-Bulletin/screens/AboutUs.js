import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'





const developerData = [

  {
    name: 'Joeshua Villarosa',
    role: 'Front End/Back End',
    image: require('../assets/Developers/Joeshua.png')

    
  },
  {
    name: 'Lesley Ann Rantayo',
    role: 'Front End/Backend',
    image: require('../assets/Developers/lesley.jpg')


    
  },
  {
    name: 'Myro Mercado',
    role: 'Front End',
    image: require('../assets/Developers/Myro.jpg')


    
  },
  {
    name: 'Ashly Aficial',
    role: 'Gatherer Resources',
    image: require('../assets/Developers/Ashly.jpg')


    
  },
  {
    name: 'Joeffrey Lambino',
    role: 'Gatherer Resources',
    image: require('../assets/Developers/Joeffrey.jpg')


    
  },
]


const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UPang Bulletin Application</Text>
      <Text style={styles.introText}>
      UPang Bulletin is a live service social media platform that helps the students of the 
      University of Pangasinan to stay updated with relevant news, events, and announcements 
      from each of the University's departments by their respected Student Councils.
      </Text>

      <Text style={styles.developerTitle}>Meet the Developers</Text>
      {developerData.map((developer, index) => (
        <View key={index} style={styles.developerContainer}>
          <Image source={developer.image} style={styles.avatar} />
          <View style={styles.developerInfo}>
            <Text style={styles.name}>{developer.name}</Text>
            <Text style={styles.role}>{developer.role}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.primary
    
  },
  introText: {
    marginBottom: 20,
    fontSize:15,
  },
  developerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 85,
    color: COLORS.primary,


  },
  developerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    color: COLORS.white,
    borderRadius: 40,
    backgroundColor:'#355E3B',
    textAlign: 'center'
    
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
    borderColor: COLORS.primary
  },
  developerInfo: {
    flexDirection: 'column',
    color: COLORS.white
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white

  },
  role: {
    fontSize: 15,
    color: COLORS.white
  }
})

export default AboutUs
