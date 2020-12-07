import {browser, element,by} from "protractor";
//import * as data from "../testdata/data.json";
import {log4jsconfig} from '../config/log4jsconfig';
let data = require("C:/Users/Jeremy Brua/Desktop/Sirisha_Kusuma_LLHealth_Challenge/testdata/data.json");

/*
********************Test Description**************************
This test will 
1. Launch URL.
2. Click Add User button. Validate "Save" button is inactive.(required fields check)
3. Fill Add User form and Save user.
4. Print list of all users to the console.
5. Validate new user is added.
*/

describe("addusertest" , function(){

    //Launch the URL

beforeEach(function(){

    let url = (<any>data).siteUrl;
    browser.get(url);
    browser.manage().window().maximize().then(function(s){

        console.log("logged and maximised the window");
    })
   
})

//Add an user

    it("adduser", async() =>{

    let fname = element(by.name("FirstName"));    
    let lname = element(by.name("LastName")); 
    let uname = element(by.name("UserName"));
    let pswd = element(by.name("Password"));
    let cust = element(by.name("optionsRadios"));
    let rId = element.all(by.tagName('option'))
    let emil = element(by.name("Email"));
    let mphone = element(by.name("Mobilephone"));

    element(by.css('[ng-click="pop()"]')).click();

    fname.sendKeys((<any>data).userdata.firstname);
    lname.sendKeys((<any>data).userdata.lastname);
    uname.sendKeys((<any>data).userdata.username);
    pswd.sendKeys((<any>data).userdata.password);
    cust.click();    
    rId.click();
    emil.sendKeys((<any>data).userdata.email); 
    mphone.sendKeys((<any>data).userdata.mobilephone);
    await browser.sleep(6000)
    
    let sbutton = element(by.buttonText("Save")).click();

  let table = element(by.css(".table.table-striped tbody"));
  let rows = table.$$("tr")
  let count= await rows.count();
  console.log("no.of users "+count);
  expect(count).toBe(8);


for(let i=0 ; i<count ; i++)
{
  let td = rows.get(i).$$("td");
  let col = td.get(2);
  let txt = (await col.getText());
  console.log(await td.getText());
  console.log(await col.getText());

  if (txt == "bbAdmin")
  {
    console.log("UserName match : UserName " + txt +" added succesfully");
  }
}
    })

})