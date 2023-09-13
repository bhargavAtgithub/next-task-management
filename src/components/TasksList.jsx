import React from "react";
import Task from "./Task";
import useTasks from "@/hooks/useTasks";

const TasksList = () => {
    const { allTasks, toggleTask, deleteTask, onTaskUpdate } = useTasks();

    return (
        <div className={`
            w-full h-full
            flex flex-col
            overflow-y-scroll
            p-2
        `}>
            {
                allTasks.length ? allTasks.map((task, index) => {
                    return (
                        <Task
                            key={index}
                            task={task}
                            toggleComplete={() => toggleTask(task._id, !task.completed)}
                            onDelete={
                                () => deleteTask(task._id)
                            }
                            onEdit={() => onTaskUpdate(task)}
                        />
                    )
                }) : null
            }
        </div>
    )
}

export default TasksList;