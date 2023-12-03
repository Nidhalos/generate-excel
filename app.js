const XlsxPopulate = require('xlsx-populate');
const arrayOfObjects = require('./getFakeUsers');

XlsxPopulate.fromBlankAsync().then(workbook=>{
    workbook.sheet("Sheet1").cell("A1").value("Name");
    workbook.sheet("Sheet1").cell("A1").value("Name");

    return workbook.toFileAsync('result.xlsx')
})