const { Comment, Profile } = require('../models')


async function create(req, res) {
  try {
    req.body.commentOn = req.params.reviewId
    req.body.createdBy = req.params.profileId
    const comment = await Comment.create(req.body)
    res.status(200).json(comment)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  try {
    const comment = await Comment.findByPk(req.params.commentId)
    comment.set(req.body)
    await comment.save()
    res.status(200).json(comment)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deleteComment(req, res) {
  try {
    const comment = await Comment.findByPk(req.params.commentId)
    await comment.destroy()
    res.status(200).json(comment)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const comment = await Comment.findAll({})
    res.status(200).json(comment)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function findReviewComments(req, res) {
  try {
    const comments = await Comment.findAll({
      where: { commentOn: req.params.reviewId },
      include: [{ model: Profile, as: "commentBy"}]
    })
    res.status(200).json(comments)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

module.exports = { create, update, deleteComment, index, findReviewComments }
