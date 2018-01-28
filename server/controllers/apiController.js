module.exports = {
  list : (req, res) => {
    res.send({status : "ok!"});
  },
  article : (req, res) => {
    res.status(200).send( { messege:"This is a article!" } );
  }
}
