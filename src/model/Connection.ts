import { tweened } from 'svelte/motion';
import { expoInOut } from 'svelte/easing';
import { writable, derived } from 'svelte/store';
import type {
    NumTweened,
    NumWritable,
    AnyArrayWritable,
    BooleanWritable,
    PosDerived,
} from './Utils';

export default class Connection {
    id: number;
    idA: number;
    idB: number;
    weight: NumWritable;
    directionCounter: NumWritable;
    lengthTween: NumTweened;
    kill: BooleanWritable;
    centerPos: PosDerived;
    settingDirection: BooleanWritable;
    animationEvents: AnyArrayWritable;
    progressFlipped: BooleanWritable;

    constructor(
        id: number,
        idA: number,
        idB: number,
        weight: number = 1,
        directionCounter: number = 0,
        lengthTween: NumTweened = tweened(0, {
            easing: expoInOut,
            duration: 500,
        })
    ) {
        this.id = id;
        this.idA = idA;
        this.idB = idB;
        this.lengthTween = lengthTween;
        this.weight = writable(weight);
        this.kill = writable(false);
        this.centerPos = null;
        this.settingDirection = writable(true);
        this.directionCounter = writable(directionCounter);

        this.animationEvents = writable([]);
        this.progressFlipped = writable(false);
    }
}
