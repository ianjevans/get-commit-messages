# Get commit messages from a pull request

![Version](https://img.shields.io/github/v/release/gsactions/commit-message-checker?style=flat-square)
![Test](https://github.com/gsactions/commit-message-checker/workflows/build-test/badge.svg)

A GitHub action that returns commit messages from a pull request.

On pull requests the title and body are concatenated delimited by two line
breaks.

## Configuration

`commits` are the JSON encoded commits from a pull request. Use the `tim-actions/get-pr-commits` action to get these commits.

### Example Workflow

```yml
name: 'Commit Message Check'
on:
  pull_request:
    types:
      - opened
      - edited
      - reopened
      - synchronize

jobs:
  check-commit-message:
    name: Check Commit Message
    runs-on: ubuntu-latest
    steps:
      - name: Get PR Commits
        id: 'get-pr-commits'
        uses: tim-actions/get-pr-commits@master
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Get commit messages
        id: 'get-pr-commit-messages'
        uses: ianjevans/get-commit-messages@master
        with:
          commits: ${{ steps.get-pr-commits.outputs.commits }}

      - name: Output commit messages
        run: |
          echo "Commit messages"
          echo "${{ steps.get-pr-commit-messages.outputs }}"
```

## Development

### Quick Start

```sh
git clone https://github.com/gsactions/commit-message-checker.git
npm install
npm run build
```

That's it, just start editing the sources...

### Commands

Below is a list of commands you will probably find useful during the development
cycle.

#### `npm run build`

Builds the package to the `lib` folder.

#### `npm run format`

Runs Prettier on .ts and .tsx files and fixes errors.

#### `npm run format-check`

Runs Prettier on .ts and .tsx files without fixing errors.

#### `npm run lint`

Runs Eslint on .ts and .tsx files.

#### `npm run pack`

Bundles the package to the `dist` folder.

#### `npm run test`

Runs Jest test suites.

#### `npm run all`

Runs all of the above commands.

## License

This project is released under the terms of the [MIT License](LICENSE)
