let React = require('react');
let AboutRow = React.createClass({
  render: function() {
    return (
      <section className="row about-row">
        <div className="content-area">
          <h2 className="colum-content block-colum-title">
            Who is this guy?
          </h2>
          <div className="colum half">
            <p className="colum-content">
              As long as I can remember I've enjoyed <strong>concepting, designing, and building</strong> things. In hindsight, it makes sense that I've wound up doing development. I use all these skills in my work and I relish it.
            </p>
            <p className="colum-content">
              I have been developing for <strong>over 6 years</strong> with my primary focus being <strong>server and client javascript development, feature architecture,</strong> and <strong>project leadership</strong>. I care about delivering <strong>well tested, performant, maintainable code</strong> and building tooling to enable others to do the same.
            </p>
          </div><div className="colum half">
            <p className="colum-content">
              Various experiences have led me to concentrate on <strong>JavaScript</strong> as my primary language. The trends with JavaScript are thrilling to use and participate in. I thrive in this environment of new technology but also I crave a deeper knowledge of other languages and applications of software. My favorite pass time is to explore these and so I have dabbled with Python, Arduino, Raspberry Pi, statistics, and machine learning.
            </p>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = AboutRow;
