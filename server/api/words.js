const router = require('express').Router()
const {LotrWord} = require('../db/models')
module.exports = router

router.use('/lotr', async (req, res, next) => {
  const lotrWordsArr = await LotrWord.findAll().map(object => object.word)
  res.json(lotrWordsArr)
})
