let React = require('react');
let dispatcher = require('../app_dispatcher');

let Jobs = React.createClass({
  handleClick: function(job) {
    dispatcher.dispatch({
      type: 'OPEN_JOB',
      job: job,
    });
  },
  render: function() {
    return (
      <div className="colum third">
        <h3 className="colum-content">{this.props.title}</h3>
        <ul className="pill-list colum-content">
          {this.props.jobIds.map((jobId) => {
            return <li className="pill-button"
              key={jobId}
              onClick={()=> this.handleClick(this.props.jobs[jobId])}>{this.props.jobs[jobId].title + ' at ' + this.props.jobs[jobId].company}</li>
          })}
        </ul>
      </div>
    );
  }
});

module.exports = Jobs;
