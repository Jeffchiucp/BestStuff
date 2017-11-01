var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.development');
var app = express();
var compiler = webpack(config);
// var React = require('react');
// require('node-jsx').install({
//   harmony: true,
//   extension: '.jsx'
// });
// var Contest = React.createFactory(require('./src/pages/contest/page')); // returns a function

// var db = require('./models');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('beststuff', 'postgres', null, { dialect: 'postgres' });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var middleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});



app.use(middleware);
app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log
}));

app.get('*', function response(req, res) {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
  res.end();
});

app.use(express.static(path.join(__dirname, '/dist')))
app.use(express.static('public'))

require('./controllers/contests')(app)
require('./controllers/items')(app)


app.listen(config._hotPort, 'localhost', function (err) {
  if (err) {
    console.log(err)
  }
  // db.sequelize.sync();
  console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', config._hotPort, config._hotPort)
})
