
# Neo Apparel Store <img align="left" src="./public/favicon-white.ico" style="margin-right: 15px"/><br clear="left"/>

Simple e-commerce application project for learning React

Live - https://neo-apparel-live.herokuapp.com/

![Project Demo GIF](demo.gif)

## Features:
- Fully responsive design for mobile/desktop support.
- User registration and Login form via Email and Google accounts.
- Maintains Shopping Cart contents in local browser storage.
- Integrates with Stripe API for a simulated payment process - NOTE: No payment details will be recorded or charged in any way.
- React Hooks for more a modern functional component style.
- React.lazy to only load page code when required by navigation.
- Fully qualified as a “PWA Optimised” progressive web app, and scores 100% on Accessibility, Best Practices and SEO metrics according to Chrome Lighthouse checks (at the time of writing).

## Libraries used:
- Material UI for consistent theming and React form/layout components.
- Redux and Redux Toolkit for UI state management.
- Database and user login authentication hosted on Firebase cloud
Heroku for convenient deployment and hosting of the project instance.
    
Disclaimer - Project is based on the material from the Complete React Developer course - https://www.udemy.com/course/complete-react-developer-zero-to-mastery/ 


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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
