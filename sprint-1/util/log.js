class Log {
  constructor() {}
  input(){
    let data = [];
    let reader = require('readline').createInterface({input: process.stdin,output: process.stdout}).on(
      'line',(input) => {
          data = input.split(' ').map((el) => parseInt(el));
          console.log(data);
          reader.close();
      });
  }
}

module.exports = Log;


