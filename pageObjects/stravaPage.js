//PAGE OBJECTS

module.exports = {
    url: ('https://www.strava.com/'),
    elements: {

        //cSS Selectors
        loginButton: 'a[class="btn btn-default btn-login"]',
        email: '#email',
        password: '#password',
        loginButton2: '#login-button',
        enterDistance: '#activity_distance',
        setDurationHour: '#activity_elapsed_time_hours',
        setDurationMinute: '#activity_elapsed_time_minutes',
        setDurationSeconds: '#activity_elapsed_time_seconds',
        selectSport: '#activity-type-dd',
        selectCalendar: '#activity_start_date',
        selectTime: '#activity_start_time_of_day',
        selectTitle: '#activity_name',
        selectDescription: '#activity_description',
        createButton: 'input[class="btn-primary"]',
        searchField: '#global-search-field',
        searchButton: '#global-search-button',

        //xPath Selectors
        locationName: {
            selector: '//*[@id="contents"]/div[4]/div/div[2]/div[1]',
            locateStrategy: 'xpath'
        },
        athleteName: {
            selector: '//*[@id="athlete-profile"]/div[1]/a/h2/div',
            locateStrategy: 'xpath'
        },
        exertion2: {
            selector: '//*[@id="new_activity"]/div[5]/div[2]/div/div/div[2]/div[1]/div[2]/div[4]/div',
            locateStrategy: 'xpath'
        },
        activityLink: {
            selector: '//*[@id="athlete-profile"]/div[1]/ul/li[3]/a/b',
            locateStrategy: 'xpath'
        },
        deleteLink: {
            selector: '//*[@id="search-results"]/tbody/tr[1]/td[8]/ul/li[2]/button',
            locateStrategy: 'xpath'
        },
        searchDropdown: {
            selector: '//*[@id="global-search-filter"]/button',
            locateStrategy: 'xpath'
        },
        clubsButton: {
            selector: '//*[@id="global-search-filter"]/ul/li[3]/div',
            locateStrategy: 'xpath'
        },
        athleteButton: {
            selector: '//*[@id="global-search-filter"]/ul/li[2]/div',
            locateStrategy: 'xpath'
        },
        searchCatButton: {
            selector: '//*[@id="global-search-filter"]/button/span[2]/span',
            locateStrategy: 'xpath'
        },
        selectInlineSkate: {
            selector: '//*[@id="activity-type-dd"]/ul/li[14]',
            locateStrategy: 'xpath'
        },
        enterTime: {
            selector: '/html/body/div[6]/ul/li[36]',
            locateStrategy: 'xpath'
        },
        selectDate: {
            selector: '//*[@id="ui-datepicker-div"]/table/tbody/tr[4]/td[4]/a',
            locateStrategy: 'xpath'
        },
        manualEntryLink: {
            selector: '//*[@id="container-nav"]/ul[2]/li[4]/a/div/div',
            locateStrategy: 'xpath'
        },
        profileNavLink: {
            selector: '//*[@id="container-nav"]/ul[2]/li[3]/a',
            locateStrategy: 'xpath'
        },
        settingsButton: {
            selector: '//*[@id="container-nav"]/ul[2]/li[3]/ul/li[3]/a',
            locateStrategy: 'xpath'
        },
        uploadButton: {
            selector: '////*[@id="container-nav"]/ul[2]/li[4]/a/div/div/span',
            locateStrategy: 'xpath'
        },
        manualEntry: {
            selector: '//*[@id="container-nav"]/ul[2]/li[4]/ul/li[2]/a/span',
            locateStrategy: 'xpath'
        },
        createPost: {
            selector: '//*[@id="container-nav"]/ul[2]/li[4]/ul/li[4]/a',
            locateStrategy: 'xpath'
        },
        postTitle: {
            selector: '//*[@id="edit-form-js"]/div[2]/textarea[1]',
            locateStrategy: 'xpath'
        },
        postContent: {
            selector: '//*[@id="edit-form-js"]/div[2]/textarea[2]',
            locateStrategy: 'xpath'
        },
        publishButton: {
            selector: '//*[@id="edit-form-js"]/div[1]/div[1]/button',
            locateStrategy: 'xpath'
        },
        followingLink: {
            selector: '//*[@id="athlete-profile"]/div[1]/ul/li[1]/a/b',
            locateStrategy: 'xpath'
        },
        followerLink: {
            selector: '//*[@id="athlete-profile"]/div[1]/ul/li[2]/a/b',
            locateStrategy: 'xpath'
        },
        activitiesLink: {
            selector: '//*[@id="athlete-profile"]/div[1]/ul/li[3]/a/b',
            locateStrategy: 'xpath'
        },
        exploreAthlete: {
            selector: '//*[@id="container-nav"]/ul[1]/li[3]/ul/li[3]/a',
            locateStrategy: 'xpath'
        },
        athleteSearchField: {
            selector: '//*[@id="text"]',
            locateStrategy: 'xpath'
        },
        athleteSearchButton: {
            selector: '//*[@id="athlete-search"]/div/input[2]',
            locateStrategy: 'xpath'
        },
        exploreClubs: {
            selector: '//*[@id="container-nav"]/ul[1]/li[3]/ul/li[4]/a',
            locateStrategy: 'xpath'
        },
        clubSearchField: {
            selector: '//*[@id="text"]',
            locateStrategy: 'xpath'
        },
        locationSearchField: {
            selector: '//*[@id="location"]',
            locateStrategy: 'xpath'
        },
        allRadioButton: {
            selector: '/html/body/div[1]/div[3]/div/form/div/span[1]/ul/li[1]/label',
            locateStrategy: 'xpath'
        },
        editGender: {
            selector: '//*[@id="contents"]/div[3]/div/div[2]/div/div',
            locateStrategy: 'xpath'
        },
        genderRadioButton: {
            selector: '//*[@id="edit_gender_form"]/div[2]/ul/li[2]/label/input',
            locateStrategy: 'xpath'
        },
        genderSaveButton: {
            selector: '//*[@id="submit-button"]',
            locateStrategy: 'xpath'
        },
        editLocation: {
            selector: '//*[@id="contents"]/div[4]/div/div[2]/div[1]/div/div',
            locateStrategy: 'xpath'
        },
        enterLocation: {
            selector: '//*[@id="location-js"]',
            locateStrategy: 'xpath'
        },
        locationSaveButton: {
            selector: '//*[@id="submit-button"]',
            locateStrategy: 'xpath'
        },
        editPrimaryClub: {
            selector: '//*[@id="contents"]/div[5]/div/div[2]/div/div',
            locateStrategy: 'xpath'
        },
        selectPrimaryClub: {
            selector: '//*[@id="primary-club-js"]',
            locateStrategy: 'xpath'
        },
        selectSETXVELO: {
            selector: '//*[@id="primary-club-js"]/option[2]',
            locateStrategy: 'xpath'
        },
        primaryClubSaveButton: {
            selector: '//*[@id="submit-button"]',
            locateStrategy: 'xpath'
        },
        editWeight: {
            selector: '//*[@id="contents"]/div[6]/div/div[2]/div/div',
            locateStrategy: 'xpath'
        },
        enterWeight: {
            selector: '//*[@id="edit_weight_form"]/div[2]/div[1]/input',
            locateStrategy: 'xpath'
        },
        weightSaveButton: {
            selector: '//*[@id="submit-button"]',
            locateStrategy: 'xpath'
        },
        editVanityUrl: {
            selector: '//*[@id="contents"]/div[7]/div/div[2]/div',
            locateStrategy: 'xpath'
        },
        enterVanityUrl: {
            selector: '//*[@id="username"]',
            locateStrategy: 'xpath'
        },
        vanityUrlSaveButton: {
            selector: '//*[@id="submit-button"]',
            locateStrategy: 'xpath'
        },
        editBio: {
            selector: '//*[@id="contents"]/div[8]/div/div[2]/div[2]/div',
            locateStrategy: 'xpath'
        },
        enterBio: {
            selector: '//*[@id="edit_name_form"]/div[2]/textarea',
            locateStrategy: 'xpath'
        },
        bioSaveButton: {
            selector: '//*[@id="submit-button"]',
            locateStrategy: 'xpath'
        }
    }
}