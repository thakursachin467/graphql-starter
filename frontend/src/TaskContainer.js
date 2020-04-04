import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Task } from "./Task";
import { AddTask } from "./AddTask";
import { GET_TASKS } from "./Query";
const TaskContainer = () => {
  const { loading, error, data, refetch } = useQuery(GET_TASKS, {
    fetchPolicy: "cache-and-network"
  });

  return (
    <>
      {" "}
      <AddTask refetch={refetch} />
      <Task error={error} loading={loading} data={data} />
    </>
  );
};

export { TaskContainer };
