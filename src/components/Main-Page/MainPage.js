import React, { Component, createRef } from 'react'
import Logo from '../../Assests/Main Menu/Logo/New/Logo-2.png'
import './MainPage.css';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
class MainPage extends Component {
    render() {
        const ref = createRef();
        const handleClick = () => {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        return (
            <React.Fragment>
                <CSSTransition in={true} appear={true} classNames="fade" timeout={2000} >
                    <div className="Body">
                        <header className="Header">
                            <nav>
                                <div className="Logo" ><img src={Logo} alt="Logo" /></div>
                                <ul className="navigation">
                                    <li ><p className="item" onClick={handleClick} >More About Website</p></li>
                                    <li ><p className="item" >Contents</p></li>
                                    <li ><NavLink to="About-me" style={{ textDecoration: "none" }}  ><p className="item" >About Me</p></NavLink></li>
                                </ul>
                            </nav>
                        </header>
                        <section className="container" >
                            <div className="article" >
                                <h1 ref={ref} > Hello World! </h1>
                                <p> This is my presentational website where I present my front-end skills with React. </p>
                                <br />
                                <p className="link" > Proceed to Contents </p>
                            </div>
                        </section>

                    </div>
                </CSSTransition>

            </React.Fragment>
        )
    }
}
export default MainPage;