import React from 'react';
import './resource.styles.css'
import { Link, withRouter } from 'react-router-dom'

const Resource = (props) => {

    const handleDelete = (e) => {
        e.preventDefault()
        let data = {
            id: props.data._id
        }
        fetch('/delete-resource', {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then(response => {
                if (response.msg) {
                    alert('Successfully Deleted!');
                    props.history.push('/resources');
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="resource-box">
            <h1>{props.data.title}</h1>
            <p>address: {props.data.address}</p>
            <p>phone: {props.data.phone}</p>
            <a href={props.data.website}>Click to visit {props.data.name}</a>
            <img src={props.data.url} alt={props.data.title}/>
            <p>resources offered: {props.data.services.map(a => <span>{a} </span>)}</p>
            {props.admin ? 
            <div className='delete-resource'>
                <button onClick={handleDelete}>
                    Delete
                </button>
                <Link to={{
                    pathname: "/edit-resource",
                    state: {
                        data: props.data,
                        edit: true
                    }
                    }}>Edit</Link>
            </div> :
            null
        }
        </div>
    )
}

export default withRouter(Resource)