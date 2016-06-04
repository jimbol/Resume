let React = require('react');
let ReactDOM = require('react-dom');
let Header = require('./components/header');
let Heading = require('./components/heading');
let AboutRow = require('./components/about');
let Row = require('./components/row');
let RowTwoUp = require('./components/row_two_up');
let Footer = require('./components/footer');
let JobModal = require('./components/job_modal');
let dispatcher = require('./app_dispatcher');

let data = require('../data.json');

let Application = React.createClass({
  getInitialState: function(){
    return {
      showJob: false,
      selectedJob: undefined
    }
  },

  componentDidMount: function(){
    dispatcher.subscribe(this.handleActions);
  },

  handleActions: function(action){
    switch(action.type) {
      case 'OPEN_JOB':
        this.setState({
          showJob: true,
          selectedJob: action.job
        });

        this.render();
        break;
      case 'CLOSE_JOB':
        this.setState({
          showJob: false,
          selectedJob: undefined
        });

        this.render();
        break;

    }
  },

  render: function() {
    let jobModal = undefined;
    if(this.state.showJob) {
      jobModal = <JobModal job={this.state.selectedJob} skills={data.skills} />;
    }

    return (<div>
      {jobModal}
      <Header />
      <AboutRow />

      <Heading classNames="inverted"
        id="javascript"
        content={data.sections.jsDev.title} />
      <Row classNames="inverted"
        sections={data.sections.jsDev.sections}
        skills={data.skills}
        jobs={data.jobs} />


      <Heading classNames="normal"
        id="other-skills"
        content={data.sections.otherDev.title} />
      <Row classNames="normal"
        sections={data.sections.otherDev.sections}
        skills={data.skills}
        jobs={data.jobs} />

      <Heading classNames="inverted"
        id="mentorship"
        content={data.sections.mentorship.title} />
      <RowTwoUp classNames="inverted"
        sections={data.sections.mentorship.sections} />

      <Heading classNames="normal"
        id="contact"
        content="Contact" />
      <Footer classNames="normal" />
    </div>);
  }
});

ReactDOM.render(
  <Application />,
  document.getElementById('content')
);
