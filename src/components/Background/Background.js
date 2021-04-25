import React, { Component } from 'react'


import Background1 from '../../Assests/Main Menu/Backgrounds/Background-1.jpg';
import Background2 from '../../Assests/Main Menu/Backgrounds/Background-2.jpg';
import Background3 from '../../Assests/Main Menu/Backgrounds/Background-3.jpg';
import Background4 from '../../Assests/Main Menu/Backgrounds/Background-4.jpg';

import BackgroundSlider from 'react-background-slider';
import './Background.css';

class Background extends Component {

    render() {
        return (
            <div>
                <BackgroundSlider id="background" images={[Background1, Background2, Background3, Background4]} duration={8} transition={0.8} />
            </div>
        )
    }
}

export default Background
