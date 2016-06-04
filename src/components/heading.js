let React = require('react');
let Heading = React.createClass({
  render: function() {
    return (
      <section className={"row header-row " + this.props.classNames}
        id={this.props.id}>
        <div className="content-area">
          <h1 className="colum-content block-colum-title">
            {this.props.content}
          </h1>
        </div>
      </section>
    );
  }
});

module.exports = Heading;
