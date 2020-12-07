import {browser, element,by} from "protractor";
//import * as data from "../testdata/data.json";
import {log4jsconfig} from '../config/log4jsconfig';
let data = require("C:/Users/Jeremy Brua/Desktop/Sirisha_Kusuma_LLHealth_Challenge/testdata/data.json");


/*
********************Test Description**************************
This test will 
1. Launch URL.
2. Loop through the webtable to find username = novak
3. Delete the user. Click on the confirmation
4. Validate user is deleted.
*/

describe("deleteusertest" , function(){

    //Launch the URL

beforeEach(function(){

    let url = (<any>data).siteUrl;
    browser.get(url);
    browser.manage().window().maximize().then(function(text){

        console.log("logged and maximised the window");
        log4jsconfig.Log().debug();
        
    })
   
})

it("deleteuser", async() =>{

    let table = element(by.css(".table.table-striped tbody"));
    let rows = table.$$("tr")
    let count= await rows.count();
    console.log("no.of users "+count);
   

    for(let x=0 ; x<count ; x++)
    {
      let td1 = rows.get(x).$$("td");
      let col1 = td1.get(2);
       let txt1 = (await col1.getText());
      if (txt1 == "novak")
      {
       let del = td1.last().element(by.css('[ng-click="delUser()"]'));
       await del.click();
       browser.sleep(3000);
      }
    }
       
    let ok = element(by.buttonText("OK"));
    ok.click();
    browser.sleep(3000);
    console.log("user deleted succesfully");
    browser.sleep(3000);
            
        })
    


})
