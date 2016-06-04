let React = require('react');
let Skills = require('./skills');
let Jobs = require('./jobs');

let Row = React.createClass({
  render: function() {
    return (
      <section className={"row sub-row " + this.props.classNames}
        id={this.props.id}>
        <div className="content-area">
          {this.props.sections.map((section, i) => {
            return (<div key={i}>
              <h2 className="colum-content block-colum-title">
                {section.subtitle}
              </h2>
              <div className="colum third">
                {section.description.map((p, j) => {
                  return <p className="colum-content" key={j}>{p}</p>
                })}
              </div>
              <Skills
                title="Relevant skills"
                skillIds={section.skills}
                skills={this.props.skills} />
              <Jobs
                title="Relevant Work History"
                jobIds={section.jobs}
                jobs={this.props.jobs} />
            </div>);
          })}
        </div>
      </section>
    );
  }
});

module.exports = Row;
