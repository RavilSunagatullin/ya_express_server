const { readData } = require('../utils/data')
const getAllGames = async (req, res, next) => {
	const games = await readData('./dataset/games.json')
	if (!games) {
		res.status(400)
		res.send({
			status: 'error',
			message: 'Нет игр в базе данных. Добавьте игру.'
		})
	}
	req.games = games
	next()
}
module.exports = getAllGames