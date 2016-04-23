const Debugger = function() {}

Debugger.log = function(message) {
  try {
    console.log(message)
  } catch (e) {
    return
  }
}

module.exports = Debugger
