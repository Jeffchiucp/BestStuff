module.exports = (app) => {

  app.get('/contests', (req, res) => {
    console.log("*********************** Tassos ****************************")
    res.send('It works!')
  })

}
