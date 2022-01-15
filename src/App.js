import './App.css';
import { connect } from 'react-redux';
import { getPosts as getPostsAction, deletePost as deletePostAction } from './redux/modules/posts'
import Post from './components/Post/GetPosts';
import { useEffect, useState } from 'react';
import CreatePost1 from './components/CreatePost/CreatePost';
function App({ posts, getPosts, deletePost}) {
  useEffect(() => {
    getPosts();
  }, []);

 
  return (
    <div className="App">
      <CreatePost1/>
      {posts.length && posts.map(item =>
        <Post
          key={item.id}
          id={item.id}
          deletePost={deletePost}
          title={item.title}
          body={item.body} />)}
    </div>
  );
}

export default connect(
  ({ posts }) => ({ posts: posts.posts }),
  {
    getPosts: getPostsAction,
    deletePost: deletePostAction
  }

)(App);
