import React from 'react';
import './resource.styles.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

export const Resource = (props) => {
    useEffect(() => console.log(props.data), [])

    const handleDelete = (e) => {
        e.preventDefault();
        console.log(props.data._id)
    }

    return(
        <div className="resource-box">
            <h1>{props.data.title}</h1>
            <p>address: {props.data.address}</p>
            <p>phone: {props.data.phone}</p>
            <img src={props.data.url} alt={props.data.title}/>
            <p>resources offered: {props.data.checked.map(a => <span>{a} </span>)}</p>
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