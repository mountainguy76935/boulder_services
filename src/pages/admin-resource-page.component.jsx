import React from 'react'
import { ResourceList } from '../components/resource-list/resource-list.component';
import { AddResource } from '../components/add-resource-form/add-resource.component';

export const AdminResourcePage = () => {
    const [updated, setUpdated] = React.useState(false)
    
    const handleUpdate = () => {
        setUpdated(true)
    }

    return(
        <React.Fragment>
            <AddResource handleUpdate={handleUpdate}/>
            <ResourceList admin={true}/>
        </React.Fragment>
    )
}