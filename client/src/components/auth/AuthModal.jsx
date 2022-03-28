import React, {useState} from 'react';

const AuthModal = ({setShowModal, isSignUp}) => {
    // State
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = () => {
        setShowModal(false)
    }

    function handleSubmit(e) {
        e.preventDefault();
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError("Password need to match")
            }
            console.log('make a post request to database')
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div className='auth-modal'>
            <div className='close-icon' onClick={handleClick}>X</div>
            <h2>{isSignUp ? 'Create account' : 'Log in'}</h2>
            <p>Terms and conditions...</p>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder='email'
                       required={true} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="password" id="password" placeholder='password'
                       required={true} onChange={(e) => setPassword(e.target.value)}/>
                {isSignUp && <input type="password" name="password-check" id="password-check" placeholder='confirm password'
                        required={true} onChange={(e) => setConfirmPassword(e.target.value)}/>}
                <input className='secondary-button' type="submit"/>
                <p>{error}</p>
            </form>
            <hr/>
            <h2>GET THE APP</h2>
        </div>
    );
};

export default AuthModal;