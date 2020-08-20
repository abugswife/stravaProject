var strava = {}
var login = require('../testAssets/stravaFuncLogin')
var manual = require('../testAssets/stravaFuncManual')
var fillField = require('../testAssets/stravaAssets')
var edits = require('../testAssets/stravaFuncEdits')
var post = require('../testAssets/stravaFuncPost')
var athlete = require('../testAssets/stravaFuncAthlete')
var club = require('../testAssets/stravaFuncClub')
var deleteActivity = require('../testAssets/stravaFuncDelete')

module.exports = {
  beforeEach: browser => {
    strava = browser.page.stravaPage()
    strava.navigate()
  },

  after: browser => {
    browser.end()
  },

  'Login Test': browser => {
    strava
    login(strava, test)
  },
  'Retain Profile Edits': browser => {
    strava
    edits(strava, test)
  },
  'Manual Entry': browser => {
    strava
    fillField.forEach(test => {
      manual(strava, test)
    })
  },

  'Create Post': browser => {
    strava
    post(strava, test)
  },

  'Search for an Athlete': browser => {
    strava
    athlete(strava, test)
  },

  'Search for Local Club': browser => {
    strava
    club(strava, test)
  },

  'Delete Activity from Feed': browser => {
    strava
    deleteActivity(strava, test)
  }
}