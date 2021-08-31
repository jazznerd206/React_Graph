import { Element } from './Element';
import random from '../../../utils/random';

export class Field {
    constructor(maxUnits, height, width) {
        this.units = [];
        this.events = [];
        this.loop = false;
        this.maxUnits = maxUnits || 100;
        this.domField = null;
        this.height = height;
        this.width = width;
        this.eLoopId = 0;
        this.init();
    }
    init() {
        let _DOM = document.createElement('div');
        _DOM.setAttribute('id', 'domField');
        _DOM.style.height = '100vh';
        _DOM.style.width = '100vw';
        _DOM.style.position = 'relative';
        _DOM.style.background = 'cyan';
        this.height = _DOM.style.height;
        this.width = _DOM.style.width;
        this.domField = _DOM;
        return this.domField;
    }
    create() {
        console.log('this.height :>> ', this.height);
        for (let i = 0; i < this.maxUnits; i++) {
            let _Y = random(0, parseInt(this.height));
            let _X = random(0, parseInt(this.width));
            let _SIZE = random(0, 50);
            let el = new Element(i, _X, _Y, _SIZE);
            this.units.push(el);
            this.domField.append(el.element);
            console.log('el :>> ', el);
        }
    }
    run() {
        this.eLoopId = requestAnimationFrame();
    }
}