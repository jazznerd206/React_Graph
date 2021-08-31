import { Element } from './Element';
import random from '../../../utils/random';

export class Field {
    constructor(height, width) {
        this.units = [];
        this.events = [];
        this.calledEvents = [];
        this.loop = false;
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
        return this;
    }
    create(maxUnits) {
        for (let i = 0; i < maxUnits; i++) {
            let _Y = random(0, parseInt(this.height));
            let _X = random(0, parseInt(this.width));
            let _SIZE = random(0, 50);
            let el = new Element(i, _X, _Y, _SIZE);
            this.units.push(el);
            let _DOM_APPENDAGE = el.createElement(i);
            this.domField.append(_DOM_APPENDAGE.element);
        }
    }
    run() {
        console.log('run');
        if (!this.previousAnimation) this.previousAnimation = Date.now();
        let thisFrame = Date.now();
        let _DIFF = thisFrame - this.previousAnimation;
        if (this.units.length === 0) {
            console.log('no elements');
            if (this.loop === true) {
                this.units = this.events;
                return;
            }
            return;
        }
        this.eLoopId = window.requestAnimationFrame(this.run.bind(this));
        let queue = [...this.units];
        let event = queue.shift();
        let delay = event.reveal;
        if (_DIFF < delay) return;
        else {
            console.log('event :>> ', event);
            let lastEvent = this.calledEvents.pop()
            if (_DIFF < lastEvent.stop) {
                lastEvent.event.hide();
            } else {
                let neo = {
                    stop: _DIFF + 500,
                    event: lastEvent
                }
                this.calledEvents.push(neo);
                event.show();

            }
        }
        this.units = queue;
        // this.events = calledEvents;
        // this.previousAnimation = thisFrame;
    }
}