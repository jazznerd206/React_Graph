import { Element } from './Element';
import random from '../../../utils/random';

export class Field {
    constructor(height, width) {
        this.s = 0;
        this.h = 0;
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
        let revealTime = 10;
        for (let i = 0; i < maxUnits; i++) {
            let _Y = random(0, parseInt(this.height));
            let _X = random(0, parseInt(this.width));
            let _SIZE = random(0, 50);
            let el = new Element(i, _X, _Y, _SIZE, revealTime);
            this.units.push(el);
            let _DOM_APPENDAGE = el.createElement(i);
            this.domField.append(_DOM_APPENDAGE.element);
            revealTime = revealTime + 10;
        }
        // this.generateEvents(this.units);
    }
    // generateEvents(raw) {
    //     for (let i = 0; i < raw.length; ++i) {
    //         console.log(this.units[i]);
    //     }
    // }
    run() {
        if (!this.previousAnimation) this.previousAnimation = Date.now();
        let thisFrame = Date.now();
        let _DIFF = thisFrame - this.previousAnimation;
        if (this.units.length === 0 && this.calledEvents.length === 0) {
            console.log('no elements');
            if (this.loop === true) {
                this.units = this.events;
                return;
            }
            return;
        }
        this.eLoopId = window.requestAnimationFrame(this.run.bind(this));
        let queue = [...this.units];
        if (this.units.length > 0) {
            let event = queue.shift();
            let delay = event.reveal;
            if (this.eLoopId < event.reveal) {
                queue.unshift(event);
                return;
            } else {
                let neo = {
                    id: this.eLoopId,
                    remove: event.remove,
                    event: event,
                }
                this.calledEvents.push(neo);
                event.show();
                // console.log('event show :>> ', event);
                ++this.s;
            }
        }
        if (this.calledEvents.length > 0) {
            console.log('called events stack', this.eLoopId);
            let calledEvent = this.calledEvents.shift();
            console.log('calledEvent :>> ', calledEvent);
            if (this.eLoopId < calledEvent.remove) {
                this.calledEvents.push(calledEvent);
            } else {
                console.log('calledEvent.event hide :>> ', calledEvent.event);
                calledEvent.event.hide();
                ++this.h;
            }
        }
        this.units = queue;
        // this.events = this.calledEvents;
        this.previousAnimation = thisFrame;
    }
    kill() {
        if (this.eLoopId !== null) {
            window.cancelAnimationFrame.bind(this);
            this.eLoopId = null;
        }
        return this;
    }
}