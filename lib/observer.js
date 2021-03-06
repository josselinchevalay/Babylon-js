Babylon.Observer = function() {
  this.observers = {};
};

Babylon.Observer.prototype.all = function(){
  return this.observers;
};

/*
  Add an observer to a particular status change
  ex.
      var runner = Babylon.Observer(router);
      runner.add_connection_observer("on_connected", MyController)

  now when the on_connected event occurs, the "on_connected" action on
  MyController will be called
*/
Babylon.Observer.prototype.add_connection_observer = function(status, observer) {
  if(!observer) { throw("Observer should not be undefined"); }
  if(!this.observers[status]){ this.observers[status] = []; }
  this.observers[status].push(observer);
};

// Call func on each observer of a status.
Babylon.Observer.prototype.call_on_observers = function(status, func){
  if (this.observers[status]) {
    var obs_len = this.observers[status].length;
    for(var i = 0; i < obs_len; i++) {
      func(this.observers[status][i], status);
    }
  }
};
