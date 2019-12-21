import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { handleTaskInputChange } from 'actions/tasks'
import { addTask } from 'actions/taskActions'
import { connect } from 'react-redux'

import NamedInput from 'components/NamedInput';

import styles from './TaskForm.module.scss';

const theme = classNames.bind(styles);

class Form extends Component {

  render() {
    return (
      <div className={theme('container')}>
        <div className={theme('field')}>
          <NamedInput 
            name="name" 
            onChange={(event) => this.props.onChange('name', event.target.value)} 
            value={this.props.values['name']} />
        </div>

        <div className={theme('field')}>
          <NamedInput 
            name="description" 
            onChange={(event) => this.props.onChange('description', event.target.value)} 
            value={this.props.values['description']}
          />
        </div>

        <div className={theme('field')}>
          <NamedInput 
            name="priority" 
            onChange={(event) => this.props.onChange('priority', Number(event.target.value))} 
            value={this.props.values['priority']} 
          />
        </div>

        <button type="button" onClick={() => this.props.onSubmit(this.props.projectId, this.props.values)}>
          ADD TASK
        </button>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  values: state.taskInputValues,
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (name, value) => {
    console.log(name, value);
    dispatch(handleTaskInputChange(name, value))
  },
  onSubmit: (projectId, task) => addTask(dispatch)(projectId, task)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);