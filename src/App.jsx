import React from 'react';
import './App.css';
import PostsList from './components/PostList';
function App() {
  return (
    <div>
      <header>
      <h1>Vite + React + Redux Toolkit</h1>
      </header>
      <main>
        <PostsList />
      </main>
    </div>
  );
}

export default App;
