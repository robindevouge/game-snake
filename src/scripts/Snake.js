import { addVectors } from './utils';

const vectors = {
	right: { x: 1, y: 0 },
	down: { x: 0, y: 1 },
	left: { x: -1, y: 0 },
	up: { x: 0, y: -1 },
};

class Segment {
	constructor(cell, position, direction) {
		this.cell = cell;
		this.position = position;
		this.direction = direction;
	}

	draw(type) {
		this.cell.element.className = this.cell.defaultClass;
		this.cell.element.classList.add(`snake-${type}`);
		this.cell.element.classList.add(this.direction);
	}
}

export default class Snake {
	constructor(grid, x, y, length = 3) {
		this.grid = grid;
		this.position = { x, y };
		this.direction = 'right';
		this.length = 3;
		this.head = null;
		this.segments = [];

		this.head = new Segment(this.grid.getCell(this.position), this.position, this.direction);

		for (let i = 0; i < this.length; i++) {
			const pos = {
				x: x - i - 1,
				y: this.position.y,
			};
			this.segments.push(new Segment(this.grid.getCell(pos), pos, 'right'));
		}

		this.draw();
	}

	draw() {
		// draw head
		this.head.draw('head');

		// draw segments
		this.segments.forEach((segment, index) => {
			if (index === this.segments.length - 1) {
				segment.draw('tail');
			} else {
				segment.draw('body');
			}
		});
	}

	move(dir) {
		// clone head as segment
		this.segments.unshift(Object.assign(Object.create(Object.getPrototypeOf(this.head)), this.head));

		// update position
		let nextPos = addVectors(this.position, vectors[dir]);
		if (nextPos.x < 0) {
			nextPos.x = this.grid.width - 1;
		}
		if (nextPos.x > this.grid.width - 1) {
			nextPos.x = 0;
		}
		if (nextPos.y < 0) {
			nextPos.y = this.grid.height - 1;
		}
		if (nextPos.y > this.grid.height - 1) {
			nextPos.y = 0;
		}
		this.position = nextPos;
		this.direction = dir;

		// create new head
		this.head = new Segment(this.grid.getCell(this.position), this.position, this.direction);

		// remove last segment
		const prevTail = this.segments.pop();
		prevTail.cell.element.className = prevTail.cell.defaultClass;

		this.draw();
	}
}
