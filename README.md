# Sirisha_Kusuma_LLHealth_Challenge
Protractor+Typescript+Jasmine framework


## Running the test locally
1. Clone the project
2. Open the project in visual studio. 
3. Press ctrl+` to open the terminal .Make sure that the directory points to the current project folder.
4. Type npm install (This will create node_modules folder under the project folder with dependencies mentioned in the package.json file). Press the Enter key
5. Type node_modules/.bin/webdriver-manager update. Press enter
6. Type node_modules/.bin/webdriver-manager start. Do not close the terminal.(This will activate selenium server on port 4444)
7. Open an other instance of the terminal by clicking on + sign.
8. Type npm test (This will invoke chrome browser and run the adduser and deleteuser tests
