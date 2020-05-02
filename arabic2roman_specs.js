/**
 * Tests for JavaScript version of Arabic to Roman Numeral Convertor
 */

const { convert } = require('../arabic2roman')

describe('An Arabic to Roman numeral convertor',() => {

    it('has a smoke test', () => {
        expect(true).toBe(true)
    })

    it('can convert 1 to "I"', () => {
        expect(convert(1)).toBe('I')
    })

    it('can convert 2 to "II"', () => {
        expect(convert(2)).toBe('II')
    })
})
