import React from 'react';

const Nav = ({minimal, authToken, setShowModal, showModal, setSignUp}) => {

    function handleClick() {
        setShowModal(true)
        setSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container"></div>
            {!authToken && <button className='nav-button'
                                   onClick={handleClick}
                                   disabled={showModal}
            >Log in</button>}
        </nav>
    );
};

export default Nav;