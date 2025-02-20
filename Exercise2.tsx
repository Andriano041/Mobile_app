import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';

const openLink = url => {
  Linking.openURL(url).catch(err => console.error('Gagal membuka link:', err));
};

const CVApp = () => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={true}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('./assets/anx.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.nameSection}>
          <Text style={styles.name}>Andriano Anxz</Text>

          <Text style={styles.title}>UIxUX</Text>
        </View>
      </View>

      {/* About Me Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>About Me</Text>
        </View>
        <Text style={styles.sectionContent}>Nama: Andriano Tielung</Text>
        <Text style={styles.sectionContent}>Usia: 21</Text>
        <Text style={styles.sectionContent}>Asal: KLABAT</Text>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Education</Text>
        </View>
        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <Text style={styles.timelineTitle}>TKJ</Text>
            <Text style={styles.timelineSubtitle}>SKAVENKA</Text>
            <Text style={styles.timelineYear}>2019 - 2022</Text>
          </View>
          <View style={styles.timelineItem}>
            <Text style={styles.timelineTitle}>SISTEM INFORMASI</Text>
            <Text style={styles.timelineSubtitle}>UNIVERSITAS KLABAT</Text>
            <Text style={styles.timelineYear}>2022 - 2026</Text>
          </View>
        </View>
      </View>

      {/* Work Experience Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
        </View>
        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <Text style={styles.timelineTitle}>STUDENT UNKLAB</Text>
            <Text style={styles.timelineSubtitle}>KKNKKU </Text>
            <Text style={styles.timelineContent}>• WEB DESIGNER</Text>
            <Text style={styles.timelineContent}>
              • Collaborate with other development teams.
            </Text>
          </View>
        </View>
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Contact</Text>
        </View>
        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => openLink('https://instagram.com/andrianogst_4')}>
          <Text style={[styles.contactText, styles.linkText]}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactItem}
          onPress={() =>
            openLink('https://www.facebook.com/share/1AqNr7yYCo/')
          }>
          <Text style={[styles.contactText, styles.linkText]}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => openLink('http://tiktok.com/@anxz043')}>
          <Text style={[styles.contactText, styles.linkText]}>TikTok</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    padding: 30,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 60,
    marginBottom: 15,
  },
  nameSection: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'monospace',
    marginTop: 5,
  },
  section: {
    marginTop: 15,
    backgroundColor: 'white',
    padding: 15,
  },
  sectionHeader: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionContent: {
    color: 'black',
    lineHeight: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  contactItem: {
    marginBottom: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contactText: {
    color: '#333',
    fontSize: 14,
  },
  timeline: {
    borderLeftWidth: 2,
    borderLeftColor: '#333',
    paddingLeft: 20,
  },
  timelineItem: {
    marginBottom: 20,
    position: 'relative',
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  timelineSubtitle: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 2,
  },
  timelineYear: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
    marginBottom: 5,
  },
  timelineContent: {
    color: '#666',
    marginTop: 3,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontFamily: 'monospace',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
});

export default CVApp;
