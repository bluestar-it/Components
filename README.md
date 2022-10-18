# Welcome to Testing with JEST framework Repository: Team SWT301 FALL 2022

### You will find in this repo the following stuff:

* The `data-structure.js` file - A simple implementation of blockchain structure
* The `Hashing.js` - An algorithms to find position of a Substring
* The `mock-function-demo.js` file - A simple demo of Jest Mock Function
* The `setup-teardown` folder - A folder of test files using Jest Setup and Teardown Functions
* Unit Test files using Jest framework

### In this README file has some section:
* [Testing JS algorithm using JEST framework](https://github.com/viettien1602/swt301-testing-with-jest#testing-js-algorithm-using-jest-framework)
* [Testing JS data structure using JEST framework](https://github.com/viettien1602/swt301-testing-with-jest#testing-js-data-structure-basic-blockchain-implementation-using-jest-framework)
* [Setup - teardown demo in JEST](https://github.com/viettien1602/swt301-testing-with-jest#setup---teardown-demo-in-jest)
* [Mock function demo in JEST](https://github.com/viettien1602/swt301-testing-with-jest#mock-function-demo-in-jest)
* [Testing React using JEST framework](https://github.com/viettien1602/swt301-testing-with-jest#testing-react-using-jest-framework)

## Testing JS algorithm using JEST framework
You will find in this session:
* The code of BruteForce and Hashing - 2 basic hash algorithms to find position of a Substring

![Hash](https://github.com/bluestar-it/Components/blob/master/img/hashing-test.jpg)

#### View more explanation and details code in [algorithm.md](https://github.com/viettien1602/swt301-testing-with-jest/blob/main/testing-js/readme-details/algorithm.md)

## Testing JS data structure (basic blockchain implementation) using JEST framework
You will find in this session:
* A simple implementation of blockchain structure. If you want to get more details to the blockchain, find out at: [BlockChain details](https://youtube.com/playlist?list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4)
* Test cases to test the blockchain created with JEST framework:
    1. A new block added must have hash matching difficulty
    2. A new block added must have prevHash matching the hash of last block of blockchain
    3. A new block added must have data immutable
    4. Not changing any data, the whole blockchain should return valid status
    5. Changing data of block 1 only, The whole blockchain should return invalid status
    6. Changing data and hash of block 1, The whole blockchain should return invalid status
#### View more explanation and details code in [data-structure.md](https://github.com/viettien1602/swt301-testing-with-jest/blob/main/testing-js/readme-details/data-structure.md)

## Setup - teardown demo in JEST
You will find in this session:
* A simple implementation of Jest Setup and Teardown Functions, which help to set up some work that needs to happen before tests run and some work that needs to happen after tests run.
* Test cases with cities database and food database later too see how to advoid calling init() and clear() method at the begining and at the end of each of these test
    1. A repeating setup for 3 test
    2. A one-time setup - declare once and using for all class test
    3. Describe - testing class inside describe block only.
    4. Order of testing is situation include all beforeEach(), afterEach(), beforeAll(), afterAll() and describe block
    5. One more order of execution.

    ![Setup - teardown demo](https://github.com/bluestar-it/Components/blob/master/img/setup-and-teardown.jpg)

## Mock function demo in JEST
You will find in this session:
* A simple implementation of calling another function to retrieve data from database, which points out the problem why we should apply mock function in unit testing
* 2 ways of creating mock function in JEST
    1. Conducting a manual mock function by overriding the original one
    2. JEST framework supports us an operation to create mock function, which can mock implementation or mock the return value
#### View more explanation and details code in [mock-function.md](https://github.com/viettien1602/swt301-testing-with-jest/blob/main/testing-js/readme-details/mock-function.md)


## Testing React using JEST framework



#### Connect us via email: nvtien1602.forwork@gmail.com

#### Copyright &#169; 2022 Team SWT301 FALL 2022

















## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
