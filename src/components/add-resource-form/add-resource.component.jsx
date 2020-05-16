import React from 'react';
import { withRouter } from 'react-router-dom';

const AddResource = (props) => {
    const [title, setTitle] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [website, setWebsite] = React.useState('');
    const [services, setServices] = React.useState([]);
    const [id, setId] = React.useState('');

    const resetForm = () => {
        document.querySelector('.add-resource').reset();
        setTitle('')
        setAddress('')
        setPhone('')
        setUrl('')
        setWebsite('')
        setServices([''])
        props.handleUpdate()
    }

    const handleEdit = async () => {
        await setTitle(props.location.state.data.title);
        await setAddress(props.location.state.data.address);
        await setPhone(props.location.state.data.phone);
        await setUrl(props.location.state.data.url);
        await setWebsite(props.location.state.data.website);
        await setServices(props.location.state.data.services);
        await setId(props.location.state.data._id);
    }

    React.useEffect(() => {
        if (!props.location.state) {
            return;
        } else {
            console.log(props)
            handleEdit()
        }
    }, [])

    const handleChange = (e) => {
        let newChecked = [...services];
        let ind = newChecked.indexOf(e.target.name)
        if (!e.target.checked) {
            newChecked.splice(ind, 1)
            setServices(newChecked)
        } else {
            setServices([...newChecked, e.target.name]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: title,
            address: address,
            phone: phone,
            url: url,
            services: services,
            website: website
        }
        if (!props.location.state) {
            fetch('/', {
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
                        props.history.push('/resources')
                    }
                })
                .catch(err => console.log(err))
        } else {
            console.log('here', props)
            data.id = id;
            fetch('/edit-resource', {
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
                        props.history.push('/admin-resources')
                    }
                })
                .catch(err => console.log(err))
        }

    }

    const servicesList = [
        'Housing', 
        'Medical Care', 
        'Mental Health Care', 
        'Benefits', 
        'Veterans Services', 
        'Shelter', 
        'Food'
    ]

    return(
            <form className='add-resource' onSubmit={handleSubmit} method="POST">
                <label htmlFor="title">Organization Name</label>
                    <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="address">Address</label>
                    <input type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                <label htmlFor="phone">Phone</label>
                    <input type='text' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label htmlFor="website">Website</label>
                    <input type='text' name='website' value={website} onChange={(e) => setWebsite(e.target.value)}/>
                <label htmlFor="picture">Organization Picture URL</label>
                    <input type='text' name='picture' value={url} onChange={(e) => setUrl(e.target.value)}/>
                <div className='checks' onChange={handleChange}>
                    {servicesList.map((a,i) => {
                        let truthy = false;
                        if (services) {
                            truthy = services.includes(a) ? true : false;
                        }
                        return(
                        <React.Fragment key={i}>
                            <input type='checkbox' checked={truthy} name={a}/>
                                <label htmlFor={`Service${i+1}`}>{a}</label>
                        </React.Fragment>
                        )
                    })}
                </div>
                    <button type="submit">Submit Information</button>
            </form>
    )
}

export default withRouter(AddResource)