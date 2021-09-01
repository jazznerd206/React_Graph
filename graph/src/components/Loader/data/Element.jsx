export class Element {
    constructor(index, top, left, size, reveal) {
        this.position = 'absolute';
        this.index = index;
        this.top = top;
        this.left = left;
        this.reveal = reveal;
        this.remove = reveal + 25;
        this.element = null;
        this.size = size;
        this.createElement(index);
    }
    createElement(int) {
        let newElement = document.createElement('div');
        newElement.classList.add('node');
        newElement.style.position = 'absolute';
        newElement.style.display = 'none';
        newElement.style.top = `${this.top}%`;
        newElement.style.left = `${this.left}%`;
        newElement.style.height = `${this.size}px`;
        newElement.style.width = `${this.size}px`;
        newElement.style.borderRadius = `${Math.random(25, 50) * 100}px`;
        newElement.style.background = 'red';
        newElement.id = `${int}`;
        this.element = newElement;
        return this;
    }
    show() {
        return this.element.style.display = 'flex';
    }
    hide() {
        return this.element.style.display = 'none';
    }
}