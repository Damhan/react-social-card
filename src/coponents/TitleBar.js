import React from 'react';
import '../App.css';

class TitleBar extends React.Component {
    render() {
        return (
            <div className="title-bar">
                <div className="title-icon inline">
                    <p>Im a icon</p>
                </div>
                <div className="title-header inline">
                    <p>Im a post Title</p>   
                </div>
            </div>
          );
    }
}

export default TitleBar;
