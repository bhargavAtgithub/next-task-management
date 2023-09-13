import React, { createContext, useEffect, useState } from 'react';
import useFetch from '@/hooks/useFetch';

export const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
    const apiFetch = useFetch();
    const [allTasks, setAllTasks] = useState([]);
    const [taskToBeUpdated, setTaskToBeUpdated] = useState(null);

    const onTaskUpdate = (task) => {
        setTaskToBeUpdated(task);
    }

    const getAllTasks = async () => {
        try {
            
            const res = await apiFetch.apiFetch("/task/get-all", 'GET', {});

            const allTasks = res;
            setAllTasks(allTasks.tasks);
        } catch (error) {
            console.log(error);
        }
    }

    const createTask = async (task) => {
        try {
            const res = await apiFetch.apiFetch('/task/create', 'POST', {
                task
            })

            if(res){
                let allNewTasks = [...allTasks];
                allNewTasks.push(res);
                setAllTasks(allNewTasks);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const editTask = async (task) => {
        try {
            const res = await apiFetch.apiFetch('/task/' + task._id, 'PUT', {
                task: {
                    ...task
                }
            });
            
            if(res) {
                let newTasksState = allTasks.map((_task) => {
                    console.log(_task, task)
                    console.log(_task._id == task._id);
                    if(_task._id == task._id) {
                        return task
                    }
                    return _task;
                })
                console.log(newTasksState);
                setAllTasks(newTasksState);
                setTaskToBeUpdated(null)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Find the task from the allTasks, toggle the completed value, call API and update state.
    const toggleTask = async (taskId, updatedState) => {
        try {
            const res = await apiFetch.apiFetch('/task/' + taskId, 'PUT', {
                task: {
                    completed: updatedState
                }
            });
            
            if(res) {
                let newTasksState = [...allTasks];
                newTasksState.forEach((task) => {
                    if(task._id == taskId) {
                        task.completed = updatedState;
                    }
                    return task;
                })
                setAllTasks(newTasksState);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async (taskId) => {
        try {
            const res = await apiFetch.apiFetch('/task/'+ taskId, 'DELETE');
            
            // If successfully updated
            if(res) {
                let newTasksState = allTasks.filter((task) => {
                    if(task._id !== taskId) {
                        return task;
                    }
                });
                setAllTasks(newTasksState);
            }
        } catch (error) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllTasks();
    }, [])

    return (
        <TasksContext.Provider value={{ allTasks, toggleTask, deleteTask, createTask, editTask, taskToBeUpdated, onTaskUpdate }}>
            {children}
        </TasksContext.Provider>
    )

}