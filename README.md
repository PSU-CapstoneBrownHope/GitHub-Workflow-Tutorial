# Readme

This repo exists to help onboard developers wanting to make contributions to the BrownHopeAidApp (BHAA). This repo models many of the basic configuration and toolchain used in the BHAA. Topics covered in this tutorial include:

- Developing in a Typesrcipt project
- Testing in a Typescript project with Jest
- Using git and GitHub to collaboratively add features or fix bugs
- Creating a Pull Request (PR) and interacting with a Continuous Integration (CI) system

Note: this tutorial will focus on working with command line development. It is possible that your IDE supports a lot of these tools with its own GUI features, but covering those is beyond the scope of this tutorial. Please review your IDE documentation if that is of interest to you. 
  
## Developing in a Typescript project

The first thing to do is set up your development environment (the author is using VScode) and clone the GitHub-Workflow-Tutorial:

Using SSH:
```
git clone git@github.com:PSU-CapstoneBrownHope/GitHub-Workflow-Tutorial.git
```
Using HTTPS:
```
git clone https://github.com/PSU-CapstoneBrownHope/GitHub-Workflow-Tutorial.git
```

You should now have access to the repo for local development in your editor / IDE

Looking at the project we can see 3 folders:
  - ```.github/workflows``` -> this is where the CI instructions for the project live
  - ```src``` -> here we find the main project code
  - ```test``` -> and here is where the tests for our code lives
  
The remaining files are this ```README.md```, a ```.gitignore``` file that contains a list of all the file you don't want to commit with git, and some project configuration files.

At this point we want to install all of the dependencies for the project that are described in the ```package.json``` file:

```
npm install
```

With the dependencies now installed, we can run the project with:

```
ts-node src/app.ts
```

Note: you may need to install ts-node separately in you local environment.

You should now see the output of a simple program the calculates and prints the factorial for a given number n. But how can we test this code to make sure that we are calculating the factorial properly?

## Testing in a Typescript project with Jest

This project, like the BHAA, uses Jest to test the code base. If we look inside the test folder we can see that there is already a test written for this project. Let's run it and see what happens:

```
npm test
```

Looking at the output we can see that 1 test called ```factorial of 5 is 1*2*3*4*5``` ran and passed. This is great! But maybe you are feeling like this test is not very comprehensive, for example, what happens if n = 0?

Let's write a test case to see if the ```factorialRec``` function in ```src/app.ts``` can handel this condition.

## Using git and GitHub

## Creating PRs and interacting with the CI system

