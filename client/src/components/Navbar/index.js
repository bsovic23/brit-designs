import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = ({navElements}) => {
    return(
        <section class='navbar'>
            {navElements.map((nav) => (
                <Link key={nav.number} to={nav.link} class='row'>
                    <button class='nav-button'>
                        {nav.text}
                    </button>
                </Link>
            ))}
        </section>
    )
};

export default Navbar;