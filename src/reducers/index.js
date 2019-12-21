const initialState = {
  projects: [],
  tasks: [],
  projectsFetchPending: false,
  projectsFetchError: null,
  tasksGetPending: false,
  tasksGetError: null,
  taskAddPending: false,
  taskAddError: null,
  taskInputValues: {
    name: '',
    description: '',
    priority: ''
  },
  projectInputValues: {
    name: ''
  }
}

const reducer = (state = initialState, action) => { 
  switch (action.type) {
    case 'FETCH_PROJECTS_PENDING':
      return {
        ...state,
        projectsFetchPending: true
      }
    case 'FETCH_PROJECTS_SUCCESS':
      return {
        ...state,
        projectsFetchPending: false,
        projects: action.payload
      }  
    case 'FETCH_PROJECTS_ERROR':
      return {
        ...state,
        projectsFetchPending: false,
        projectsFetchError: action.payload
      }
    case 'GET_TASKS_PENDING':
        return {
          ...state,
          tasksGetPending: true
        }
    case 'GET_TASKS_SUCCESS':
      return {
        ...state,
        tasksGetPending: false,
        tasks: action.payload
      }  
    case 'GET_TASKS_ERROR':
      return {
        ...state,
        tasksGetPending: false,
        tasksGetError: action.payload
      }
    case 'ADD_TASK_PENDING':
      console.log('PENDING');
      return {
        ...state,
        taskAddPending: true
      } 
    case 'ADD_TASK_SUCCESS':
      console.log('ADDING_TASKS')
      const newTasks = state.tasks.concat();
      newTasks.push(action.payload);
      return {
        ...state,
        taskAddPending: false,
        tasks: newTasks,
        taskInputValues: {
          name: '',
          description: '',
          priority: ''
        }
      }
    case 'ADD_TASK_ERROR':
      return {
        ...state,
        taskAddPending: false,
        taskAddError: action.payload
      }
    case 'HANDLE_TASK_INPUT_CHANGE':
      return {
        ...state,
        taskInputValues: {
          ...state.taskInputValues,
          [action.payload.name]: action.payload.value
        }
      }
    case 'HANDLE_PROJECT_INPUT_CHANGE':
      console.log('ACTION_PAYLOAD', action.payload)
      return {
        ...state,
        projectInputValues: {
          [action.payload.name]: action.payload.value
        }
      }
    case 'SORT_TASKS_PRIORITY':
      const sortedTasksByPriority = state.tasks.concat().sort((first, second) => (first.priority < second.priority ? 1 : -1));
      return {
        ...state,
        tasks: sortedTasksByPriority
      }
    case 'SORT_TASKS_NAME':
      const sortedTasksByName = state.tasks.concat().sort((first, second) => (first.name < second.name ? 1 : -1));
      return {
        ...state,
        tasks: sortedTasksByName
      }
    default:
      return state;
  }
}

export default reducer;