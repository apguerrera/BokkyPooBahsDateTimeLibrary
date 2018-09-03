# BokkyPooBahsDateTimeLibrary

Source file [../../contracts/BokkyPooBahsDateTimeLibrary.sol](../../contracts/BokkyPooBahsDateTimeLibrary.sol).

<br />

<hr />

```javascript


pragma solidity ^0.4.24;

// ----------------------------------------------------------------------------
// BokkyPooBah's DateTime Library v1.00
//
// A gas-efficient Solidity date and time library
//
// https://github.com/bokkypoobah/BokkyPooBahsDateTimeLibrary
//
// Tested date range 1970/01/01 to 2345/12/31
//
// Conventions:
// Unit      | Range         | Notes
// :-------- |:-------------:|:-----
// timestamp | >= 0          | Unix timestamp, number of seconds since 1970/01/01 00:00:00 UTC
// year      | 1970 ... 2345 |
// month     | 1 ... 12      |
// day       | 1 ... 31      |
// hour      | 0 ... 23      |
// minute    | 0 ... 59      |
// second    | 0 ... 59      |
// dayOfWeek | 1 ... 7       | 1 = Monday, ..., 7 = Sunday
//
//
// Enjoy. (c) BokkyPooBah / Bok Consulting Pty Ltd 2018.
//
// GNU Lesser General Public License 3.0
// https://www.gnu.org/licenses/lgpl-3.0.en.html
// ----------------------------------------------------------------------------

// AG Ok
library BokkyPooBahsDateTimeLibrary {

    uint constant SECONDS_PER_DAY = 24 * 60 * 60;
    uint constant SECONDS_PER_HOUR = 60 * 60;
    uint constant SECONDS_PER_MINUTE = 60;
    // AG Ok - as referenced
    int constant OFFSET19700101 = 2440588;

    // AG Ok - Could use uint8 for gas optimisation as these variables can be packed
    uint constant DOW_MON = 1;
    uint constant DOW_TUE = 2;
    uint constant DOW_WED = 3;
    uint constant DOW_THU = 4;
    uint constant DOW_FRI = 5;
    uint constant DOW_SAT = 6;
    uint constant DOW_SUN = 7;

    // ------------------------------------------------------------------------
    // Calculate the number of days from 1970/01/01 to year/month/day using
    // the date conversion algorithm from
    //   http://aa.usno.navy.mil/faq/docs/JD_Formula.php
    // and subtracting the offset 2440588 so that 1970/01/01 is day 0
    //
    // days = day
    //      - 32075
    //      + 1461 * (year + 4800 + (month - 14) / 12) / 4
    //      + 367 * (month - 2 - (month - 14) / 12 * 12) / 12
    //      - 3 * ((year + 4900 + (month - 14) / 12) / 100) / 4
    //      - offset
    // ------------------------------------------------------------------------

    // AG Ok - Implemented algorithm as referenced
    function _daysFromDate(uint year, uint month, uint day) internal pure returns (uint _days) {
        require(year >= 1970);   // require(year >= 1970 && year <= 2345 && month <= 12 && day <= 31);  // AG: Caution - Month > 14 causes errors
        int _year = int(year);
        int _month = int(month);
        int _day = int(day);
        // AG Ok
        int __days = _day
          - 32075
          + 1461 * (_year + 4800 + (_month - 14) / 12) / 4
          + 367 * (_month - 2 - (_month - 14) / 12 * 12) / 12
          - 3 * ((_year + 4900 + (_month - 14) / 12) / 100) / 4
          // AG - as described from link provided
          - OFFSET19700101;
        // AG Ok
        _days = uint(__days);
    }

    // ------------------------------------------------------------------------
    // Calculate year/month/day from the number of days since 1970/01/01 using
    // the date conversion algorithm from
    //   http://aa.usno.navy.mil/faq/docs/JD_Formula.php
    // and adding the offset 2440588 so that 1970/01/01 is day 0
    //
    // int L = days + 68569 + offset
    // int N = 4 * L / 146097
    // L = L - (146097 * N + 3) / 4
    // year = 4000 * (L + 1) / 1461001
    // L = L - 1461 * year / 4 + 31
    // month = 80 * L / 2447
    // dd = L - 2447 * month / 80
    // L = month / 11
    // month = month + 2 - 12 * L
    // year = 100 * (N - 49) + year + L
    // ------------------------------------------------------------------------

    // AG Ok - Implemented algorithm as referenced
    function _daysToDate(uint _days) internal pure returns (uint year, uint month, uint day) {
        // AG Ok
        int __days = int(_days);

        //AG Ok - as referenced with offset
        int L = __days + 68569 + OFFSET19700101;
        int N = 4 * L / 146097;
        L = L - (146097 * N + 3) / 4;
        int _year = 4000 * (L + 1) / 1461001;
        L = L - 1461 * _year / 4 + 31;
        int _month = 80 * L / 2447;
        int _day = L - 2447 * _month / 80;
        L = _month / 11;
        _month = _month + 2 - 12 * L;
        _year = 100 * (N - 49) + _year + L;

        // AG Ok
        year = uint(_year);
        month = uint(_month);
        day = uint(_day);
    }
    // AG Ok
    function timestampFromDate(uint year, uint month, uint day) internal pure returns (uint timestamp) {
        // AG Ok
        timestamp = _daysFromDate(year, month, day) * SECONDS_PER_DAY;
    }
    // AG Ok
    function timestampFromDateTime(uint year, uint month, uint day, uint hour, uint minute, uint second) internal pure returns (uint timestamp) {
        // AG Ok
        timestamp = _daysFromDate(year, month, day) * SECONDS_PER_DAY + hour * SECONDS_PER_HOUR + minute * SECONDS_PER_MINUTE + second;
    }
    // AG Ok
    function timestampToDate(uint timestamp) internal pure returns (uint year, uint month, uint day) {
        // AG Returns 0: uint256 year, 1: uint256 month, 2: uint256 day
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
    }
    // AG Ok
    function timestampToDateTime(uint timestamp) internal pure returns (uint year, uint month, uint day, uint hour, uint minute, uint second) {
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
        uint secs = timestamp % SECONDS_PER_DAY;
        hour = secs / SECONDS_PER_HOUR;
        secs = secs % SECONDS_PER_HOUR;
        minute = secs / SECONDS_PER_MINUTE;
        second = secs % SECONDS_PER_MINUTE;
        // AG Returns 0: uint256 year, 1: uint256 month, 2: uint256 day, 3: uint256 hour, 4: uint256 minute, 5: uint256 second

    }
    // AG Ok
    function isLeapYear(uint timestamp) internal pure returns (bool leapYear) {
        uint year;
        uint month;
        uint day;
        // AG Ok
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
        // AG Ok
        leapYear = _isLeapYear(year);
    }
    // AG Ok
    function _isLeapYear(uint year) internal pure returns (bool leapYear) {
        leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0); // AG Ok - Note that an OR condition could be placed first to hypothetically save some gas
    }
    // AG Ok
    function isWeekDay(uint timestamp) internal pure returns (bool weekDay) {
        // AG Ok
        weekDay = getDayOfWeek(timestamp) <= DOW_FRI;
    }
    // AG Ok
    function isWeekEnd(uint timestamp) internal pure returns (bool weekEnd) {
        // AG Ok
        weekEnd = getDayOfWeek(timestamp) >= DOW_SAT;
    }
    // AG Ok - Defaults to 31 when passed no value
    function getDaysInMonth(uint timestamp) internal pure returns (uint daysInMonth) {
        uint year;
        uint month;
        uint day;
        // AG Ok
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
        // AG Ok
        daysInMonth = _getDaysInMonth(year, month);
    }
    // AG Ok
    function _getDaysInMonth(uint year, uint month) internal pure returns (uint daysInMonth) {
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            daysInMonth = 31;
        } else if (month != 2) {
            daysInMonth = 30;
        } else {
            // AG Ok
            daysInMonth = _isLeapYear(year) ? 29 : 28;
        }
    }
    // 1 = Monday, 7 = Sunday
    // AG Ok
    function getDayOfWeek(uint timestamp) internal pure returns (uint dayOfWeek) {
        uint _days = timestamp / SECONDS_PER_DAY;
        dayOfWeek = (_days + 3) % 7 + 1;  // AG Ok - Could be (_days + 4) % 7 to save an operation
    }
    // AG Ok
    function getYear(uint timestamp) internal pure returns (uint year) {
        uint month;
        uint day;
        // AG Ok
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
    }
    // AG Ok
    function getMonth(uint timestamp) internal pure returns (uint month) {
        uint year;
        uint day;
        // AG Ok
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
    }
    // AG Ok
    function getDay(uint timestamp) internal pure returns (uint day) {
        uint year;
        uint month;
        // AG Ok
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
    }
    // AG Ok
    function getHour(uint timestamp) internal pure returns (uint hour) {
        uint secs = timestamp % SECONDS_PER_DAY;
        // AG Ok - Could be rolled into one line
        hour = secs / SECONDS_PER_HOUR;
    }
    // AG Ok
    function getMinute(uint timestamp) internal pure returns (uint minute) {
        uint secs = timestamp % SECONDS_PER_HOUR;
        // AG Ok
        minute = secs / SECONDS_PER_MINUTE;
    }
    // AG Ok
    function getSecond(uint timestamp) internal pure returns (uint second) {
        // AG OK
        second = timestamp % SECONDS_PER_MINUTE;
    }
    // AG Ok
    function addYears(uint timestamp, uint _years) internal pure returns (uint newTimestamp) {
        uint year;
        uint month;
        uint day;
        // AG Ok
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
        // AG Ok
        year += _years;
        // AG Ok
        uint daysInMonth = _getDaysInMonth(year, month);
        // AG Ok
        if (day > daysInMonth) {
            // AG Ok
            day = daysInMonth;
        }
        // AG Ok
        newTimestamp = _daysFromDate(year, month, day) * SECONDS_PER_DAY + timestamp % SECONDS_PER_DAY;
        // AG Ok
        require(newTimestamp >= timestamp);
    }
    // AG Ok
    function addMonths(uint timestamp, uint _months) internal pure returns (uint newTimestamp) {
        uint year;
        uint month;
        uint day;
        // AG Ok
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
        // AG Ok
        month += _months;
        // AG Ok - Gets the additional years over
        year += (month - 1) / 12;
        // AG Ok - Gets the current month
        month = (month - 1) % 12 + 1;
        // AG Ok
        uint daysInMonth = _getDaysInMonth(year, month);
        // AG Ok - Corrected for less days in the month
        if (day > daysInMonth) {
            day = daysInMonth;
        }
        // AG Ok
        newTimestamp = _daysFromDate(year, month, day) * SECONDS_PER_DAY + timestamp % SECONDS_PER_DAY;
        // AG Ok
        require(newTimestamp >= timestamp);
    }
    // AG Ok
    function addDays(uint timestamp, uint _days) internal pure returns (uint newTimestamp) {
        newTimestamp = timestamp + _days * SECONDS_PER_DAY;
        // AG Ok
        require(newTimestamp >= timestamp);
    }
    // AG Ok
    function addHours(uint timestamp, uint _hours) internal pure returns (uint newTimestamp) {
        newTimestamp = timestamp + _hours * SECONDS_PER_HOUR;
        // AG Ok
        require(newTimestamp >= timestamp);
    }
    // AG Ok
    function addMinutes(uint timestamp, uint _minutes) internal pure returns (uint newTimestamp) {
        newTimestamp = timestamp + _minutes * SECONDS_PER_MINUTE;
        // AG Ok
        require(newTimestamp >= timestamp);
    }
    // AG Ok
    function addSeconds(uint timestamp, uint _seconds) internal pure returns (uint newTimestamp) {
        newTimestamp = timestamp + _seconds;
        // AG Ok
        require(newTimestamp >= timestamp);
    }
    // AG Ok
    function subYears(uint timestamp, uint _years) internal pure returns (uint newTimestamp) {
        uint year;
        uint month;
        uint day;
        // AG Ok
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
        // AG Ok - Could have underflow with high number of years
        // AG Note - require(year-_years>1970);
        year -= _years;
        // AG Ok
        uint daysInMonth = _getDaysInMonth(year, month);
        // AG Ok
        if (day > daysInMonth) {
            // AG Ok
            day = daysInMonth;
        }
        // AG Ok
        newTimestamp = _daysFromDate(year, month, day) * SECONDS_PER_DAY + timestamp % SECONDS_PER_DAY;
        // AG Ok
        require(newTimestamp <= timestamp);
    }
    function subMonths(uint timestamp, uint _months) internal pure returns (uint newTimestamp) {
        uint year;
        uint month;
        uint day;
        // AG Ok
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
        // AG Ok - Similar issue to above - underflow for high number of months
        uint yearMonth = year * 12 + (month - 1) - _months;
        // AG Ok
        year = yearMonth / 12;
        // AG Ok
        month = yearMonth % 12 + 1;
        // AG Ok
        uint daysInMonth = _getDaysInMonth(year, month);
        if (day > daysInMonth) {
            // AG Ok
            day = daysInMonth;
        }
        // AG Ok
        newTimestamp = _daysFromDate(year, month, day) * SECONDS_PER_DAY + timestamp % SECONDS_PER_DAY;
        // AG Ok
        require(newTimestamp <= timestamp);
    }
    // AG Ok
    function subDays(uint timestamp, uint _days) internal pure returns (uint newTimestamp) {
        newTimestamp = timestamp - _days * SECONDS_PER_DAY;
        // AG Ok
        require(newTimestamp <= timestamp);
    }
    // AG Ok
    function subHours(uint timestamp, uint _hours) internal pure returns (uint newTimestamp) {
        newTimestamp = timestamp - _hours * SECONDS_PER_HOUR;
        // AG Ok
        require(newTimestamp <= timestamp);
    }
    // AG Ok
    function subMinutes(uint timestamp, uint _minutes) internal pure returns (uint newTimestamp) {
        newTimestamp = timestamp - _minutes * SECONDS_PER_MINUTE;
        // AG Ok
        require(newTimestamp <= timestamp);
    }
    // AG Ok
    function subSeconds(uint timestamp, uint _seconds) internal pure returns (uint newTimestamp) {
        newTimestamp = timestamp - _seconds;
        // AG Ok
        require(newTimestamp <= timestamp);
    }
    // AG Ok
    function diffYears(uint fromTimestamp, uint toTimestamp) internal pure returns (uint _years) {
        require(fromTimestamp <= toTimestamp);
        // AG Ok
        uint fromYear;
        uint fromMonth;
        uint fromDay;
        uint toYear;
        uint toMonth;
        uint toDay;
        // AG Ok
        (fromYear, fromMonth, fromDay) = _daysToDate(fromTimestamp / SECONDS_PER_DAY);
        // AG Ok
        (toYear, toMonth, toDay) = _daysToDate(toTimestamp / SECONDS_PER_DAY);
        // AG Ok - Provided year range is within testing range
        _years = toYear - fromYear;
    }
    // AG Ok
    function diffMonths(uint fromTimestamp, uint toTimestamp) internal pure returns (uint _months) {
        require(fromTimestamp <= toTimestamp);
        // AG Ok
        uint fromYear;
        uint fromMonth;
        uint fromDay;
        uint toYear;
        uint toMonth;
        uint toDay;
        //AG Ok
        (fromYear, fromMonth, fromDay) = _daysToDate(fromTimestamp / SECONDS_PER_DAY);
        (toYear, toMonth, toDay) = _daysToDate(toTimestamp / SECONDS_PER_DAY);
        // AG Ok
        _months = toYear * 12 + toMonth - fromYear * 12 - fromMonth;
    }
    // AG Ok
    function diffDays(uint fromTimestamp, uint toTimestamp) internal pure returns (uint _days) {
        // AG Ok
        require(fromTimestamp <= toTimestamp);
        // AG Ok
        _days = (toTimestamp - fromTimestamp) / SECONDS_PER_DAY;
    }
    // AG Ok
    function diffHours(uint fromTimestamp, uint toTimestamp) internal pure returns (uint _hours) {
        // AG Ok
        require(fromTimestamp <= toTimestamp);
        // AG Ok
        _hours = (toTimestamp - fromTimestamp) / SECONDS_PER_HOUR;
    }
    // AG Ok
    function diffMinutes(uint fromTimestamp, uint toTimestamp) internal pure returns (uint _minutes) {  
        // AG Ok
        require(fromTimestamp <= toTimestamp);
        // AG Ok  
        _minutes = (toTimestamp - fromTimestamp) / SECONDS_PER_MINUTE;
    }
    // AG Ok
    function diffSeconds(uint fromTimestamp, uint toTimestamp) internal pure returns (uint _seconds) {
        // AG Ok
        require(fromTimestamp <= toTimestamp);
        // AG Ok
        _seconds = toTimestamp - fromTimestamp;
    }
}

```
