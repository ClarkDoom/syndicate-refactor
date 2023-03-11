const { Show } = require('../models')



async function create(req, res) {
  try {
    req.body.addedBy = req.params.profileId
    const show = await Show.create(req.body)
    res.status(200).json(show)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  try {
    req.body.addedBy = req.params.profileId
    const show = await Show.create(req.body)
    res.status(200).json(show)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

module.exports = { create, update }
