
const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const countLinesInFile = require('count-lines-in-file');

function csv_to_json(input_path, output_path){
  countLinesInFile(input_path, (error, numberOfLines) => {
    res = new Array(numberOfLines - 1) // Correct for csv header
    i = 0
    csv()
    .fromFile(input_path)
    .on('json', (jsonObj)=>{
    res[i++] = jsonObj
    })
    .on('done', (error)=>{
      fs.writeFile(output_path, JSON.stringify(res, null, 2), (err) => {
        if (err) throw err;
      })
    })
  })
}

csv_to_json(path.join(__dirname, 'customer-data.csv'),
            path.join(__dirname, 'customer-data.json'))
