// class SnakeSegment {
// 	constructor (x, y) {

// 	}
// }

export default class Snake {
	constructor(grid, x, y, length = 3) {
		this.grid = grid;
		this.position = { x, y };
		this.direction = 'right';
		this.length = 3;
		this.segments = [];

		for (let i = 0; i < this.length; i++) {
			this.segments.push({
				position: { x: x - i - 1, y: this.position.y },
				direction: 'right',
			});
		}

		this.draw();
	}

	draw() {
		// draw head
		const headCell = this.grid.getCell(this.position);
		headCell.element.className = headCell.defaultClass;
		headCell.element.classList.add('snake-head');
		headCell.element.classList.add(this.direction);

		// draw segments
		this.segments.forEach((segment, index) => {
			const cell = this.grid.getCell(segment.position);
			cell.element.className = cell.defaultClass;
			if (index === this.segments.length - 1) {
				cell.element.classList.add('snake-tail');
			} else {
				cell.element.classList.add('snake-body');
			}
			cell.element.classList.add(segment.direction);
		});
	}

	move(dir) {
		console.log(dir);
	}
}
