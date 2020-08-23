// LOGIN TEST
module.exports = (browser, data) => {
    browser
        .click('@loginButton')
        .click('@email')
        .setValue('@email', 'bribriwoo@outlook.com')
        .click('@password')
        .setValue('@password', 'devtest2020!')
        .click('@loginButton2')
        .pause(1000)
}