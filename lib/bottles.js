import { downTo } from './helpers';

class Bottles {
    verse(number) {
        const remaining = number - 1;
        const unitName = remaining === 1 ? 'bottle' : 'bottles';
        return [
            `${number} bottles of beer on the wall, ${number} bottles of beer.`,
            `Take one down and pass it around, ${remaining} ${unitName} of beer on the wall.`,
            ''
        ].join('\n');
    }
}

export { Bottles };