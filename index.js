const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    // Get input from workflow file
    const name = core.getInput('name');
    core.info(`Hello, ${name}!`);

    // Log GitHub context (e.g., event name, repo, etc.)
    core.info(`Event name: ${github.context.eventName}`);
    core.info(`Repository: ${github.context.repo.owner}/${github.context.repo.repo}`);
    core.info(`SHA: ${github.context.sha}`);

    // Set an output variable
    core.setOutput('greeting', `Hello from GitHub Actions, ${name}!`);

    // Optional: Fail the action if needed
    // core.setFailed('Something went wrong!');
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();
