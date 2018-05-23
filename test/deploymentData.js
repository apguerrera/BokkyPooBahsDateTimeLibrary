var dateTimeLibAddress="0x0779c66d49a48e162bc0c7244b3baef8a2eba1ef";
var dateTimeLibAbi=[{"constant":true,"inputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"}],"name":"timestampFromDate","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"},{"name":"hour","type":"uint256"},{"name":"minute","type":"uint256"},{"name":"second","type":"uint256"}],"name":"timestampFromDateTime","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffMonths","outputs":[{"name":"_months","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"OFFSET19700101","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffDays","outputs":[{"name":"_days","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"timestampToDate","outputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"timestampToDateTime","outputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"},{"name":"hour","type":"uint256"},{"name":"minute","type":"uint256"},{"name":"second","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffYears","outputs":[{"name":"_years","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"}];
var dateTimeLib=eth.contract(dateTimeLibAbi).at(dateTimeLibAddress);
var testDateTimeAddress="0x1b8b7961968285d8e0bc6580e101b495b5ad166f";
var testDateTimeAbi=[{"constant":true,"inputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"}],"name":"timestampFromDate","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"},{"name":"hour","type":"uint256"},{"name":"minute","type":"uint256"},{"name":"second","type":"uint256"}],"name":"timestampFromDateTime","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffMonths","outputs":[{"name":"_months","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffDays","outputs":[{"name":"_days","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"timestampToDate","outputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"timestampToDateTime","outputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"},{"name":"hour","type":"uint256"},{"name":"minute","type":"uint256"},{"name":"second","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffYears","outputs":[{"name":"_years","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"}];
var testDateTime=eth.contract(testDateTimeAbi).at(testDateTimeAddress);
console.log("testDateTime=" + JSON.stringify(testDateTime));