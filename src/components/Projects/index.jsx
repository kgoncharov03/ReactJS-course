import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import ProjectForm from 'components/ProjectForm';
import { fetchProjects } from 'actions/projectActions';



class Projects extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div>
        {this.props.projects.map((project) => (
          <Link to={'/projects/' + project.id} >
            <div>{project.name}</div>
          </Link>
        ))}
        <ProjectForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({ projects: state.projects });
const mapDispatchToProps = dispatch => ({
  fetchProjects: () => fetchProjects(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);