

async function searchShows(req, res) {
  try {
    const data = await Comment.create(req.body)
    res.status(200).json(comment)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}


module.exports = { searchShows }
