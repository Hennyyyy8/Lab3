import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from './story';

function App() {

  // Get stories from news feed
  const [stories, setStories] = useState(news_feed.results);

  const deleteStory = (index) => {
    setStories(stories.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>News</h1>
      <div className="news-feed">
        {stories.map((story, index) => (
          <Story 
            key={index}
            story={story}
            removeStory={() => deleteStory(index)}/>
        ))}
      </div>
    </div>
  );
}

export default App;
