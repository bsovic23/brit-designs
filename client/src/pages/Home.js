import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return(
        <section class='home'>
            <header>
                HEADER
            </header>
            <section class='home-body'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-2'>
                            NAV SMALL SECTION INSERT HERE
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
                FOOTER
            </footer>
        </section>
    )
};

export default Home;