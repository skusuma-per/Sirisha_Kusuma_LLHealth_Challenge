"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//import * as data from "../testdata/data.json";
var log4jsconfig_1 = require("../config/log4jsconfig");
var data = require("C:/Users/Jeremy Brua/Desktop/Sirisha_Kusuma_LLHealth_Challenge/testdata/data.json");
/*
********************Test Description**************************
This test will
1. Launch URL.
2. Loop through the webtable to find username = novak
3. Delete the user. Click on the confirmation
4. Validate user is deleted.
*/
describe("deleteusertest", function () {
    //Launch the URL
    var _this = this;
    beforeEach(function () {
        var url = data.siteUrl;
        protractor_1.browser.get(url);
        protractor_1.browser.manage().window().maximize().then(function (text) {
            console.log("logged and maximised the window");
            log4jsconfig_1.log4jsconfig.Log().debug();
        });
    });
    it("deleteuser", function () { return __awaiter(_this, void 0, void 0, function () {
        var table, rows, count, x, td1, col1, txt1, del, ok;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    table = protractor_1.element(protractor_1.by.css(".table.table-striped tbody"));
                    rows = table.$$("tr");
                    return [4 /*yield*/, rows.count()];
                case 1:
                    count = _a.sent();
                    console.log("no.of users " + count);
                    x = 0;
                    _a.label = 2;
                case 2:
                    if (!(x < count)) return [3 /*break*/, 6];
                    td1 = rows.get(x).$$("td");
                    col1 = td1.get(2);
                    return [4 /*yield*/, col1.getText()];
                case 3:
                    txt1 = (_a.sent());
                    if (!(txt1 == "novak")) return [3 /*break*/, 5];
                    del = td1.last().element(protractor_1.by.css('[ng-click="delUser()"]'));
                    return [4 /*yield*/, del.click()];
                case 4:
                    _a.sent();
                    protractor_1.browser.sleep(3000);
                    _a.label = 5;
                case 5:
                    x++;
                    return [3 /*break*/, 2];
                case 6:
                    ok = protractor_1.element(protractor_1.by.buttonText("OK"));
                    ok.click();
                    protractor_1.browser.sleep(3000);
                    console.log("user deleted succesfully");
                    protractor_1.browser.sleep(3000);
                    return [2 /*return*/];
            }
        });
    }); });
});
