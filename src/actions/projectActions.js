import { 
  fetchProjectsPending, 
  fetchProjectsSuccess, 
  fetchProjectsError,
  addProjectPending,
  addProjectSuccess,
  addProjectError,
  handleProjectInputChange
} from 'actions/projects'

export const fetchProjects = (dispatch) => {
  dispatch(fetchProjectsPending);
  fetch('http://valerystatinov.me/projects/')
    .then(res => res.json())
    .then(projects => dispatch(fetchProjectsSuccess(projects)))
    .catch(error => dispatch(fetchProjectsError(error)));
}

const makeObjectForPost = (name) => {
  // console.log('first', projectId, task);
  const bodyObj = { name }
  return {
    method: 'POST',
    body: JSON.stringify(bodyObj)
  }
}

export const addProject = (dispatch) => {
  dispatch(addProjectPending);
  return (name) => {
    console.log('LOGG', name)
    fetch('http://valerystatinov.me/projects/', makeObjectForPost(name))
      .then(() => { 
        dispatch(addProjectSuccess);
        fetchProjects(dispatch);
        dispatch(handleProjectInputChange('name', ''))
      })
      .catch(error => dispatch(addProjectError(error)));
  }
}