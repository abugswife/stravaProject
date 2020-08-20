// LOGIN TEST
module.exports = (browser, data) => {
    browser
        .click('@loginButton')
        .click('@email')
        .setValue('@email', 'davisdbrianna@gmail.com')
        .click('@password')
        .setValue('@password', 'bdenisem0')
        .click('@loginButton2')
        .pause(1000)
}