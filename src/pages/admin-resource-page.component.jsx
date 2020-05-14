import React from 'react'
import { ResourceList } from '../components/resource-list/resource-list.component';
import { AddResource } from '../components/add-resource-form/add-resource.component';

export const AdminResourcePage = () => {
    return(
        <React.Fragment>
            <AddResource />
            <ResourceList admin={true}/>
        </React.Fragment>
    )
}