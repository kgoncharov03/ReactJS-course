import { 
  getTasksPending, 
  getTasksSuccess, 
  getTasksError,
  addTaskPending,
  addTaskSuccess,
  addTaskError,
} from 'actions/tasks'

export const getTasks = (dispatch) => {
  return (projectId) => {
    dispatch(getTasksPending);
    fetch(`http://valerystatinov.me/tasks/?projectId=${projectId}`)
      .then(res => res.json())
      .then(tasks => {
        dispatch(getTasksSuccess(tasks));
      })
      .catch(error => dispatch(getTasksError(error)));
  }
}

const makeObjectForPost = (projectId, task) => {
  console.log('first', projectId, task);
  const bodyObj = {
    ...task,
    projectId: Number(projectId)
  }
  console.log('second', bodyObj);
  return {
    method: 'POST',
    body: JSON.stringify(bodyObj)
  }
}

export const addTask = (dispatch) => {
  return (projectId, newTask) => {
    console.log('ADDINGTASKS', projectId, newTask);
    dispatch(addTaskPending);
    fetch('http://valerystatinov.me/tasks/', makeObjectForPost(projectId, newTask))
      .then(() => dispatch(addTaskSuccess(newTask)))
      .catch(error => dispatch(addTaskError(error)));
  }
}
