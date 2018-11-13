# ra-data-drf
A React-admin data provider for backends built with Django REST Framework

## Installation

```sh
npm install --save ra-data-drf
```

## Usage

```js
// in App.js
import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import drfProvider from 'ra-data-drf';
import { UserList } from './users';

const App = () => (
    <Admin dataProvider={drfProvider('http://path.to.api/')}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
```
