const TimeConverter = require("../domain/time-converter");
let timeConverter = new TimeConverter();

class Log {
  constructor() {}
  input(){
    let data = [];
    let reader = require('readline').createInterface({input: process.stdin,output: process.stdout}).on(
      'line',(input) => {
          data = input.split(' ');
          console.log(timeConverter.convert(data));
          reader.close();
      });
  }
}

module.exports = Log;


