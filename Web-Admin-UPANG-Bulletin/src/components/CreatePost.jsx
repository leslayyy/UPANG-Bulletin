import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      images: [],
      metaDescription: '',
      slugTitle: '',
      featured: false,
      posts: [], // Initialize the posts array as an empty array
    };
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleMetaDescriptionChange = (e) => {
    this.setState({ metaDescription: e.target.value });
  };

  handleSlugTitleChange = (e) => {
    this.setState({ slugTitle: e.target.value });
  };

  handleFeaturedChange = (e) => {
    this.setState({ featured: e.target.checked });
  };

  handleImageChange = (e) => {
    const files = e.target.files;
    this.setState({ images: [...this.state.images, ...files] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  
    // Create a new post object with textual data
    const newPost = {
      title: this.state.title,
      text: this.state.text,
      metaDescription: this.state.metaDescription,
      slugTitle: this.state.slugTitle,
      featured: this.state.featured,
    };
  
    // Create a FormData object
    const formData = new FormData();
  
    // Append textual data as JSON
    formData.append('post', JSON.stringify(newPost));
  
    // Append each image to FormData
    for (const image of this.state.images) {
      formData.append('images', image);
    }
  
    // Send a POST request to your API with the FormData
    fetch('http://localhost:2000/api/post', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        // Set the posts state with data.posts received from the API
        this.setState({
          posts: data.posts,
        });
        // Reset the form
        this.handleReset();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  handleReset = () => {
    this.setState({
      title: '',
      text: '',
      images: [],
      metaDescription: '',
      slugTitle: '',
      featured: false,
    });
  };
  render() {
    return (
      <div>
        <nav class="sticky top-0 z-50 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div class="mb-2 sm:mb-0">
            <a href="#" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">UPang Bulletin</a>
        </div>
        <div>
             <Link to="/login"> <a href="#" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Login</a>   </Link>
      </div>
      </nav>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl mb-4">Create New Post</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="postTitle"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Title:
              </label>
              <input
                id="postTitle"
                type="text"
                value={this.state.title}
                onChange={this.handleTitleChange}
                placeholder="Enter post title..."
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="postText"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Content:
              </label>
              <textarea
                id="postText"
                value={this.state.text}
                onChange={this.handleTextChange}
                placeholder="Type your content here..."
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="metaDescription"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Meta Description:
              </label>
              <input
                id="metaDescription"
                type="text"
                value={this.state.metaDescription}
                onChange={this.handleMetaDescriptionChange}
                placeholder="Enter meta description..."
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="slugTitle"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Slug Title:
              </label>
              <input
                id="slugTitle"
                type="text"
                value={this.state.slugTitle}
                onChange={this.handleSlugTitleChange}
                placeholder="Enter slug title..."
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="featured"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Featured:
              </label>
              <input
                id="featured"
                type="checkbox"
                checked={this.state.featured}
                onChange={this.handleFeaturedChange}
                className="mr-2 leading-tight"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="imageUpload"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Attach Images:
              </label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                multiple
                onChange={this.handleImageChange}
                className="border-gray-200"
              />
            </div>
            <div className="mb-4 flex justify-center">
            <button
            type="submit"
           className="bg-green-900 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
           >
            Post
          </button>
          <button
          type="button"
         onClick={this.handleReset}
         className="ml-2 bg-yellow-400 text-black py-1 px-2 rounded focus:outline-none focus:shadow-outline"
         >
         Reset
      </button>
</div>
          </form>
        </div>

        <div>
          {this.state.posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded p-4 mb-4 flex flex-col"
            >
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.text}</p>
              <div className="mt-4">
                {post.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={URL.createObjectURL(image)}
                    alt={`Post Image ${imgIndex}`}
                    className="max-w-full h-auto"
                  />
                ))}
              </div>
              <div className="mt-4">
                <p className="text-gray-700">
                  Meta Description: {post.metaDescription}
                </p>
                <p className="text-gray-700">
                  Slug Title: {post.slugTitle}
                </p>
                <p className="text-gray-700">
                  Featured: {post.featured ? 'Yes' : 'No'}
                </p>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() =>
                    alert('View button clicked')
                  }
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CreatePost;
