import { downTo } from './helpers';
import { capitalize } from './helpers';

class Bottles {
    verse(number) {
        const chooseUnitName = (n) => n === 1 ? 'bottle' : 'bottles';
        const chooseQuantity = (n) => n === 0 ? 'no more' : n;
        const chooseOpeningPronoun = (n) => n === 1 ? 'it' : 'one';
        const closingNumber = number - 1;
        const openingUnitName = chooseUnitName(number);
        const closingUnitName = chooseUnitName(closingNumber);
        const openingQuantity = chooseQuantity(number);
        const closingQuantity = chooseQuantity(closingNumber);
        const finalLine = 'Go to the store and buy some more, 99 bottles of beer on the wall.';
        return capitalize(`${openingQuantity} ${openingUnitName} of beer on the wall, `) +
                `${openingQuantity} ${openingUnitName} of beer.\n` +
                (number === 0 ? finalLine :`Take ${chooseOpeningPronoun(number)} down and pass it around, ` +
                `${closingQuantity} ${closingUnitName} of beer on the wall.`) + '\n';
    }
}

export { Bottles };