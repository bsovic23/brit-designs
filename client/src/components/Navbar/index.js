import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = ({navElements}) => {
    return(
        <div class='navbar'>
            {navElements.map((nav) => (
                <Link key={nav.number} to={nav.link} >
                    <button>
                        {nav.text}
                    </button>
                </Link>
            ))}
        </div>
    )
};

export default Navbar;