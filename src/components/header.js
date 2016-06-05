let React = require('react');
let Header = React.createClass({
  render: function() {
    return (
      <section className="row cover-row">
        <div className="content-area">
          <div className="page-header">
            <h1>Jim Hall</h1>
            <h2>Web Developer</h2>
            <ul className="nav pill-list inverted">

                <li className="pill-button"><a href="#javascript">Javascript Development</a></li>

                <li className="pill-button"><a href="#other-skills">Other Experience</a></li>

                <li className="pill-button"><a href="#mentorship">Mentorship and Leadership</a></li>

                <li className="pill-button"><a href="#contact">Contact</a></li>

            </ul>
          </div>
          <div className="colum third"></div><div className="colum third"></div><div className="colum third callout">
            <h2 className="colum-content">
              Creating things is awesome!
            </h2>
            <p className="colum-content">
              Theres nothing more satisfying than making something that works and works well! Thats why when I craft code, I do so with the goal of making it clean, scaleable, and well tested.
            </p>
            <p className="colum-content">
              <a href="https://drive.google.com/file/d/0B3yEHWaWdqyrdTloWkM4bUlCOVE/view" target="_blank"><button>Download Resume (PDF)</button></a>
            </p>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = Header;
