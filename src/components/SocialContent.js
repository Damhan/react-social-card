import React from 'react';
import '../App.css';

class SocialContent extends React.Component {
    render() {
        return (
            <div className="social-content">
              <div className="post-img">
                  <img className="content-img" src="https://via.placeholder.com/450x200" alt="article-img"/>
              </div>
              <div className="img-caption">
                  <p>I'm an image caption</p>
              </div>

            </div>
          );
    }
}

export default SocialContent;
