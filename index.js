// import { execSync } from 'child_process';

const core = require('@actions/core');

try {
  const repository = core.getInput('repository');
  console.log(`Repo: ${repository}!`);

  const repository_owner = core.getInput('repository_owner');
  console.log(`Repo Owner: ${repository_owner}!`);

  const ref = core.getInput('ref');
  console.log(`Ref: ${ref}!`);

  const base_ref = core.getInput('base_ref');
  console.log(`Base Ref: ${base_ref}!`);

  const head_ref = core.getInput('head_ref');
  console.log(`Head Ref: ${head_ref}!`);

  const sha = core.getInput('sha');
  console.log(`Sha: ${sha}!`);

  const run_number = core.getInput('run_number');
  console.log(`Run number: ${run_number}!`);

  const run_attempt = core.getInput('run_attempt');
  console.log(`Run attempt: ${run_attempt}!`);

  const workspace = core.getInput('workspace');
  console.log(`Workspace: ${workspace}!`);

  const ref_name = core.getInput('ref_name');
  console.log(`Ref Name: ${ref_name}!`);

  const ref_type = core.getInput('ref_type');
  console.log(`Ref type: ${ref_type}!`);

  const arch = core.getInput('arch');
  console.log(`Arch: ${arch}!`);

  const OS = core.getInput('os');
  console.log(`OS: ${OS}!`);

  const runner_name = core.getInput('runner_name');
  console.log(`Runner Name: ${runner_name}!`);

  const runner_tool_cache = core.getInput('runner_tool_cache');
  console.log(`Runner Tool Cache: ${runner_tool_cache}!`);

} catch (error) {
  core.setFailed(error.message);
}
