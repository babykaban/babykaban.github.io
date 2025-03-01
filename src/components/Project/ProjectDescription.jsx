import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

import { Container } from '../StyledComponents/StyledComponents';

import './ProjectDescription.css'; // Import the CSS file

const SSDescription = (props) => {
    const [markdown, setMarkdown] = useState('');

    const toggleZoom = (event) => {
        event.target.classList.toggle('zoomed');
    }

    useEffect(() => {
        const post_images = props.content_images ? props.content_images.map(img => require(`../../assets/img/${img}`)) : [];

        fetch(props.content)
            .then(response => response.text())
            .then(text => {
                let updatedText = text;
                post_images.forEach((image, index) => {
                    const regex = new RegExp(`image_${index}\\.png`, 'g');
                    updatedText = updatedText.replace(regex, image);
                });
                setMarkdown(marked(updatedText));
            });

        const handleImageClick = (event) => {
            if (event.target.tagName === 'IMG' && event.target.classList.contains('zoomable')) {
                toggleZoom(event);
            }
        };

        document.addEventListener('click', handleImageClick);

        return () => {
            document.removeEventListener('click', handleImageClick);
        };
    }, [props.content, props.content_images]);

    return(
        <Container top={3}>
            <h1>{props.title}</h1>
            <div id={`post_${props.id}`} dangerouslySetInnerHTML={{ __html: markdown }} className="markdown-content"></div>
        </Container>
    )
}

export default SSDescription;