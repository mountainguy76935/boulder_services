import React from 'react';

export const AddResource = (props) => {
    const [title, setTitle] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [checked, setChecked] = React.useState({})

    const resetForm = (e) => {
        document.querySelector('.add-resource').reset()
    }

    // const handleEdit = () => {
    //     console.log('in edit', props)
    //     // setTitle(props.location.data.title);
    //     // setAddress(props.location.data.address);
    //     // setPhone(props.location.data.phone);
    //     // setUrl(props.location.data.url);
    //     // setChecked(props.location.data.checked)
    // }

    // React.useEffect(() => {
    //     if (!props.location.state) {
    //         console.log('no edit') 
    //         return;
    //     } else {
    //         handleEdit()
    //     }
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: title,
            address: address,
            phone: phone,
            url: url,
            checked: checked
        }
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

    }

    const services = [
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
                    <input type='text' name='title' placeholder={title} onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="address">Address</label>
                    <input type='text' name='address' placeholder={address} onChange={(e) => setAddress(e.target.value)}/>
                <label htmlFor="phone">Phone</label>
                    <input type='text' name='phone' placeholder={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label htmlFor="picture">Organization Picture URL</label>
                    <input type='text' name='picture' placeholder={url} onChange={(e) => setUrl(e.target.value)}/>
                <div className='checks' onChange={(e) => setChecked({...checked, [e.target.name]: e.target.value})}>
                    {services.map((a,i) => {
                        return(
                        <React.Fragment key={i}>
                            <input type='checkbox' name={a}/>
                                <label htmlFor={`Service${i+1}`}>{a}</label>
                        </React.Fragment>
                        )
                    })}
                </div>
                    <button type="submit">Submit Information</button>
            </form>
    )
}