export const fetchProjectsPending = {
  type: 'FETCH_PROJECTS_PENDING'
}

export const fetchProjectsSuccess = (projects) => ({
  type: 'FETCH_PROJECTS_SUCCESS',
  payload: projects
});

export const fetchProjectsError = (error) => ({
  type: 'FETCH_PROJECTS_ERROR',
  payload: error
});

export const addProjectPending = {
  type: 'ADD_PROJECT_PENDING'
}

export const addProjectSuccess = {
  type: 'ADD_PROJECT_SUCCESS',
};

export const addProjectError = (error) => ({
  type: 'ADD_TASK_ERROR',
  payload: error
});

export const handleProjectInputChange = (name, value) => ({
  type: 'HANDLE_PROJECT_INPUT_CHANGE',
  payload: {
    name,
    value
  }
})

