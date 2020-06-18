# ra-data-drf
A React-admin data provider for backends built with Django REST Framework

## Support
To use this you have to be on react-admin v2.x or similar (it still does not support major v3.x)

## Installation

```sh
npm install --save ra-data-drf
```

## Usage

```js
// in App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
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

This package was built to work with the default configurations of a Django app using Django REST Framework. It currently supports:

* Django URLs with trailing slashes.
* Sorting with DRF's [OrderingFilter](https://www.django-rest-framework.org/api-guide/filtering/#orderingfilter), using the `ordering` query string parameter.
* Pagination with DRF's [PageNumberPagination](https://www.django-rest-framework.org/api-guide/pagination/#pagenumberpagination), using the `page` and `page_size` query string parameters.
* Filtering with `django-filter`'s [DjangoFilterBackend](https://www.django-rest-framework.org/api-guide/filtering/#djangofilterbackend)


### Sorting

This data provider translates `react-admin`'s sorting requests from `sort=["field","ASC"]` and `sort=["field","DESC"]` to `ordering=field` and `ordering=-field`, respectively. `react-admin` only allows sorting by one column at a time, so multi-column sorting is NOT supported (even though DRF supports it).

 It's intended to work with DRF's [OrderingFilter](https://www.django-rest-framework.org/api-guide/filtering/#orderingfilter), but it should work with any other sorting solution as long as it uses the same query string parameter and format.


### Pagination

This data provider implements pagination using the `page` and `page_size` query string parameters, indicating the range of results we're requesting and the number of results we're expecting in the response, respectively. In order to render correctly, `react-admin` needs to know the total amount of results, which we can get from the `count` value included in the default response from DRF.

 It's intended to work with DRF's [PageNumberPagination](https://www.django-rest-framework.org/api-guide/pagination/#pagenumberpagination), but it should work with any other pagination solution as long as it uses the same query string parameters _and_ the response includes either a `count` value or a `Content-range` header with the total number of results.


### Filtering

Apart from those already mentioned, every other query string parameter will be considered as a filter by DRF. This is intended to work with `django-filter`'s [DjangoFilterBackend](https://www.django-rest-framework.org/api-guide/filtering/#djangofilterbackend), but it should work with any other filtering solution that uses query string parameters as filters.
