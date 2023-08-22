// import { execSync } from 'child_process';

const core = require('@actions/core');
const github = require('@actions/github');

try {
  const repository = core.getInput('repository');
  console.log(`Repo: ${repository}!`);

  const repository_owner = core.getInput('repository_owner');
  console.log(`Repo Owner: ${repository_owner}!`);


  // const gr = execSync(`echo $GITHUB_REPOSITORY`).toString().trim();
  // console.log(`Github Repo: ${gr}`);

  // const ls = execSync(`ls -al`).toString().trim();
  // console.log(`LS ${ls}`);

  // const remote = execSync(`git remote -v`).toString().trim();
  // console.log(`Remote ${remote}`);


  // const sha = execSync(`git rev-parse HEAD`).toString().trim();
  // console.log(`Sha ${sha}`);

  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
} catch (error) {
   console.log(error)
  // core.setFailed(error.message);
}
