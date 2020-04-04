const { gql } = require("apollo-server");

const typeDefs = gql`
  type Tasks {
    task: String
    id: ID
    completed: Boolean
  }

  input fetchTaskFilter {
    id: ID!
  }

  input addTaskInput {
    name: String!
    completed: Boolean!
  }

  input updateTaskInput {
    id: ID!
    name: String
    completed: Boolean
  }

  type Query {
    fetchTasks(filter: fetchTaskFilter): Tasks
  }

  type Mutation {
    addTask(input: addTaskInput): Tasks

    updateTask(input: updateTaskInput): Tasks
  }
`;

module.exports = typeDefs;
