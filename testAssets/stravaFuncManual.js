// MANUAL ENTRY TEST
module.exports = (browser, data) => {
    browser
        .moveToElement('@manualEntryLink', 24, 24)
        .click('@manualEntry')
        .setValue('@enterDistance', data.distance)
        .clearValue('@setDurationHour')
        .clearValue('@setDurationMinute')
        .setValue('@setDurationMinute', data.minutes)
        .click('@selectSport')
        .click('@selectInlineSkate')
        .click('@selectCalendar')
        .click('@selectDate')
        .click('@selectTime')
        .clearValue('@selectTime')
        .setValue('@selectTime', data.time)
        // [data.time, browser.Keys.ENTER])
        .clearValue('@selectTitle')
        .setValue('@selectTitle', data.title)
        .setValue('@selectDescription', data.description)
        .click('@createButton')
        .pause(500)

}