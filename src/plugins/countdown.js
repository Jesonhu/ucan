/**
 * Created by Jesonhu.
 * 倒计时计算器
 */

export default (year, month, date, hours, mintues, seconds) => {
  let endTime = new Date()
  year = year || endTime.getFullYear()
  month = month || endTime.getMonth()
  date = date || endTime.getDate()
  hours = hours || (endTime.getHours() + 2)

  endTime.setFullYear(year)
  endTime.setMonth(month)
  endTime.setDate(date)
  endTime.setHours(hours)
  endTime.setMinutes(0)
  endTime.setSeconds(0)
  let endTimer = endTime.getTime();//获取结束时间

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

      // console.log(`,${hour},${min},${sec}`)
      // console.log(hourWrap, mintuesWrap, secoundsWrap)

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
