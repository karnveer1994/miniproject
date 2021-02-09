# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Installation dependencies
npm install react-bootstrap bootstrap
npm install axios
npm install react-redux
npm install redux-saga


### Documentation

### Feature Name Create Project

### First Step :-
 * yarn (it will install all dependencies)
 * yarn start (it will start the server)
 * node version (greater than 10)

### Second Step :- 
* On opening the page there will be `Create Project` button.
* And on clicking that button we will be  able to see the `pop-up` for `creating the project`.
* There we can fill the form by filling details like `title`, `Description`, `Delivery date` 
  and `Project Cost`.
* And form details that we will fill there will be the validations on it.
* Validations will be like :-
   1. Title         : field will not contain length more than 80
   2. Description   : description field will not contain length more than 100
   3. Delivery-Date : delivery date will not be taken of previous dates
   4. Project-Cost  : cost will be taken between 100-100000
* On filling project cost we can get `CleverX transaction fees (20%)` and `Total Amount in $USD`
* And on `create project` button in pop-up it will take to `Chooose card` modal.

### Third Step :-
* Here we can choose card.
* And clicking `Pay` it will take to the section page.

### Fourth Step :-
* Here we will get all the details related the project that we have created.

Note:- 
* Also for backend handled the `CORS` issue by applying `CORS` plugin
* Used middleware as `redux-saga`