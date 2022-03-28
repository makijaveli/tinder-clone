import React, {useState} from 'react';
import Nav from "../components/navigation/Nav";
import AuthModal from "../components/auth/AuthModal";

const Home = () => {
    // State
    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setSignUp] = useState(true);

    const authToken = false; //todo Check this

    const handleClick = () => {
        console.log('clicked');
        setShowModal(true);
        setSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav minimal={false}
                 authToken={authToken}
                 setShowModal={setShowModal}
                 showModal={showModal}
                 setSignUp={setSignUp}/>
            <div className='home'>
                <h1 className='primary-title'>Swipe Right</h1>
                <button className={'primary-button'} onClick={handleClick}>
                    {authToken ? 'Sign out' : 'Create Account'}
                </button>
                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    );
};

export default Home;