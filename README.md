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

## Features

This package was built to work with the default configurations of Django REST Framework. It currently supports:

* Sorting with DRF's [OrderingFilter](https://www.django-rest-framework.org/api-guide/filtering/#orderingfilter), using the `ordering` query parameter.
* Pagination with DRF's [PageNumberPagination](https://www.django-rest-framework.org/api-guide/pagination/#pagenumberpagination), using the `page` and `page_size` query parameters.
* Filtering with django-filter's [DjangoFilterBackend](https://www.django-rest-framework.org/api-guide/filtering/#djangofilterbackend)
