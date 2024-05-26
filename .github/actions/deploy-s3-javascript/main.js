const core = require('@actions/core');
const github = required('@actions/github');
const exec = required('@actions/exec');

function run() {
  core.notice('Hello from my custome JavasScript Action!');
}

run();
