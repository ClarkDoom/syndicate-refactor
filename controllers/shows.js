const { Show, Profile, Review, Comment } = require('../models')



async function create(req, res) {
  console.log("req.body ALERT ALERT ALERT", req.body)
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
  console.log("req.body", req.body)
  try {
    const show = await Show.findByPk(req.params.showId)
    show.set(req.body)
    await show.save()
    console.log(show)
    res.status(200).json(show)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}
async function deleteShow(req, res) {
  console.log("req.params.showId", req.params.showId)
  try {
    const show = await Show.findByPk(req.params.showId)
    await show.destroy()
    res.status(200).json(show)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const show = await Show.findAll({
      include: [{ model: Profile, as: "profile" },
      { model: Review, as: "reviews", }
      ],
      order: [['updatedAt', 'DESC']]
    })
    res.status(200).json(show)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}
async function getProfileShows(req, res) {
  try {
    const shows = await Show.findAll({
      where: { addedBy: req.params.profileId }
    })
    res.status(200).json(shows)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = { create, update, index, deleteShow, getProfileShows }
