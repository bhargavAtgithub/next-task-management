import React from 'react';
import IconButton from './IconButton';
import { FiEdit2, FiDelete } from "react-icons/fi";
import dayjs from 'dayjs';

const Task = ({task, toggleComplete, onEdit, onDelete}) => {
    return (
        <div className={`
            flex mb-4 p-6 gap-4 cursor-pointer
            hover:dark:bg-zinc-800/30 border border-black hover:border hover:border-neutral-800
            rounded-lg m-4
        `}>
            <input 
                type="checkbox"
                className={`
                    peer 
                    relative appearance-none shrink-0 
                    w-4 h-4 border-2 border-red-200 rounded-sm mt-2 bg-white
                    focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-red-100
                  checked:bg-red-600 checked:border-0
                    disabled:border-steel-400 disabled:bg-steel-400
                    cursor-pointer
                `}
                onChange={toggleComplete}
                checked={task.completed}
            />
            <div
                className={`
                    w-full
                    flex flex-col gap-2
                `}
            >
                <p className='text-lg'>
                    {task.title}
                </p>
                {
                    task.description 
                        ? 
                        <span className='text-slate-400'>
                            {task.description}
                        </span> 
                        : null
                }
                {
                    task.dueDate 
                        ? 
                        <span className='text-sm'>
                            Due date: {dayjs(task.dueDate).format('DD/MM/YYYY')}
                        </span>
                        : null
                }
            </div>
            <div className='flex gap-2'>
                <IconButton Icon={FiEdit2} onClick={onEdit} />
                <IconButton Icon={FiDelete} onClick={onDelete} />
            </div>
        </div>
    )
}

export default Task;