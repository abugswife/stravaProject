//DELETE ACTIVITY
module.exports = (browser, data) => {
    browser
        .click('@activityLink')
        .click('@deleteLink')
        .pause(1000)
        .api.acceptAlert()
        .pause(10000)
}
