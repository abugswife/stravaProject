// SEARCH FOR AN ATHLETE
module.exports = (browser, data) => {
    browser
        .click('@searchButton')
        .pause(500)
        .setValue('@searchField', 'Usain Bolt')
        .click('@searchDropdown')
        .pause(500)
        .waitForElementVisible('@athleteButton')
        .click('@athleteButton')
        .pause(500)
        .click('@searchButton')
        .pause(5000)
}