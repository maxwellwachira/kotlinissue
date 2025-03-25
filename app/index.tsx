import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { imglyEditor } from '@/editor';
import { SourceType } from '@imgly/editor-react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  // Assuming the image is in your assets directory
  const originalImage = require('@/assets/images/image-to-edit.jpg');
  const [displayImage, setDisplayImage] = useState(originalImage);

  const handleEditImage = async () => {
    try {
      const photoResult = await imglyEditor({
        userId: "uniqueUserId",
        mediaType: "photo",
        source: {
          source: originalImage,
          type: SourceType.IMAGE
        }
      })
      if (photoResult != null) {
        const editorResult = photoResult.artifact as string;
        setDisplayImage(editorResult);
      }
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <LinearGradient
      colors={['#f0f4f8', '#e6eaf4']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Text style={styles.title}>Image Editor</Text>

          {/* Image Display */}
          <View style={styles.imageContainer}>
            <Image
              source={displayImage}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          {/* Button Container */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleEditImage}
            >
              <Text style={styles.buttonText}>Edit Image</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setDisplayImage(originalImage)}
            >
              <Text style={styles.buttonText}>View Original</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
    color: '#2c3e50',
    textAlign: 'center',
    letterSpacing: 1,
  },
  imageContainer: {
    width: '100%',
    height: width * 0.8, // Responsive height based on screen width
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: 25,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 15,
    width: '48%',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#3498db',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

export default HomeScreen;