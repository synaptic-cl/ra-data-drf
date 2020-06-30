import React, { Fragment } from 'react'
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton
} from 'react-admin'

export const UserList = ({ permissions, ...props }) => {
    if (permissions === null) {
        return null
    }
    return (
        <Fragment>
            <List {...props} exporter={false} >
                <Datagrid>
                    <TextField source="username" label="Username"/>
                    <EmailField source="email" label="Email"/>
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            </List>
        </Fragment>
    )
}
