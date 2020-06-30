// in App.js
import React from 'react'
import { Admin, Resource, EditGuesser } from 'react-admin'
import drfProvider from './dataProvider'
import httpClient from './httpClient'
import { UserList } from './components/UserList'
import { CreateUser } from './components/CreateUser'

const App = () => (
    <Admin dataProvider={drfProvider('http://127.0.0.1:8000', httpClient)}>
        <Resource name="users" list={UserList} edit={EditGuesser} create={CreateUser}/>
    </Admin>
);

export default App
