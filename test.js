(20)[empty, "StringID", "Category", "SourceText", "PreviousSourceText", "SourceWordCount", "Platform", "LocText_PL", "PreviousLocText_PL", "LocWordCount_PL", "ProductionStatus_PL", "TranslationStatus_PL", "ReviewStatus_PL", "Batch_PL", "PreviousBatch_PL", "PreviousLTReview_PL", "ChangeReason_PL", "LastModifiedBy_PL", "LastModificationDate_PL", "Reason_PL"]

halFields: [`ArabicCHANGEREASON`, `ArabicBatchNumber`, `Arabic Translation Status`, `Arabic Text`, `ProductionStatus`, `English Text`, `String ID`, `CategoryName`, `Platform`, `ScreenName`, `MaxLength`, `Legal`, `Guideline`, `Comment`, `DateCreated`, `CreatedBy`, `LastUpdated`, `UpdatedBy`, `DNT`]

eagleFields: [`StringID`, `Category`, `SourceText`, `PreviousSourceText`, `SourceWordCount`, `Platform`, `LocText_AR`, `PreviousLocText_AR`, `LocWordCount_AR`, `ProductionStatus_AR`, `TranslationStatus_AR`, `ReviewStatus_AR`, `Batch_AR`, `PreviousBatch_AR`, `PreviousLTReview_AR`, `ChangeReason_AR`, `LastModifiedBy_AR`, `LastModificationDate_AR`, `Reason_AR`],





    function copyColumn(ws, sourceCol, targetCol) {

        let sourceColumn = ws.getColumn(sourceCol);

        sourceColumn.eachCell((cell, rowNumber) => {
            myRow = ws.getRow(rowNumber);
            var newCell = myRow.getCell(targetCol);

            for (var prop in cell) {
                newCell[prop] = cell[prop];

            }
        });
    }

function findmyIndex(ws, val) {

    let arr = ws.getRow(1).values
    let res;
    arr.forEach(function callback(c, i) {
        if (c.includes(val)) {
            res = i
        }
    })
    return res;
}


function moveColumn(ws, headersArr, arrIndex, targetLocation) {
    let index = findmyIndex(ws, headersArr[arrIndex]);
    let columnDataArr = ws.getColumn(previousSourceTextIndex).values;
    columnDataArr.shift();
    ws.spliceColumns(targetLocation, 0, columnDataArr);
    ws.spliceColumns(index + 1, 1);
}

function testPrint(platform, sheet, headers){
    
    let index;
    if(platform == 'hal') {
        index = 3;
    } else if (platform == 'eagle') {
        index = 6;
    }

    let row = sheet.getRow(1);
    let cell = row.getCell(3).value;
    let res;
    if(cell == headers[index]){
        res = true;
    } else {
        res = false;
    }
    return res;
}