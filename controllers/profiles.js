const { Profile, Show, Review } = require('../models')
const cloudinary = require('cloudinary').v2

async function index(req, res) {
  try {
    const profiles = await Profile.findAll()
    res.json(profiles)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function addPhoto(req, res) {
  try {
    const imageFile = req.files.photo.path
    const profile = await Profile.findByPk(req.params.id)
    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    profile.photo = image.url
    await profile.save()
    res.status(201).json(profile.photo)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  console.log("req.params.profileId", req.params.profileId)
  try {
    const profile = await Profile.findByPk(req.params.profileId)
    console.log("profile", profile)
    profile.set(req.body)
    await profile.save()
    res.status(200).json(profile)
  } catch (error) {
    console.log("ALERT ALERT ALERT", error)
    res.status(500).json({ err: error })
  }
}

async  function show(req, res) {
  try {
    const profile = await Profile.findByPk(req.params.id, {
      include: [{ model: Show, as: "shows"},{ model: Review, as: "reviews", include: [{ model: Show, as: "reviewOf"}]
    }]
    })
    res.status(200).json(profile)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

module.exports = { index, addPhoto, update, show }
