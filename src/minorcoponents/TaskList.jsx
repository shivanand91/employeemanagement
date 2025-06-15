import React from 'react'
import AcceptTask from '../components/TaskList/AcceptTask'
import CompleteTask from '../components/TaskList/CompleteTask'
import FailedTask from '../components/TaskList/FailedTask'
import NewTask from '../components/TaskList/NewTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='flex overflow-x-auto justify-items-start mt-5 h-[45%] gap-5 flex-nowrap w-full '>
            {data.tasks && data.tasks.length > 0 ? data.tasks.map((elem) => {
                if (elem.active) {
                  return <AcceptTask key={elem.id} />
                } else if (elem.newTask) {
                    return <NewTask key={elem.id} />
                } else if (elem.completed) {
                    return <CompleteTask key={elem.id} />
                } else if (elem.failed) {
                    return <FailedTask key={elem.id} />
                }
                return null;
            }) : <p>No tasks available</p>}
            
        </div>
    )
}

export default TaskList