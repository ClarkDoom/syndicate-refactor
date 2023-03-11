const { Review } = require('../models')


async function create(req, res) {
  try {
    req.body.reviewFor = req.params.showId
    req.body.author = req.params.profileId
    const review = await Review.create(req.body)
    res.status(200).json(review)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  try {
    const review = await Review.findByPk(req.params.reviewId)
    review.set(req.body)
    await review.save()
    res.status(200).json(review)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}
async function deleteReview(req, res) {
  try {
    const review = await Review.findByPk(req.params.reviewId)
    await review.destroy()
    res.status(200).json(review)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const review = await Review.findAll({})
    res.status(200).json(review)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = { create, update, deleteReview, index }
