//CREATE A POST
module.exports = (browser, data) => {
    browser
        .moveToElement('@manualEntryLink', 24, 24)
        .click('@createPost')
        .setValue('@postTitle', 'Test Post 3')
        .setValue('@postContent', "Hi guys! This is test post. Why not test on of my favorite apps for an automation test?")
        .click('@publishButton')
        .pause(5000)
}