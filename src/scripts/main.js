import Controls from './Controls';
import Grid from './Grid';
import Snake from './Snake';

const $gridContainer = document.querySelector('.grid-container');

const Game = {
	config: {
		gridWidth: 15,
		gridHeight: 15,
		scoreIncrement: 1,
		startPosition: {
			x: 5,
			y: 7,
		},
	},
	state: {
		food: [],
		score: 0,
	},
	grid: null,
	snake: null,
	controls: null,
};

const createGrid = () => {
	Game.grid = new Grid(Game.config.gridWidth, Game.config.gridHeight);
	$gridContainer.appendChild(Game.grid.element);
};

const createSnake = () => {
	Game.snake = new Snake(Game.grid, Game.config.startPosition.x, Game.config.startPosition.y);
};

const initControls = () => {
	Game.controls = new Controls([
		{
			key: 'ArrowUp',
			action: () => {
				Game.snake.move('up');
			},
		},
		{
			key: 'ArrowRight',
			action: () => {
				Game.snake.move('right');
			},
		},
		{
			key: 'ArrowDown',
			action: () => {
				Game.snake.move('down');
			},
		},
		{
			key: 'ArrowLeft',
			action: () => {
				Game.snake.move('left');
			},
		},
	]);
};

Game.init = () => {
	createGrid();
	createSnake();
	initControls();
};

Game.start = () => {
	Game.controls.disabled = false;
};

Game.computeNextFrame = () => {};

Game.renderFrame = () => {};

document.addEventListener('DOMContentLoaded', () => {
	Game.init();
	Game.start();
});
