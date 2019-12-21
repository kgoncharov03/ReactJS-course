import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import NamedInput from 'components/NamedInput';
import { handleProjectInputChange } from 'actions/projects';
import { addProject } from 'actions/projectActions';

import styles from './ProjectForm.module.scss';

const theme = classNames.bind(styles);

class Form extends React.Component {

  render() {
    return (
      <div className={theme('container')}>
        <div className={theme('field')}>
          <NamedInput 
            name="name" 
            onChange={(event) => this.props.onChange('name', event.target.value)} 
            value={this.props.values['name']} />
        </div>

        <button type="button" onClick={() => {
          this.props.onSubmit(this.props.values.name);
        }}>
          ADD PROJECT
        </button>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  values: state.projectInputValues,
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (name, value) => {
    console.log(name);
    dispatch(handleProjectInputChange(name, value))
  },
  onSubmit: (name) => addProject(dispatch)(name)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);