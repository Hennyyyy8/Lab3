import React from 'react';

const Story = ({ story, removeStory }) => {
    const { title, link, creator, description, image_url } = story;

    return (
        <div className="story">
          <div className="story_header">
            <div className="story_image">
              <img 
                src={image_url || 'https://placehold.co/600x400'} 
                alt={title} 
              />
            </div>
            <h1>
              <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
            </h1>
            <span className="delete" onClick={removeStory}>X</span>
          </div>
          <p className="story_creator"><strong>By:</strong> {creator ? creator.join(', ') : 'Unknown'}</p>
          <p>{description}</p>
        </div>
      );
    };

export default Story;