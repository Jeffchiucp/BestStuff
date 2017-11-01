import db from '../models'
import Sequelize from 'sequelize'

module.exports = (app) => {

  // SHOW
  app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    db.User.findById(userId).then((user) => {
      res.json(user);
    });
  });

  // CREATE
  app.post('/user/create', (req, res) => {
    req.body.UserId = req.params.id;

    db.User.create(req.body).then((user) => {
      res.status(200);
      res.json({msg: 'successfully added', user});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    })
  });

  // UPDATE
  app.put('/user/:id/edit', (req, res) => {
    const userId = req.body.params;
    db.User.update(userId).then((user) => {
      res.json(200);
      res.json({msg: 'successfully updated', user});
    }).catch((err) => {
      if(err) {
        res.json(err)
      }
    });
  });


  // DESTROY
  app.delete('/user/:id', (req, res) => {
    const userId = req.body.params;
    db.User.destroy(userId).then((user) => {
      res.status(200);
      res.json({msg: 'successfully deleted', user});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    });
  });

};
