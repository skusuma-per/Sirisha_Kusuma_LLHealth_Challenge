import {browser , Config } from "protractor"

export let config : Config = {

    framework : "jasmine",
    "capabilities" : {
        browserName : 'chrome'
    },

    specs : ['../specs/*.js'],
    seleniumAddress : 'http://10.0.0.231:4444/wd/hub',


    
}