// src/queries.js
import { gql } from "@apollo/client";

export const GET_JOBS = gql``;
export const GET_JOBS_BY_FILTER = gql`
  query GetJobs(
    $keyword: String
    $location: String
    $minSalary: Int
    $maxSalary: Int
  ) {
    jobs(
      filter: {
        keyword: $keyword
        location: $location
        minSalary: $minSalary
        maxSalary: $maxSalary
      }
    ) {
      id
      title
      company
      location
      type
      salary {
        min
        max
      }
      description
      experienceLevel
      remote
      postedAt
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        email
        role
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation Signup(
    $username: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    signup(
      username: $username
      email: $email
      password: $password
      role: $role
    ) {
      token
      user {
        id
        username
        email
        role
      }
    }
  }
`;
