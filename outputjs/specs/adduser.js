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
var data = require("C:/Users/Jeremy Brua/Desktop/Sirisha_Kusuma_LLHealth_Challenge/testdata/data.json");
/*
********************Test Description**************************
This test will
1. Launch URL.
2. Click Add User button. Validate "Save" button is inactive.(required fields check)
3. Fill Add User form and Save user.
4. Print list of all users to the console.
5. Validate new user is added.
*/
describe("addusertest", function () {
    //Launch the URL
    var _this = this;
    beforeEach(function () {
        var url = data.siteUrl;
        protractor_1.browser.get(url);
        protractor_1.browser.manage().window().maximize().then(function (s) {
            console.log("logged and maximised the window");
        });
    });
    //Add an user
    it("adduser", function () { return __awaiter(_this, void 0, void 0, function () {
        var fname, lname, uname, pswd, cust, rId, emil, mphone, sbutton, table, rows, count, i, td, col, txt, _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    fname = protractor_1.element(protractor_1.by.name("FirstName"));
                    lname = protractor_1.element(protractor_1.by.name("LastName"));
                    uname = protractor_1.element(protractor_1.by.name("UserName"));
                    pswd = protractor_1.element(protractor_1.by.name("Password"));
                    cust = protractor_1.element(protractor_1.by.name("optionsRadios"));
                    rId = protractor_1.element.all(protractor_1.by.tagName('option'));
                    emil = protractor_1.element(protractor_1.by.name("Email"));
                    mphone = protractor_1.element(protractor_1.by.name("Mobilephone"));
                    protractor_1.element(protractor_1.by.css('[ng-click="pop()"]')).click();
                    fname.sendKeys(data.userdata.firstname);
                    lname.sendKeys(data.userdata.lastname);
                    uname.sendKeys(data.userdata.username);
                    pswd.sendKeys(data.userdata.password);
                    cust.click();
                    rId.click();
                    emil.sendKeys(data.userdata.email);
                    mphone.sendKeys(data.userdata.mobilephone);
                    return [4 /*yield*/, protractor_1.browser.sleep(6000)];
                case 1:
                    _e.sent();
                    sbutton = protractor_1.element(protractor_1.by.buttonText("Save")).click();
                    table = protractor_1.element(protractor_1.by.css(".table.table-striped tbody"));
                    rows = table.$$("tr");
                    return [4 /*yield*/, rows.count()];
                case 2:
                    count = _e.sent();
                    console.log("no.of users " + count);
                    expect(count).toBe(8);
                    i = 0;
                    _e.label = 3;
                case 3:
                    if (!(i < count)) return [3 /*break*/, 8];
                    td = rows.get(i).$$("td");
                    col = td.get(2);
                    return [4 /*yield*/, col.getText()];
                case 4:
                    txt = (_e.sent());
                    _b = (_a = console).log;
                    return [4 /*yield*/, td.getText()];
                case 5:
                    _b.apply(_a, [_e.sent()]);
                    _d = (_c = console).log;
                    return [4 /*yield*/, col.getText()];
                case 6:
                    _d.apply(_c, [_e.sent()]);
                    if (txt == "bbAdmin") {
                        console.log("UserName match : UserName " + txt + " added succesfully");
                    }
                    _e.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 3];
                case 8: return [2 /*return*/];
            }
        });
    }); });
});
