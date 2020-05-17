import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from '../../components/form/form.component';

const LoginPage = (props) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            username: username,
            password: password
        }
        fetch('/login', {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then(response => {
                if (response.msg) {
                    console.log('success message', response.msg)
                    alert('approved!');
                    props.history.push('/resources')
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form className='login-form' onSubmit={handleSubmit}>
                <Form 
                    title='username' 
                    label="Username" 
                    value={username} 
                    type="text" 
                    changeFunction = {setUsername}/>
                <Form 
                    title='password' 
                    label="Password" 
                    value={password} 
                    type="password" 
                    changeFunction = {setPassword}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)