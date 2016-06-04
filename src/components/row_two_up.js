let React = require('react');
let RowTwoUp = React.createClass({
  render: function() {
    return (
      <section className={"row sub-row " + this.props.classNames}
        id={this.props.id}>
        <div className="content-area">
          {this.props.sections.map((section, i) => {
            return (<div className="colum half" key={i}>
              <h2 className="colum-content block-colum-title">
                {section.subtitle}
              </h2>
              {section.description.map((p, j) => {
                return <p className="colum-content" key={j}>{p}</p>
              })}
            </div>);
          })}
        </div>
      </section>
    );
  }
});

module.exports = RowTwoUp;
