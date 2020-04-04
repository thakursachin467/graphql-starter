import { gql } from "apollo-boost";

export const ADD_TASK = gql`
  mutation addTask($input: addTaskInput) {
    addTask(input: $input) {
      task
      id
      completed
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($input: updateTaskInput) {
    updateTask(input: $input) {
      task
      id
      completed
    }
  }
`;

export const GET_TASK = gql`
  query getTask($input: fetchTaskFilter) {
    fetchTasks(filter: $input) {
      task
      id
      completed
    }
  }
`;

export const GET_TASKS = gql`
  query getTasks {
    fetchTasks {
      task
      id
      completed
    }
  }
`;
