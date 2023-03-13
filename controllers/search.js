const fetch = require("node-fetch");

const baseUrl = process.env.TMDB_API_KEY

async function searchShows(req, res) {
  try {
    const query = req.params.searchQuery
    const url=`https://api.themoviedb.org/3/search/tv?api_key=${baseUrl}&language=en-US&page=1&query=${query}&include_adult=false`
    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json(data)

  } catch (error) {
    res.status(500).json({ err: error })
  }
}


module.exports = { searchShows }
