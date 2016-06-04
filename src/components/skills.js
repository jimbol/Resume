let React = require('react');
let Skills = React.createClass({
  render: function() {
    let title = undefined;
    let width = 'third';

    if (this.props.title) {
      title = <h3 className="colum-content">{this.props.title}</h3>;
    }

    if (this.props.width) { width = this.props.width; }

    return (
      <div className={"colum " + width}>
        {title}
        <ul className="colum-content pill-list">
          {this.props.skillIds.map((skillId) => {
            return <li key={skillId}>{this.props.skills[skillId]}</li>
          })}
        </ul>
      </div>
    );
  }
});

module.exports = Skills;
