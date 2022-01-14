import './App.css';
import { connect } from 'react-redux';
import { getPosts as getPostsAction } from './redux/modules/posts'
import Post from './components/Post';
import { useEffect } from 'react';
function App({ posts, getPosts }) {
  // console.log(posts)
  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className="App">
      {posts.length && posts.map(item =>
        <Post
          key={item.id}
          title={item.title}
          body={item.body} />)}
    </div>
  );
}

export default connect(
  ({ posts }) => ({ posts: posts.posts }),
  {
    getPosts: getPostsAction
  }

)(App);
