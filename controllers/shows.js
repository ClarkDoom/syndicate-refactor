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
    const show = await Show.findByPk(req.params.showId)
    show.set(req.body)
    await show.save()
    res.status(200).json(show)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const show = await Show.findAll({})
    res.status(200).json(show)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deleteShow(req, res) {
  try {
    const show = await Show.findByPk(req.params.showId)
    await show.destroy()
    res.status(200).json(show)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = { create, update, index, deleteShow }
