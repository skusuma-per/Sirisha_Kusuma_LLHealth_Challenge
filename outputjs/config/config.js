"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: "jasmine",
    "capabilities": {
        browserName: 'chrome'
    },
    specs: ['../specs/*.js'],
    seleniumAddress: 'http://10.0.0.231:4444/wd/hub',
};
