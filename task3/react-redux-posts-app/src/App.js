import logo from './logo.svg';
import './App.css';
import PostsList from './features/posts/PostsList';
import PostForm from './features/posts/PostForm'
function App() {
  return (
    <div className="App">
      <h1>React Redux Posts App</h1>
      <PostForm />
      <PostsList />
    </div>
  );
}

export default App;
