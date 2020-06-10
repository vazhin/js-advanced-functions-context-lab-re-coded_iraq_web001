/* Your Code Here */

let createEmployeeRecord = (arr) => {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}
<<<<<<< HEAD

let createEmployeeRecords = (arrOfArrays) => {
  return arrOfArrays.map(arr => createEmployeeRecord(arr))
}

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeInEvents.push({
    type: "TimeIn",
    hour: Number(hour),
    date: date
  })
  return this
}

function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: Number(hour),
    date: date
  })
  return this
}

function hoursWorkedOnDate (date) {
  let timeInHour = this.timeInEvents.find(obj => obj.date === date).hour
  let timeOutHour = this.timeOutEvents.find(obj => obj.date === date).hour
  return (timeOutHour - timeInHour) / 100
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(arrOfRecords, firstName) {
  return arrOfRecords.find(obj => obj.firstName === firstName)
}

function calculatePayroll(arrOfRecords) {
  return arrOfRecords.reduce((sum, obj) => {
    return sum += allWagesFor.call(obj)
  }, 0)
}
=======
>>>>>>> c013f526d34d08d14eefc5a6c1a13c166ec80923
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
