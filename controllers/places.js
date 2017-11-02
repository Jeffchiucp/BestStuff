var db = require('../db/models');

module.exports = (app) => {

  // SHOW
  app.get('/place/:id', (req, res) => {
    const placeId = req.params.id;
    db.Place.findById(placeId).then((place) => {
      res.json(place);
    });
  });

  // CREATE
  app.post('/place/create', (req, res) => {
    req.body.UserId = req.params.id;

    db.Place.create(req.body).then((place) => {
      res.status(200);
      res.json({msg: 'successfully added', place});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    })
  });

  // UPDATE
  app.put('/place/:id/edit', (req, res) => {
    const placeId = req.body.params;
    db.Place.update(placeId).then((place) => {
      res.json(200);
      res.json({msg: 'successfully updated', place});
    }).catch((err) => {
      if(err) {
        res.json(err)
      }
    });
  });


  // DESTROY
  app.delete('/place/:id', (req, res) => {
    const placeId = req.body.params;
    db.Place.destroy(placeId).then((contest) => {
      res.status(200);
      res.json({msg: 'successfully deleted', place});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    });
  });

};
