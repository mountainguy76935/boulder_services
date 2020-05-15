import React from 'react';

export const AddResource = (props) => {
    const [title, setTitle] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [services, setServices] = React.useState([]);
    const [id, setId] = React.useState('');

    const resetForm = () => {
        document.querySelector('.add-resource').reset();
        setTitle('')
        setAddress('')
        setPhone('')
        setUrl('')
        setServices([''])
        props.handleUpdate()
    }

    const handleEdit = async () => {
        await setTimeout(() => console.log(props), 100)
        await setTitle(props.location.state.data.title);
        await setAddress(props.location.state.data.address);
        await setPhone(props.location.state.data.phone);
        await setUrl(props.location.state.data.url);
        await setServices(props.location.state.data.services);
        await setId(props.location.state.data._id);
        await console.log('1', services, props.location.state.data.services)
    }

    React.useEffect(() => {
        if (!props.location) {
            console.log('no edit') 
            return;
        } else {
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
        console.log('services', services)
        const data = {
            title: title,
            address: address,
            phone: phone,
            url: url,
            services: services,
            id: id
        }
        if (!props.location) {
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
                        resetForm()
                    }
                })
                .catch(err => console.log(err))
        } else {
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
                <label htmlFor="picture">Organization Picture URL</label>
                    <input type='text' name='picture' value={url} onChange={(e) => setUrl(e.target.value)}/>
                <div className='checks' onChange={handleChange}>
                    {servicesList.map((a,i) => {
                        let truthy = false;
                        if (services) {
                            truthy = services.includes(a) ? true : false;
                        }
                        console.log('what the hell', services, a, truthy)
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