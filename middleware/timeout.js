const timeout = require('connect-timeout'); //express v4

function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

module.exports={
    timeout,
    haltOnTimedout
};