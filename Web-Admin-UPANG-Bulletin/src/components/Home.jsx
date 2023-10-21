import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialPosts = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    body: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    `,
    imageUrl: 'https://via.placeholder.com/150', // Add your image URL here
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    body: 'This is the body of Post 2.',
    imageUrl: 'https://via.placeholder.com/150', // Add your image URL here
  },
  {
    id: 3,
    title: 'Lorem Ipsum',
    body: 'This is the body of Post 3.',
    imageUrl: 'https://via.placeholder.com/150', // Add your image URL here
  },
  // Add more posts here
  {
    id: 4,
    title: 'New Post 1',
    body: 'This is the body of the new post 1.',
    imageUrl: 'https://via.placeholder.com/150', // Add your image URL here
  },
  {
    id: 5,
    title: 'New Post 2',
    body: 'This is the body of the new post 2.',
    imageUrl: 'https://via.placeholder.com/150', // Add your image URL here
  },
  {
    id: 6,
    title: 'New Post 3',
    body: 'This is the body of the new post 3.',
    imageUrl: 'https://via.placeholder.com/150', // Add your image URL here
  },
];

const Home = () => {

  const [posts, setPosts] = useState(initialPosts);

  const updatePost = (postId) => {
    // Simulate updating a specific post with new data
    const updatedPost = {
      id: postId,
      title: `Updated Post ${postId}`,
      body: `This is the updated body of Post ${postId}.`,
      imageUrl: 'https://via.placeholder.com/150', // Add your updated image URL here
    };

    const updatedPosts = posts.map((post) =>
      post.id === postId ? updatedPost : post
    );

    setPosts(updatedPosts);
  };

  const resetPost = (postId) => {
    // Reset a specific post to its initial state
    const resetPosts = posts.map((post) =>
      post.id === postId ? initialPosts.find((p) => p.id === postId) : post
    );

    setPosts(resetPosts);
  };

  return (

    <div>
      <nav class="sticky top-0 z-50 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div class="mb-2 sm:mb-0">
            <a href="#" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">UPang Bulletin</a>
        </div>
        <div>
        <Link to="/login"> <a href="#" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Login</a>    </Link>
  </div>
</nav>



    <div className="container mx-auto p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 relative"
            style={{ width: '325px', height: '550px' }} // Set fixed dimensions here
          >
            <img
              src={post.imageUrl}
              alt="Post Image"
              className="w-32 h-32 mb-20 rounded-full mx-auto"
            />
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-700 text-lg">{post.body}</p>
            <div className="absolute bottom-0 right-0 p-2">
              <button
                className="bg-green-900 text-white px-2 py-1 rounded"
                onClick={() => updatePost(post.id)}
              >
                Update
              </button>
              <button
                className="bg-yellow-400 hover:bg-yellow-600 text-black px-2 py-1 ml-2 rounded"
                onClick={() => resetPost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
