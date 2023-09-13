import { useContext } from "react";
import { TasksContext } from "@/context/tasksContext";

const useTasks = () => {
    const { allTasks, toggleTask, deleteTask, createTask, editTask, taskToBeUpdated, onTaskUpdate } = useContext(TasksContext);

    return {
        allTasks,
        toggleTask,
        deleteTask,
        createTask,
        editTask,
        taskToBeUpdated,
        onTaskUpdate
    }
}

export default useTasks;