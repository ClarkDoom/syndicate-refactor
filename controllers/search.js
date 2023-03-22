const apiKey = process.env.TMDB_API_KEY

async function searchShows(req, res) {
  try {
    const query = req.params.searchQuery
    const url=`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${query}&include_adult=false`
    const data = await fetch(url)
    const response = await data.json()
    res.status(200).json(response)

  } catch (error) {
    res.status(500).json({ err: error })
  }
}
async function findShow(req, res) {
  try {
    const showId = req.params.showId
    const url=`https://api.themoviedb.org/3/tv/${showId}?api_key=${apiKey}&language=en-US`
    const data = await fetch(url)
    const response = await data.json()
    res.status(200).json(response)

  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function findCast(req, res) {
  try {
    const showId = req.params.showId
    const seasonNumber = req.params.seasonNumber
    const episodeNumber = req.params.episodeNumber
    const url=`
    https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}/episode/${episodeNumber}/credits?api_key=${apiKey}&language=en-US`
    const data = await fetch(url)
    const response = await data.json()
    res.status(200).json(response)

  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function searchSeason(req, res) {
  try {
    const showId = req.params.showId
    const seasonNumber = req.params.seasonNumber
    const url=`https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}?api_key=${apiKey}&language=en-US`
    const data = await fetch(url)
    const response = await data.json()
    res.status(200).json(response)

  } catch (error) {
    res.status(500).json({ err: error })
  }
}


module.exports = { searchShows, searchSeason, findShow, findCast }
