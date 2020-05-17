import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from '../../components/form/form.component';

const RegisterPage = (props) => {
    const [username, setUsername] = React.useState('');
    const [resources, setResources] = React.useState([]);
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [affiliation, setAffiliation] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [warning, setWarning] = React.useState('')

    const checkEqual = (pw, pwConf) => {
        if (pw === pwConf && pw.length>0 && pwConf.length>0) {
            return true
        } else {
            return false
        }
    }

    const loadResources = () => {
        fetch('/data/resources')
                .then(response => response.json())
                .then(newData => {
                    let data = newData.map(a => a.title);
                    setResources(data)
                })
                .catch(err => console.log(err))
    }

    React.useEffect(() => loadResources(), [])

    const handleSubmit = (e) => {
        e.preventDefault();
        let equal = checkEqual(password, confirmPassword)
        if (!equal && password.length>0 && confirmPassword.length>0) {
            setWarning('passwords not equal');
            setPassword('');
            setConfirmPassword('');
            return;
        } else if (!equal) {
            setWarning('must enter a value');
            return;
        }
        const data = {
            username: username,
            password: password,
            affiliation: affiliation,
            email: email,
            name: name
        }
        fetch('/register', {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then(response => {
                if (response.msg) {
                    alert('approved!');
                    props.history.push('/login')
                } else {
                    alert('email already exists! Go to Login Page, idiot');
                    props.history.push('/login')
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form className='register-form' onSubmit={handleSubmit}>
                <Form 
                    title='username' 
                    label="Username" 
                    value={username} 
                    type="text" 
                    changeFunction = {setUsername}/>
                <Form 
                    title='name' 
                    label="Name" 
                    value={name} 
                    type="text" 
                    changeFunction = {setName}/>
                <Form 
                    title='email' 
                    label="Email" 
                    value={email} 
                    type="email" 
                    changeFunction = {setEmail}/>
                <Form 
                    title='password' 
                    label="Password" 
                    value={password} 
                    type="password" 
                    changeFunction = {setPassword}/>
                <Form 
                    title='confirm-password' 
                    label="Confirm Password" 
                    value={confirmPassword} 
                    type="password" 
                    changeFunction = {setConfirmPassword}/>
                    <p>
                        <label>Affiliation</label>
                        <select 
                            id = "resources" 
                            onChange={(e) => setAffiliation(e.target.value)}>
                                <option disabled selected="selected">Select a Resource</option>
                                {resources.map(a => {
                                    return(
                                        <React.Fragment>
                                            <option >{a}</option>
                                        </React.Fragment>
                                    )
                                })}
                        </select>
                    </p>
                <button type='submit'>Submit</button>
            </form>
        <p>{warning}</p>
        </div>
    )
}

export default withRouter(RegisterPage)