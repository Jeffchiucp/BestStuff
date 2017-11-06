# BestStuff

Item review app for Make School's Web 3 - Advanced Web Patterns. This project was built using a boilerplate called [React-Express-Starter](https://github.com/bharani91/react-express-starter) and uses React Router, Webpack, HMR, PostCSS & Express. This project also uses a boilerplate CSS theme for bootstrap known as [Paper Kit Pro 2](https://www.creative-tim.com/product/paper-kit-2-pro).

### Development
```
npm install
npm start
```
This will start an express app at http://localhost:8000.


### Production Build
```
npm run build
npm run build:start
```
This will create a production build and will start a server at http://localhost:8000/


### Deployment
Install the Heroku toolbelt.
```
heroku create myapp
git push heroku master
```

### TODO
- Set up a server to fix the refresh page issue (see [this](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually) Stack Overflow question for more information)
- Write responsive css for mobile usage
- Deal w/ security of API keys (and get new API keys...)

-------------------

Boilerplate starter created by
bharanim [@bharani91](https://twitter.com/bharani91)
