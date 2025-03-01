import React from 'react';
import Posts from "../../posts/Posts";
import Article from '../Article/Article';
import { Container } from "../StyledComponents/StyledComponents";

const ProjectBlogPosts = (props) => {
    return(
        <Container top={6}>
            <Container leftAlign bottom={4}>
                <h2>Related Posts</h2>
            </Container>
            {Posts.map((post) => {
                if (props.categories && props.categories.some(category => post.categories.includes(category))) {
                    return (
                        <Article
                            route={post.route}
                            thumbnail={post.image}
                            title={post.title}
                            date={post.date}
                            description={post.description}
                        />
                    )}    
                return null;
                }
            )}
        </Container>
    )
}

export default ProjectBlogPosts;
