import React from 'react';

const Story = ({ story, deleteStory }) => {
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
                <button onClick={deleteStory}>Remove Story</button>
        </div>
    );
};

export default Story;