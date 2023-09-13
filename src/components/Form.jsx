"use client";

import React, { useEffect } from "react";
import useForm from "@/hooks/useForm";
import Input from "./input";
import TextArea from "./TextArea";
import { taskValidator } from "@/util";
import Datepicker from "react-tailwindcss-datepicker"; 
import useTasks from "@/hooks/useTasks";
import Button from "./Button";
import useAuth from "@/hooks/useAuth";


const Form = () => {
    const { createTask, editTask, taskToBeUpdated } = useTasks();
    const { signOut } = useAuth();



    const createOrUpdate = (task) => {
        if(task._id){
            editTask(task);
        } else {
            createTask(task);
        }
    }


    const {
        values,
        errors,
        handleChange,
        handleDateChange,
        handleSubmit,
        setNewValues
    } = useForm(createOrUpdate, taskValidator);

      
      useEffect(() => {
        setNewValues(taskToBeUpdated);
      }, [taskToBeUpdated]);

      return (
        <form 
            className={`
                w-full h-full
                flex flex-col
                justify-start items-center
                lg:justify-center
                gap-4
                lg:px-20
                lg:border-r lg:border-slate-800
            `}
            onSubmit={handleSubmit}
        >
            <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30">
                <code className="font-mono font-bold">
                    {
                        taskToBeUpdated !== null ? 'Update task' : 'Create new task'
                    
                    }
                </code>
                </p>
                <div>
                    <Button onClick={signOut} type={"button"}>
                        Sign out
                    </Button>
                </div>
            </div>
            <Input placeholder={'Add a new Task'} name="title" value={values.title} onChange={handleChange} />
            {
                errors.title ? (
                    <p className="text-sm text-red-600">{errors.title}</p>
                ) : null 
            }
            <TextArea placeholder={'Add a placeholder'} name="description" value={values.description} onChange={handleChange} />
            <Datepicker primaryColor="red" useRange={false} asSingle={true} onChange={handleDateChange} value={{ startDate: values.dueDate, endDate: values.dueDate}}  /> 
            {
                errors.dueDate ? (
                    <p className="text-sm text-red-600">{errors.dueDate}</p>
                ) : null 
            }
            <Button type="submit">
            {taskToBeUpdated !== null ? 'Update ' : 'Create '} task
            </Button>
        </form>
      )

}

export default Form;