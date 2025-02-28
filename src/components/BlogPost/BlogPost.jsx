import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import {
    BodyContainer,
    Container,
    Image
} from '../../components/StyledComponents/StyledComponents';
import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import './BlogPost.css'; // Import the CSS file

const BlogPost = (props) => {
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

    return (
        <Container>
            <ProgressBar />
            <Navigation />
            <BodyContainer>
                <Container small top={12}>
                    <h1>{props.title}</h1>
                    <p>{props.date}</p>
                    <Image src={props.image} />
                    <div id={`post_${props.id}`} dangerouslySetInnerHTML={{ __html: markdown }} className="markdown-content"></div>
                </Container>
            </BodyContainer>
            <Footer />
        </Container>
    );
}

export default BlogPost;