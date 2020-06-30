import React from 'react'
import {
    Create,
    SimpleForm,
    TextInput
} from 'react-admin'

export const CreateUser = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="username" />
          <TextInput source="email" />
      </SimpleForm>
  </Create>
)
