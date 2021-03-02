
class TimeConverter {
  constructor() { }
  convert(time) {
    let timeList = []
    let tmp = [time[0]];
    if (time[0].indexOf('h') != -1) {
      tmp = tmp[0].split('h');
      timeList[0] = tmp[0];
      tmp[0] = tmp[1];
    }
    else{
      timeList[0] = '0';
    }

    if(time[0].indexOf('m') != -1){
      tmp = tmp[0].split('m');
      timeList[1] = tmp[0];
      tmp[0] = tmp[1];
    }
    else{
      timeList[1] = '0';
    }

    if(time[0].indexOf('s') != -1){
      tmp = tmp[0].split('s');
      timeList[2] = tmp[0];
    }
    else{
      timeList[2] = '0';
    }

    return timeList;
  }
}



module.exports = TimeConverter;
