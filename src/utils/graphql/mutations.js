import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation addUser(
  $name: String!
  $email: String!
  $password: String!
) {
  addUser(
    name: $name
    email: $email
    password: $password
  ) {
    token
    user {
      _id
      name
    }
  }
}`;

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
login(email: $email, password: $password) {
  token
  user {
    name
    _id
  }
}
}
`;

// export const UPDATE_MOVIE = gql`

// `;
