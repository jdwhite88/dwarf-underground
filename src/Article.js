import React, { Component } from 'react';
import './Article.css';
import ArticleTitle from './ArticleTitle';

class Article extends Component {
    render() {
        return (
            <div className="large-8 medium-12 columns article">
            <ArticleTitle />
            </div>
        );
    }
}

export default Article;