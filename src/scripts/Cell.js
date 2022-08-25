export default class Cell {
	constructor(x, y, cellClass = 'cell') {
		this.defaultClass = cellClass;

		this.element = document.createElement('div');
		this.element.className = cellClass;
		this.element.dataset.x = x;
		this.element.dataset.y = y;

		this.position = { x, y };

		this.element.innerHTML = `(${x}, ${y})`;
	}
}
