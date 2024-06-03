const spreadsheetID = "YOUR SPREADSHEETID"

function logTrip(name, date, tripFrom, tripTo) {
  var ss = SpreadsheetApp.openById(spreadsheetID)
  var sheet = ss.getSheetByName(name)

  if (tripFrom == tripTo) {
    Logger.log("Error: departure cannot be the same as destination")
    return
  }

  sheet.appendRow([date, tripFrom, tripTo])

  var incrementCell

  switch (tripFrom) {
    case "Gillette":
      if (tripTo == "Millington") {
        incrementCell = "G2"
      }
      else if (tripTo == "Central") {
        incrementCell = "F2"
      }
      break

    case "Central":
      if (tripTo == "Millington") {
        incrementCell = "H2"
      }
      else if (tripTo == "Gillette") {
        incrementCell = "F2"
      }
      break

    case "Millington":
      if (tripTo == "Gillette") {
        incrementCell = "G2"
      }
      else if (tripTo == "Central") {
        incrementCell = "H2"
      }
      break

    default:
      Logger.log("Invalid")
      return
  }

  sheet.getRange(incrementCell).setValue(sheet.getRange(incrementCell).getValue() + 1)

  Logger.log("Trip successfully logged. Please wait at least 5 seconds before submitting another trip.")
  Utilities.sleep(5000)
}

function doGet() {
  var user = Session.getActiveUser().getEmail()
  if(user == 'USER1 EMAIL'){
    return HtmlService.createHtmlOutputFromFile('USER1');
  }
  else if(user == 'USER2 EMAIL'){
    return HtmlService.createHtmlOutputFromFile('USER2');
  }
  else{
    return HtmlService.createHtmlOutput('Access not recognized or authorized.');
  }
}