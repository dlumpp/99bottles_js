import { downTo } from './helpers';

class Bottles {
    verse(number) {
        const closingNumber = number - 1;
        const chooseUnitName = (n) => n === 1 ? 'bottle' : 'bottles';
        const chooseClosingNumberName = (n) => n === 0 ? 'no more' : closingNumber;
        const chooseOpeningPronoun = (n) => n === 1 ? 'it' : 'one';
        const openingUnitName = chooseUnitName(number);
        const closingUnitName = chooseUnitName(closingNumber);
        return [
            `${number} ${openingUnitName} of beer on the wall, ${number} ${openingUnitName} of beer.`,
            `Take ${chooseOpeningPronoun(number)} down and pass it around, ${chooseClosingNumberName(closingNumber)} ${closingUnitName} of beer on the wall.`,
            ''
        ].join('\n');
    }
}

export { Bottles };