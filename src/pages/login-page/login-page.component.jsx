import React from 'react';
import { withRouter } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('user and pw', username, password);
    }

    return(
        <div>
            <form className='login-form'>
                <label htmlFor="username">UserName</label>
                    <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password</label>
                    <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="confirm-password">Confirm Password</label>
                    <input type='password' name='confirm-password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)