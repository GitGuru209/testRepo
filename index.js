// index.js
const core   = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const name = core.getInput('name');
    core.info(`Hello, ${name}!`);
    core.info(`Event name: ${github.context.eventName}`);
    core.info(`Repository: ${github.context.repo.owner}/${github.context.repo.repo}`);
    core.info(`SHA: ${github.context.sha}`);
    core.setOutput('greeting', `Hello from GitHub Actions, ${name}!`);
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

// Export for tests:
module.exports = run;

// If run directly (node index.js), invoke it:
if (require.main === module) {
  run();
}
