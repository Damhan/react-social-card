import React from 'react';
import '../App.css';
import TitleBar from './TitleBar';
import SocialContent from './SocialContent';
import SocialBar from './SocialBar';

class SocialCard extends React.Component {
    render() {
        return (
            <div className="social-card">
                <div className="main-col">
                    <TitleBar />
                    <SocialContent />
                    <SocialBar />
                </div>
            </div>
          );
    }
}

export default SocialCard;
