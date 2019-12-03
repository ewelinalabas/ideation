import React from 'react';
import { IdeaForm } from './components/IdeaForm';
import { IdeasList } from './components/IdeasList';  
import './App.css';

const App = () => {
  return (
    <div className="App">
      < IdeaForm />
      < IdeasList />
    </div>
  );
}

export default App;
