import { downTo } from './helpers';

class Bottles {
    verse(number) {
        return [
            `${number} bottles of beer on the wall, ${number} bottles of beer.`,
            `Take one down and pass it around, ${number-1} bottles of beer on the wall.`,
            ''
        ].join('\n');
    }
}

export { Bottles };