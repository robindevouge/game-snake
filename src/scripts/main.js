import Grid from "./Grid"

const $gridContainer = document.querySelector('.grid-container');

const Game = {
	config: {
		gridWidth: 15,
		gridHeight: 15,
		scoreIncrement: 1,
	},
	state: {
		position: {
			x: 3,
			y: 0,
		},
		segments: [
			{
				x: 2,
				y: 0,
			},
			{
				x: 1,
				y: 0,
			},
			{
				x: 0,
				y: 0,
			},
		],
		food: [],
		score: 0,
	},
	grid: null,
};

const createGrid = () => {
	Game.grid = new Grid(Game.config.gridWidth, Game.config.gridHeight);
	$gridContainer.appendChild(Game.grid.element);
};

Game.init = () => {
	createGrid();
};

Game.start = () => {};

Game.computeNextFrame = () => {};

Game.renderFrame = () => {};

document.addEventListener('DOMContentLoaded', () => {
	Game.init();
});
