// import { execSync } from 'child_process';

const core = require('@actions/core');
// const github = require('@actions/github');

try {
  const repository = core.getInput('repository');
  console.log(`Repo: ${repository}!`);

  const repository_owner = core.getInput('repository_owner');
  console.log(`Repo Owner: ${repository_owner}!`);

  const ref = core.getInput('ref');
  console.log(`Repo Owner: ${ref}!`);

  const base_ref = core.getInput('base_ref');
  console.log(`Repo Owner: ${base_ref}!`);

  const head_ref = core.getInput('head_ref');
  console.log(`Repo Owner: ${head_ref}!`);

  const sha = core.getInput('sha');
  console.log(`Repo Owner: ${sha}!`);

  const run_number = core.getInput('run_number');
  console.log(`Repo Owner: ${run_number}!`);

  const run_attempt = core.getInput('run_attempt');
  console.log(`Repo Owner: ${run_attempt}!`);

  const workspace = core.getInput('workspace');
  console.log(`Repo Owner: ${workspace}!`);

  const ref_name = core.getInput('ref_name');
  console.log(`Repo Owner: ${ref_name}!`);

  const ref_type = core.getInput('ref_type');
  console.log(`Repo Owner: ${ref_type}!`);

} catch (error) {
  core.setFailed(error.message);
}
