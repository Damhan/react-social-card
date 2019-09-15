import React from 'react';
import '../App.css';

class TitleBar extends React.Component {
    render() {
        return (
            <div className="title-bar">
                <img className="title-img" src="assets/profileicon.png" alt="icon borrowed from iconfinder.com, all rights belong to them. Simply used for placeholder purposes."/>
            </div>
          );
    }
}

export default TitleBar;
