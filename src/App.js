import React from 'react';
import { IdeaForm } from './components/IdeaForm';
import { IdeasList } from './components/IdeasList';  
import './App.css';

const App = () => {
  return (
    <div>
      < IdeaForm />
      < IdeasList />
    </div>
  );
}

export default App;
