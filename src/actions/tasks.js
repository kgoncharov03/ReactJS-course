export const getTasksPending = {
  type: 'GET_TASKS_PENDING'
};

export const getTasksSuccess = (tasks) => ({
  type: 'GET_TASKS_SUCCESS',
  payload: tasks
});

export const getTasksError = (error) => ({
  type: 'GET_TASKS_ERROR',
  payload: error
});

export const addTaskPending = {
  type: 'ADD_TASK_PENDING'
}

export const addTaskSuccess = (task) => ({
  type: 'ADD_TASK_SUCCESS',
  payload: task
});

export const addTaskError = (error) => ({
  type: 'ADD_TASK_ERROR',
  payload: error
});

export const sortTasksByPriority = {
  type: 'SORT_TASKS_PRIORITY'
}

export const sortTasksByName = {
  type: 'SORT_TASKS_NAME'
}

export const handleTaskInputChange = (name, value) => ({
  type: 'HANDLE_TASK_INPUT_CHANGE',
  payload: {
    name,
    value
  }
})
