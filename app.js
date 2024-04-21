const express = require('express');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');
const { join } = require('path')
const { json } = require('body-parser')
const cors = require('./middlewares/cors')
const PORT = 3000;
const app = express();
app.use(
	cors,
	json(),
	express.static(join(__dirname, 'public')),
	mainRoute,
	gamesRouter
);
app.listen(PORT, () => {
	console.log(`Server is running at PORT http://localhost:${PORT}`);
})