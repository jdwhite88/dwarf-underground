import React, {Component} from 'react';
import './OtherArticles.css';
import ArticleLink from './ArticleLink';

class OtherArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleLinks: props.articles.map( (article) => {
            return (
                <ArticleLink src={article.src} alt={article.altText} >
                    {article.title}
                </ArticleLink>
            );
        })};
    }

    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                {this.state.articleLinks};
            </div> 
        );
    }

}

export default OtherArticles;