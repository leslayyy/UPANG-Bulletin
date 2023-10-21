import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const Guidelines = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.guidelineContainer}>
        <Text style={styles.header}>Home</Text>
        <Text style={styles.guidelineText}>Slider for Latest Announcements</Text>
        <Text style={styles.guidelineText}>see some Latest Events</Text>
        <Text style={styles.guidelineText}>
Description: See what's going on in UPang! See the latest events, announcements, and more.
The home section includes posts about events, and each posts also includes a comment section 
where you can see what the students have to say!
        </Text>
      </View>

      <View style={styles.guidelineContainer}>
        <Text style={styles.header}>Latest Events</Text>
        <Text style={styles.guidelineText}>
          It will show all the available UpcomingEvents
        </Text>
        <Text style={styles.guidelineText}>
          Functionality: View some latest events.
        </Text>
        <Text style={styles.guidelineText}>
          Description: Access this section to view some latest uploads and you
          can view when you click some available information in the selected 
          buttons.
        </Text>
      </View>
      <View style={styles.guidelineContainer}>
        <Text style={styles.header}>Profile</Text>
        <Text style={styles.guidelineText}>
          View your information and edit it.
        </Text>
        <Text style={styles.guidelineText}>
          Functionality: - View your personal information. - Edit your
          information and add a photo.
        </Text>
        <Text style={styles.guidelineText}>
          Description: 
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
    backgroundColor: COLORS.grey
    
  },
  guidelineContainer: {
    marginBottom: 20,
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.white,
    borderRadius: 10,
    backgroundColor:'#355E3B',
    textAlign: 'center'
    
  },
  guidelineText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
    
  }
})

export default Guidelines
