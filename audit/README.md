# OAX Swim Gateway Stable Coin Contract Audit



## Summary

[BokkyPooBah](https://www.bokconsulting.com.au/) has developed a smart contract library and wrapper contract for gas efficient calculation of date and time on Ethereum.

[Deepyr Pty Ltd](https://www.deepyr.com) was commissioned to perform an audit on these Ethereum smart contracts.

This audit has been conducted on the source code from [apguerrera/](https://github.com/apguerrera/) in commits [75cc80c](https://github.com/apguerrera)


<br />

<hr />

## Table Of Contents

* [Summary](#summary)
* [Recommendations](#recommendations)
* [Potential Vulnerabilities](#potential-vulnerabilities)
* [Scope](#scope)
* [Risks](#risks)
* [Testing](#testing)
* [Code Review](#code-review)

<br />

<hr />

## Recommendations
* [ ] **LOW IMPORTANCE** Combine uint DOW constant numbers as uint8 to pack together and save gas.
* [ ] **LOW IMPORTANCE** Save gas in `BokkyPooBahsDateTimeLibrary._isLeapYear` by changing the order of comparison
* [ ] **LOW IMPORTANCE** Add check in `BokkyPooBahsDateTimeLibrary.getDaysInMonth` for passing no variable and returning 31
* [ ] **LOW IMPORTANCE** Save gas in `BokkyPooBahsDateTimeLibrary.getDayOfWeek` by combining arithmetic
* [ ] **LOW IMPORTANCE** Potential underflow in `BokkyPooBahsDateTimeLibrary.subYears` by adding `require(year-_years>1970);`
<br />

<hr />

## Potential Vulnerabilities


<br />

<hr />

## Scope

This audit is into the technical aspects of the smart contracts. The primary aim of this audit is to ensure that the coded algorithms work as expected. This audit does not guarantee that that the code is bugfree, but intends to highlight any areas of weaknesses.

<br />

<hr />

## Risks

As it is a library, the main risk is external developers incorrectly implementing functions, passing incorrectly formatted values into the functions or using values that are out of the tested range (1970-2345). To combat this risk, it should be noted there are two helper functions that can be used initially to verify before using one of the library functions.

<br />

<hr />

## Testing

Details of the testing environment can be found in [test](test).

[../chain/index.js](../chain/index.js) and [../chain/lib/deployerProd.js](../chain/lib/deployerProd.js) were used as a guide for the security model used with this set of contracts.

The following functions were tested using the script [test/01_test1.sh](test/01_test1.sh) with the summary results saved
in [test/test1results.txt](test/test1results.txt) and the detailed output saved in [test/test1output.txt](test/test1output.txt):



<br />

<hr />

## Code Review

* [x] [code-review/BokkyPooBahsDateTimeLibrary.md](code-review/BokkyPooBahsDateTimeLibrary.md)
  * [x] function daysFromDate(uint year, uint month, uint day)
  * [] function daysToDate(uint days)
  * [x] function timestampFromDate(uint year, uint month, uint day)
  * [x] function timestampFromDateTime(uint year, uint month, uint day, uint hour, uint minute, uint second)
  * [x] function timestampToDate(uint timestamp)
  * [x] function timestampToDateTime(uint timestamp)
  * [x] function isLeapYear(uint timestamp)
  * [x] function isLeapYear(uint year)
  * [x] function isWeekDay(uint timestamp)
  * [x] function isWeekEnd(uint timestamp)
  * [x] function getDaysInMonth(uint timestamp)
  * [x] function getDaysInMonth(uint year, uint month)
  * [x] function getDayOfWeek(uint timestamp)
  * [x] function getYear(uint timestamp)
  * [x] function getMonth(uint timestamp)
  * [x] function getDay(uint timestamp)
  * [x] function getHour(uint timestamp)
  * [x] function getMinute(uint timestamp)
  * [x] function getSecond(uint timestamp)
  * [x] function addYears(uint timestamp, uint years)
  * [x] function addMonths(uint timestamp, uint months)
  * [x] function addDays(uint timestamp, uint days)
  * [x] function addHours(uint timestamp, uint hours)
  * [x] function addMinutes(uint timestamp, uint minutes)
  * [x] function addSeconds(uint timestamp, uint seconds)
  * [x] function subYears(uint timestamp, uint years)
  * [x] function subMonths(uint timestamp, uint months)
  * [x] function subDays(uint timestamp, uint days)
  * [x] function subHours(uint timestamp, uint hours)
  * [x] function subMinutes(uint timestamp, uint minutes)
  * [x] function subSeconds(uint timestamp, uint seconds)
  * [x] function diffYears(uint fromTimestamp, uint toTimestamp)
  * [x] function diffMonths(uint fromTimestamp, uint toTimestamp)
  * [x] function diffDays(uint fromTimestamp, uint toTimestamp)
  * [x] function diffHours(uint fromTimestamp, uint toTimestamp)
  * [x] function diffMinutes(uint fromTimestamp, uint toTimestamp)
  * [x] function diffSeconds(uint fromTimestamp, uint toTimestamp)

<br />



### Outside Scope

* Things that are out of scope

<br />

<br />

(c) Adrian Guerrera / Deepyr Pty Ltd for BokkyPooBah / Bok Consulting Pty Ltd - Aug 30 2018. The MIT Licence.
