function date(arrOfDates) {
  const NUM_YEARS_AHEAD = 10
  const YEAR_PRE_MILLENIUM = '19'
  const YEAR_POST_MILLENIUM = '20'
  const yearList = []

  const dateFromAcronym = acronym => {
    return { 
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12'
    }[acronym]
  }

  const getFullYear = year => {
    year = String(year)
    if(year.length === 4) return year
    if(parseInt(year) <= parseInt(String(new Date().getFullYear()+NUM_YEARS_AHEAD).substr(2,2))) {
      return String(YEAR_POST_MILLENIUM+year)
    } else {
      return String(YEAR_PRE_MILLENIUM+year)
    }
  }

  for(let date of arrOfDates) {
    let year, month, day
    if(/\,/g.test(date)) {
      month = dateFromAcronym(date.substr(0,3))
      day = date.substr(4,2)
      year = getFullYear(date.substr(8,4))
      yearList.push(year+'-'+month+'-'+day)
    } else if(/[\#\*\/]/g.test(date)) { // mm#yy#dd
      month = date.substr(0,2)
      day = date.substr(6,2)
      year = getFullYear(date.substr(3,2))
      yearList.push(year+'-'+month+'-'+day)
    } else if(/\-/g.test(date)) {
      yearList.push(date)
    } else {
      console.warn('Error, date not a format this function can handle')
      yearList.push('Error, date not a format this function can handle')
    }
  }

  return yearList
}

export default date