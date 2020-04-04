import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo-client";
import { TaskContainer } from "./TaskContainer";

function App() {
  return (
    <ApolloProvider client={client}>
      <TaskContainer />
    </ApolloProvider>
  );
}

export default App;
