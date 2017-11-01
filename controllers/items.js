var express = require('express');
var router = express.Router({mergeParams: true});

var models  = require('../db/models');

module.exports = (app) => {

  // SHOW
  router.get('/items/:id', (req, res) => {
    const itemId = req.params.id;
    db.Item.findById(itemId).then((item) => {
      res.json(item);
    });
  });

  // CREATE
  router.post('/items/create', (req, res) => {
    req.body.UserId = req.params.id;

    db.item.create(req.body).then((item) => {
      res.status(200);
      res.json({msg: 'successfully added', item});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    })
  });

  // UPDATE
  router.put('/item/:id/edit', (req, res) => {
    const itemId = req.body.params;
    db.Item.update(itemId).then((item) => {
      res.json(200);
      res.json({msg: 'successfully updated', item});
    }).catch((err) => {
      if(err) {
        res.json(err)
      }
    });
  });


  // DESTROY
  router.delete('/item/:id', (req, res) => {
    const itemId = req.body.params;
    db.Item.destroy(itemId).then((item) => {
      res.status(200);
      res.json({msg: 'successfully deleted', item});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    });
  });

};
