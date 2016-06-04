let Dispatcher = require('./framework/dispatcher')

// create instance of dispatcher with closure so
// it can be required into any file
module.exports = new Dispatcher();
