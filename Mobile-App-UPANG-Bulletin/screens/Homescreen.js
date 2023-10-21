import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 1',
      content: 'This is the content of post 1',
      image: 'https://via.placeholder.com/300',
      liked: false,
      bookmarked: false,
      comments: [],
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'This is the content of post 2',
      image: 'https://via.placeholder.com/300',
      liked: false,
      bookmarked: false,
      comments: [],
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'This is the content of post 3',
      image: 'https://via.placeholder.com/300',
      liked: false,
      bookmarked: false,
      comments: [],
    },
    // ... (other post data)
  ]);

  const [commentText, setCommentText] = useState('');

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const handleBookmark = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post
      )
    );
  };

  const handleAddComment = (postId) => {
    if (commentText.trim() === '') return;

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const updatedComments = [...post.comments, commentText];
          return { ...post, comments: updatedComments };
        } else {
          return post;
        }
      })
    );

    // Clear the input field
    setCommentText('');
  };

  return (
    <View style={{ flex: 1, margin: 20 }}>
      <ScrollView>
        {posts.map((post) => (
          <View key={post.id} style={{bottom:50, top: 30, padding: 10, marginBottom:5, marginTop: 30, borderWidth: 1,borderRadius:25, borderColor: COLORS.primary,  }}>
            <Text style={{ fontSize: 20, fontWeight: 900,color: COLORS.primary }}>{post.title}</Text>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={{ uri: post.image }}
                style={{ width: 300, height: 200, borderWidth: 1, borderColor: 'gray' }}
              />
            </View>
            <Text>{post.content}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => handleLike(post.id)}>
                <FontAwesome
                  name={post.liked ? 'heart' : 'heart-o'}
                  size={24}
                  color={post.liked ? COLORS.primary : 'black'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleBookmark(post.id)}>
                <FontAwesome
                  name={post.bookmarked ? 'bookmark' : 'bookmark-o'}
                  size={24}
                  color={post.bookmarked ? COLORS.primary: 'black'}
                />
              </TouchableOpacity>
            </View>
            {/* Comment Section */}
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: 900,color: COLORS.primary }}>Comments:</Text>
              {post.comments.map((comment, index) => (
                <Text key={index} style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginTop: 5 }}>{comment}</Text>
              ))}
              <TextInput
                placeholder="Add a comment..."
                value={commentText}
                onChangeText={(text) => setCommentText(text)}
                onSubmitEditing={() => handleAddComment(post.id)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
