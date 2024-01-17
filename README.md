# Promptfoo demo

## Getting started

### Linux

Instructions on installing Node.js can be found [here](https://nodejs.org/en/download/package-manager). The exact method to use depends on which Linux distribution you are using.

Afterwards, you can install promptfoo by running `npm install --global promptfoo` inside a terminal.

### macOS

1. Install [Homebrew](https://brew.sh)
2. Run the following commands inside a terminal window:

```sh
$ brew install node
$ npm install --global promptfoo
```

### Windows

1. Install [Node.js](https://nodejs.org/en) from their website
2. Run the command `npm install --global promptfoo` inside a command prompt

## Running evals

You will need to set up an OpenAI API key before you can use promptfoo. Run one of the following commands in terminal/command prompt, depending on your operating system:

```
# On Windows
$ set OPENAI_API_KEY=<<your api key>>

# On Linux/macOS
$ export OPENAI_API_KEY=<<your api key>>
```

Now you are able to run evals. Some commands to try:

* `promptfoo eval` -- Runs evaluations
* `promptfoo view` -- Opens up promptfoo's web interface
