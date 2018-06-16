/*
How to set up and use this script:
1. Create a new Google Sheets
2. Set cell B1 to 2
3. Tools > Script Editor
4. Copy this script into the editor
5. Add your heroku app name to YOUR_APP_NAME.
6. Add your spreadsheet ID to YOUR_SPREADSHEET_ID
  - Look at the spreadsheet url. If your url is like this: https://docs.google.com/spreadsheets/d/abc1234/, then the ID is abc1234.
7. Edit > Current project's triggers
8. Add your triggers for each function (time based events).
9. Save and run each function to make sure they all work. If there's a 401 error, ignore it, it still pinged your app, which keeps it from sleeping.
*/

function pingApp() {
  // Pings app url, replace with your app's url under YOUR_APP_NAME. Recommended trigger: every 15 minutes
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var currentDate = d.toLocaleDateString();
  var counter = SpreadsheetApp.getActiveSheet().getRange('B1').getValues(); // Make sure to set cell B1 to 2 before running this function!
 
  if (hours >= 9 || hours < 2) { // Keeps pinging app from 9 am to 2 am by default, change this if statement to suit your needs. You may need to change the operators.
    SpreadsheetApp.getActiveSheet().getRange('A' + counter).setValue('Visited at ' + currentDate + " " + hours + ":" + minutes);
    SpreadsheetApp.getActiveSheet().getRange('B1').setValue(Number(counter) + 1);
    var response = UrlFetchApp.fetch("https://YOUR_APP_NAME.herokuapp.com/"); // If this function results in a 401 error, ignore it, that means it worked!
  }
}

function autoclean() {
  // Cleans the spreadsheet, trigger as often as you like
  var ss = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID')
  var sheet = ss.getSheets()[0];
  var start = 2
  var end = ss.getLastRow();
  sheet.deleteRows(start, end - 1);
  ss.getRange('B1').setValue('2');
}
