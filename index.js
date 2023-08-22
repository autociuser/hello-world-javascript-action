// import { execSync } from 'child_process';

const core = require('@actions/core');

try {
  assertCoreEqual('repository', "autociuser/hello-world-javascript-action")
  assertCoreEqual('repository_owner', "autociuser")
  assertCoreEqual('ref', "refs/heads/main")
  assertCoreEqual('base_ref', "main")
  assertCoreEqual('head_ref', "main")
  assertNotEmpty('sha', "sha")
  assertNotEmpty('run_number', "run_number")
  assertNotEmpty('run_attempt', "run_attempt")
  assertCoreEqual('workspace', "/harness")
  assertCoreEqual('ref_name', "main")
  assertCoreEqual('ref_type', "branch")
  assertNotEmpty(process.env.RUNNER_ARCH, "RUNNER_ARCH")
  assertNotEmpty(process.env.RUNNER_OS, "RUNNER_OS")
  assertCoreEqual(process.env.RUNNER_NAME, "HARNESS HOSTED")
  assertNotEmpty(process.env.RUNNER_TOOL_CACHE, "RUNNER_TOOL_CACHE")
  const runner_tool_cache = process.env.RUNNER_TOOL_CACHE
  const os = process.env.RUNNER_OS
  if (os === "Linux") {
    assertEqual(runner_tool_cache, "/opt/hostedtoolcache")
  } else if (os === "macOS") {
    assertEqual(runner_tool_cache, "/Users/anka/hostedtoolcache")
  } else if (os === "Windows") {
    assertEqual(runner_tool_cache, "C:\hostedtoolcache\windows")
  }
} catch (error) {
  core.setFailed(error.message);
}

function assertCoreEqual(actual, expected) {
  console.log(`Actual: ${actual}, Expected: ${expected}`);
  if (core.getInput(actual) !== expected) {
    throw new Error(`Assertion failed for ${actual} : Expected ${expected}, but got ${core.getInput(actual)}`);
  }
}

function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Assertion failed : Expected ${expected}, but got ${actual}`);
  }
}

function assertNotEmpty(value, name) {
  console.log(`Name: ${name}, Value: ${value}`);
  if (value == null || value === "") {  
    throw new Error(`${name} is empty or undefined`);
  }
}
