# Introduction

When building your first playwright project it's recommended that you use the command `npm init playwright@latest` to build out the included test project.

For our purposes we will

- Chose the language as `Typescript`
- Set the end-to-end tests in the folder? `tests`
- Add a GitHub Actions workflow? `y`

Once complete you will have a message in your terminal"

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:

- ./tests/example.spec.ts - Example end-to-end test
- ./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests
- ./playwright.config.ts - Playwright Test configuration

Visit <https://playwright.dev/docs/intro> for more information. ✨

Happy hacking! 🎭

## In Branch 2-create-new-test

- All example specs were moved to tests-examples
- Created a UI test to solve semantle
- Created a API test (GET) to validate API response

## In Branch 3-block-google-ads

- Added code to route all traffic and block google adds
- Updated baseURL in playwright config
- introduced .env variable file and dotenv library
- added a helper to run automation via npm command
- set default to run in headless mode
