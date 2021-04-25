import React, { Component } from 'react';
import Button from '../Button/Button';
import Background from '../Background/Background';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import './Welcome-Page.css';
import Logo from '../../Assests/Main Menu/Logo/New/Logo-1.png';
import { Link } from 'react-router-dom';

class WelcomePage extends Component {
    componentWillUnmount() {

    }
    render() {
        return (
            <React.Fragment>

                <Background />

                <div className="flex-container" >
                    <CSSTransition in appear={true} timeout={2000} classNames="fade"  >
                        <div className="flex-grid" >
                            <div className="LogoImg" > <img src={Logo} alt="Logo" /> </div>
                        </div>
                    </CSSTransition>
                    <CSSTransition in appear={true} timeout={2000} classNames="fade">
                        <div className="flex-grid" > <Link to="/Main-page" ><Button className="item" /></Link> </div>
                    </CSSTransition>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        shw: state.show
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);

