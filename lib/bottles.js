import { downTo } from './helpers';

class Bottles {
    verse(number) {
        return [
            '99 bottles of beer on the wall, 99 bottles of beer.',
            'Take one down and pass it around, 98 bottles of beer on the wall.',
            ''
        ].join('\n');
    }
}

export { Bottles };