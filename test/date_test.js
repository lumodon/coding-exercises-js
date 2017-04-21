import { expect } from 'chai'
import date from '../src/date'
import arrayOfDates from './utilities/dates.list'
import arrayOfCorrectDates from './utilities/correctDates.list'

describe('date()', () => {

  it('Should spit out ISO 8601 dates for entire gist list', () => {
    const outputArray = date(arrayOfDates)
    arrayOfCorrectDates.forEach( (date, index) => {
      expect(outputArray[index]).to.equal(date)
    })
  })
})