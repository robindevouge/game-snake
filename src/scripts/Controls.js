export default class Controls {
	constructor(mappings, disabled = true) {
		this.disabled = disabled;

		document.addEventListener('keydown', (ev) => {
			if (this.disabled) return;
			mappings.forEach((mapping) => {
				if (mapping.key === ev.code) {
					mapping.action();
					return;
				}
			});
		});
	}
}
