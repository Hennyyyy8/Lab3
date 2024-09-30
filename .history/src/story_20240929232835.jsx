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
                <button 
                onClick={deleteStory} 
                style={{
                    position: 'relative',
                    left: 600,
                    bottom:300,
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    fontSize: '20px',
                    textAlign: 'center',
                    lineHeight: '30px',
                    cursor: 'pointer'
                }}
            >
                &#10005;
            </button>
        </div>
    );
};

export default Story;