/* */ 
;modjewel.define("weinre/common/Debug", function(require, exports, module) { // Generated by CoffeeScript 1.8.0
var Debug;

module.exports = new (Debug = (function() {
  function Debug() {
    this._printCalledArgs = {};
  }

  Debug.prototype.log = function(message) {
    var console;
    console = window.console.__original || window.console;
    return console.log("" + (this.timeStamp()) + ": " + message);
  };

  Debug.prototype.logCall = function(context, intf, method, args, message) {
    var printArgs, signature;
    if (message) {
      message = ": " + message;
    } else {
      message = "";
    }
    signature = this.signature(intf, method);
    printArgs = this._printCalledArgs[signature];
    if (printArgs) {
      args = JSON.stringify(args, null, 4);
    } else {
      args = "";
    }
    return this.log("" + context + " " + signature + "(" + args + ")" + message);
  };

  Debug.prototype.logCallArgs = function(intf, method) {
    return this._printCalledArgs[this.signature(intf, method)] = true;
  };

  Debug.prototype.signature = function(intf, method) {
    return "" + intf + "." + method;
  };

  Debug.prototype.timeStamp = function() {
    var date, mins, secs;
    date = new Date();
    mins = "" + (date.getMinutes());
    secs = "" + (date.getSeconds());
    if (mins.length === 1) {
      mins = "0" + mins;
    }
    if (secs.length === 1) {
      secs = "0" + secs;
    }
    return "" + mins + ":" + secs;
  };

  return Debug;

})());

});
