import React from 'react';
import { Resource } from '../resource/resource.component';

export const ResourceList = (props) => {
    const [data, setData] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false)

    const getData = () => {
        fetch('/data/resources')
                .then(response => {
                    return response.json()
                })
                .then(newData => {
                    setData([...data, ...newData])
                })
                .then(() => {
                    setLoaded(true)
                })
                .catch(err => console.log(err))
    }

    React.useEffect(() => getData(), [])

        return(
            <React.Fragment>
                {data && loaded ? 
                data.map(a => {
                    return(
                        <div>
                            <Resource data = {a} admin={props.admin}/>
                        </div>
                    )
                }) :
                    <div>
                        <p>No data!</p>
                    </div>
            }
        </React.Fragment>
    )
}