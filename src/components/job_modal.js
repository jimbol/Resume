let React = require('react');
let Skills = require('./skills');
let dispatcher = require('../app_dispatcher');

let Jobs = React.createClass({
  close: function(job) {
    dispatcher.dispatch({
      type: 'CLOSE_JOB'
    });
  },
  render: function() {
    let job = this.props.job;

    return (
      <div className="modal-mask" onClick={this.close}>
        <div className="modal-content">
          <div className="nav">
            &#215;
          </div>
          <section className="row about-row job">
            <div className="content-area">
              <div className="colum half">
                <h2 className="colum-content">
                  {job.title} at {job.company}
                </h2>
              </div><div className="colum half">
                <h4 className="colum-content">
                  From {job.startTime} through {job.endTime}
                </h4>
              </div>
            </div>
          </section>
          <section className="row about-row job">
            <div className="content-area">
              <Skills skillIds={job.skills}
                skills={this.props.skills}
                width="half" /><div className="colum half">
                <p className="colum-content">
                  {job.description}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
});

module.exports = Jobs;
