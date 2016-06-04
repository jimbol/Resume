module.exports = class Dispatcher {
  constructor(){
    this.i = 0;
    this._cbs = {};
  }

  subscribe(cb){
    let cbIndex = this.i;
    this._cbs[cbIndex] = cb;

    this.i++;

    // return unsubscribe function
    return function(){
      delete cbs[cbIndex];
    }
  }

  dispatch(action){
    for (let key in this._cbs) {
      if (!this._cbs.hasOwnProperty(key)) { continue; }

      this._cbs[key](action);
    }
  }
};
