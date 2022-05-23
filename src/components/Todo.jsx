import React from 'react';

const Todo = (props) => {

    const { tasks, handleComplete, handleRemove, handleRemoveAll } = props

    return (
        <ul className='todo'>
            {tasks
                .map((task, index) =>
                    <li key={index}>
                        <div className='checkAndTask'>
                            <label className='checkContainer'>
                                <input type="checkbox" onClick={() => handleComplete(index)} />
                                <span className="checkmark"></span>
                            </label>
                            <span>{task.task}</span>
                        </div>
                        <button onClick={() => handleRemove(index)}><i className="fa-solid fa-trash-can"></i></button>
                    </li>
                )}
            {tasks.length > 1 && <p><button className='deleteAll' onClick={() => handleRemoveAll()}><i className="fa-solid fa-eraser"></i>Delete all</button></p>}
        </ul>
    );
}

export default Todo;
