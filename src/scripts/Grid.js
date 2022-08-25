import Cell from './Cell';

export default class Grid {
	constructor(width, height, gridClass = 'grid') {
		this.element = document.createElement('div');
		this.element.classList.add(gridClass);

		this.element.style.display = 'grid';
		this.element.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
		this.element.style.gridTemplateRows = `repeat(${height}, 1fr)`;

		this.cells = new Array();

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const cell = new Cell(x, y);
				this.cells.push(cell);
				this.element.appendChild(cell.element);
			}
		}
	}
}
