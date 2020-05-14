import React from 'react';
import { Resource } from '../resource/resource.component';

export const ResourceList = (props) => {
    const [data, setData] = React.useState([])

    const getData = () => {
        fetch('/data/resources')
            .then(response => {
                return response.json()
            })
            .then(newData => {
                setData([...data, ...newData])
            })
            .catch(err => console.log(err))
    }

    React.useEffect(() => getData(), [])

        return(
            <React.Fragment>
                {data ? 
                data.map((a,i) => {
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