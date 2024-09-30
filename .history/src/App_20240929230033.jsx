import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from './story';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
    </div>
  );
}

export default App;
