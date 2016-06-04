let React = require('react');
let Footer = React.createClass({
  render: function() {
    return (<section className={"row sub-row " + this.props.classNames}
        id={this.props.id}>
      <div className="content-area">
        <div className="colum half">
          <h2 className="colum-content block-colum-title">
            Get a hold of me
          </h2>
          <p className="colum-content" >
            Email: jim.hall.dev@gmail.com
          </p>
          <p className="colum-content" >
            Phone: 773-8991755
          </p>
          <p className="colum-content" >
            <strong>Currently looking for a position in Ann Arbor, MI</strong>
          </p>
        </div>
        <div className="colum half">
          <h2 className="colum-content block-colum-title">
            Find Me Online
          </h2>
          <p className="colum-content" >
            For a code sample take a look at the <a target="_blank" href="https://github.com/jimbol/Resume">repo for this project</a> or <a target="_blank" href="https://github.com/jimbol/dashberry-pi">Dashberry Pi</a>, a Raspberry Pi dashboard I am developing.
          </p>
          <p className="colum-content" >
            <a target="_blank" href="https://github.com/jimbol/">GitHub</a> - <a target="_blank" href="https://www.linkedin.com/in/jim-hall-aa805723?trk=hp-identity-photo">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>)
  }
});

module.exports = Footer;
