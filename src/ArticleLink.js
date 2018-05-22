import React, {Component} from 'react';
import './OtherArticles.css';

class ArticleLink extends Component {
    render () {
        debugger;
        return (
            <div className="small-6 medium-3 columns other-article">
                <a href="#">
                    <img src={this.props.src} alt={this.props.alt} />
                    <p>{this.props.children}</p>
                </a>  
            </div>
        );
    }
}

export default ArticleLink;