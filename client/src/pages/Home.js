import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Imports
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {

    const navChoices = [
        {number: 1, text: "Home", link: "/"},
        {number: 2, text: "Request", link: "/request"},
        {number: 3, text: "Example", link: "/example"}
    ];

    return(
        <section class='home'>
            <header>
                <Header />
            </header>
            <section class='home-body'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-2'>
                            < Navbar navElements={navChoices}/>
                        </div>
                        <div class='col-6'>
                            <img
                            class='home-logo'
                            src={require('../images/nkfLogo.png')}
                            alt="Homepage Logo"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </section>
    )
};

export default Home;