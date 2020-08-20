//SEARCH FOR A CLUB
module.exports = (browser, data) => {
    browser
        .click('@searchButton')
        .pause(500)
        .setValue('@searchField', 'SETX')
        .click('@searchDropdown')
        .pause(500)
        .waitForElementVisible('@clubsButton')
        .click('@clubsButton')
        .pause(500)
        .click('@searchButton')
        .pause(5000)
}