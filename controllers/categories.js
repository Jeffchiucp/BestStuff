module.exports = (app) => {

  app.get('/category', (req, res) => {
    console.log("*********************** Tassos ****************************")
    res.send('It works!')
  })

}
