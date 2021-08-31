export class Element {
    constructor(index, top, left, size) {
        this.position = 'absolute';
        this.index = index;
        this.top = top;
        this.left = left;
        this.element = null;
        this.size = size;
        this.createElement(index);
    }
    createElement(int) {
        let newElement = document.createElement('div');
        newElement.classList.add('node');
        newElement.style.position = 'absolute';
        newElement.style.top = `${this.top}%`;
        newElement.style.left = `${this.left}%`;
        newElement.style.height = `${this.size}px`;
        newElement.style.width = `${this.size}px`;
        newElement.style.borderRadius = `${Math.random(25, 50) * 100}px`;
        newElement.style.background = 'red';
        newElement.id = `node-${int}`;
        // newElement.onmouseenter = this.parseField.bind(this);
        this.element = newElement;
    }
}