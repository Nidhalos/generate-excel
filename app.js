const XlsxPopulate = require('xlsx-populate');
const arrayOfObjects = require('./getFakeUsers');
//console.log(arrayOfObjects)

XlsxPopulate.fromBlankAsync().then(workbook=>{
    workbook.sheet("Sheet1").cell("A1").value("ID");
    workbook.sheet("Sheet1").cell("B1").value("Name");
    workbook.sheet("Sheet1").cell("C1").value("Last Name");
    workbook.sheet("Sheet1").cell("D1").value("PHONE");
    arrayOfObjects.forEach(obj => {
        //workbook.sheet("Sheet1").cell("A1").value("ID");
        workbook.sheet("Sheet1").cell(`A${obj.id + 1}`).value(`${obj.id}`);
        workbook.sheet("Sheet1").cell(`B${obj.id + 1}`).value(`${obj.name}`);
        workbook.sheet("Sheet1").cell(`C${obj.id + 1}`).value(`${obj.lastName}`);
        workbook.sheet("Sheet1").cell(`D${obj.id + 1}`).value(`${obj.phone}`);

        //console.log(obj.phone);
    });

    return workbook.toFileAsync('result.xlsx')
})