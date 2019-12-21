import React from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import { getTasks } from 'actions/taskActions'
import { sortTasksByPriority, sortTasksByName } from 'actions/tasks'
import TaskForm from 'components/TaskForm'

import styles from './Tasks.module.scss';

const theme = classNames.bind(styles);

class Tasks extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getTasks(this.props.id);
  }

  render() {
    return (
      <div>
        <div>
          <div className={theme('container-header')}>
          <div className={theme('name')}>Name</div>
          <div className={theme('descr')}>Description</div>
          <div className={theme('priority')}>Priority</div>
        </div>
        {this.props.tasks.map((task) => (
          <div className={theme('container')} key={task.id}>
            <div className={theme('name')}>{task.name}</div>
            <div className={theme('descr')}>{task.description}</div>
            <div className={theme('priority')}>{task.priority}</div>
          </div>
        ))}
        </div>
        <TaskForm projectId={this.props.id} />
        <button onClick={this.props.sortByPriority}>SORT BY PRIORITY</button>
        <button onClick={this.props.sortByName}>SORT BY NAME</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ tasks: state.tasks });
const mapDispatchToProps = dispatch => ({
  getTasks: (projectId) => getTasks(dispatch)(projectId),
  sortByPriority: () => dispatch(sortTasksByPriority),
  sortByName: () => dispatch(sortTasksByName)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);

