/**
 * Created by Jesonhu.
 * 倒计时计算器
 */

export default (year, month, date, hours, mintues, seconds) => {
  const endTime = new Date()
  const argYear = endTime.setFullYear(year) || endTime.getFullYear()
  const argMonth = endTime.setFullYear(month) || endTime.getMonth()
  const argDate = endTime.setFullYear(date) || endTime.getDate()
  const argHour = endTime.setFullYear(hours) || (endTime.getHours() + 2)
  const argMinutes = endTime.setFullYear(mintues) || endTime.getMinutes()
  const argSeconds = endTime.setFullYear(seconds) || endTime.getSeconds()
  let endTimer = endTime.getTime();//获取结束时间
  //console.log(endTimer);

  // 获取倒计时显示容器元素
  let secskill_hour = document.getElementById("secskill-hour"),
    secskill_min = document.getElementById("secskill-min"),
    secskill_sec = document.getElementById("secskill-sec"),

    nowTime, secs, hour, leaveSec, min, sec, str;

  // 时间换算
  function countTime(time, hourWrap, mintuesWrap, secoundsWrap){
    nowTime = new Date();
    secs = (time - nowTime.getTime())/1000; // 秒

    if (secs > 0) // 满足计时条件，计时
    {
      hour =  Math.floor(secs / 3600); // 换算为时
      leaveSec = secs % 3600; // 换算小时后剩下秒钟
      min = Math.floor(leaveSec / 60); // 换算为分
      sec = Math.floor(leaveSec % 60); // 换算为秒

      hourWrap.innerHTML = addZero(hour,2);
      mintuesWrap.innerHTML = addZero(min,2);
      secoundsWrap.innerHTML = addZero(sec,2);
    } else { // 不满足计时条件
      clearInterval(timer);
    }
  }
  let timer = setInterval(function(){
    countTime(endTimer, secskill_hour, secskill_min, secskill_sec);
  },1000);
  countTime(endTimer, secskill_hour, secskill_min, secskill_sec);

  // 补零功能
  function addZero(time,n){
    str = '' + time;
    while (str.length < n)
    {
      str = "0" + time;
    }
    return str;
  }
}
