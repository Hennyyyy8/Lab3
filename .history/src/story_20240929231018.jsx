import React from 'react';

const Story = ({ story, removeStory }) => {
    const { title, link, creator, description, image_url } = story;

    return (
        <div className="story">
            <img 
            src={image_url}
            alt={title}
            style={{ width: '100%', height: 'auto' }} />
            <h2>{title}</h2>
            <p><strong>By:</strong> {creator ? creator.join(', ') : 'Unknown'}</p>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
                <button 
        onClick={removeStory} 
        style={{
          backgroundColor: 'red', 
          color: 'white', 
          border: 'none', 
          borderRadius: '50%', 
          width: '30px', 
          height: '30px', 
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          fontSize: '16px', 
          cursor: 'pointer',
          lineHeight: '30px', 
          textAlign: 'center'
        }}
      />
        </div>
    );
};

export default Story;