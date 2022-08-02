var validationT;(()=>{"use strict";var t={d:(r,a)=>{for(var S in a)t.o(a,S)&&!t.o(r,S)&&Object.defineProperty(r,S,{enumerable:!0,get:a[S]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{tDate:()=>s,tStr:()=>$,t_date:()=>y,t_str:()=>p});var a={removeAscent:t=>null==t?t:"string"!=typeof t?(console.error("Provided params is not a String type",t),""):t=(t=(t=(t=(t=(t=(t=(t=t.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e")).replace(/ì|í|ị|ỉ|ĩ/g,"i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")).replace(/đ/g,"d"),removeAscentNormal:t=>null==t?t:"string"!=typeof t?(console.error("Provided params is not a String type",t),""):t=(t=(t=(t=(t=(t=(t=t.replace(/à|À|á|Á|ạ|Ạ|ả|Ả|ã|Ã|â|Â|ầ|Ầ|ấ|Ấ|ậ|Ậ|ẩ|Ẩ|ẫ|Ẫ|ă|Ă|ằ|Ằ|ắ|Ắ|ặ|Ặ|ẳ|Ẳ|ẵ|Ẵ/g,"a")).replace(/è|È|é|É|ẹ|Ẹ|ẻ|Ẻ|ẽ|Ẽ|ê|Ê|ề|Ề|ế|Ế|ệ|Ệ|ể|Ể|ễ|Ễ/g,"e")).replace(/ì|I|í|Í|ị|Ị|ỉ|Ỉ|ĩ|Ĩ/g,"i")).replace(/ò|Ò|ó|Ó|ọ|Ọ|ỏ|Ỏ|õ|Õ|ô|Ô|ồ|Ồ|ố|Ố|ộ|Ộ|ổ|Ổ|ỗ|Ỗ|ơ|Ơ|ờ|Ờ|ớ|Ớ|ợ|Ợ|ở|Ở|ỡ|Ỡ/g,"o")).replace(/ù|Ù|ú|Ú|ụ|Ụ|ủ|Ủ|ũ|Ũ|ư|Ư|ừ|Ừ|ứ|Ứ|ự|Ự|ử|Ử|ữ|Ữ/g,"u")).replace(/ỳ|Ỳ|ý|Ý|ỵ|Ỵ|ỷ|Ỷ|ỹ|Ỹ/g,"y")).replace(/đ|Đ/g,"d"),isEmail:t=>null==t?t:"string"!=typeof t?(console.error("Provided params is not a String type",t),""):/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(t),isNotContainNumber:t=>null==t?t:"string"!=typeof t?(console.error("Provided params is not a String type",t),""):/^([^0-9]*)$/.test(t),isURL:t=>null==t?t:"string"!=typeof t?(console.error("Provided params is not a String type",t),""):!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t),isContainURL:t=>null==t?t:"string"!=typeof t?(console.error("Provided params is not a String type",t),""):!!new RegExp("(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t),getCurrency:t=>{if(0!=+t&&!+t)return t;if(!["string","number"].includes(typeof t))return console.error("Provided params is not a String type",t),"";let r=String(t).trim().split("."),a=r[0].split("");if(3<a.length){let t=3;for(;1<=a.length-t;)a.splice(a.length-t,0,","),t+=4}return 1<r.length?a.join("")+"."+r[1]:a.join("")}},S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],d=["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"],e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=["Chủ Nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],g={formatDate:(t,r,a="vi")=>{if(!t||!new Date(t))return t;let i=new Date(t);var g=i.getDay(),p=i.getDate(),$=i.getMonth(),y=i.getFullYear(),s=i.getHours(),M=i.getMinutes(),h=i.getSeconds(),m=i.getMilliseconds();if("vi"==a)switch(r){case"d/M/yy":return`${p}/${$+1}/${String(y).slice(-2)}`;case"d-M-yy":return`${p}-${$+1}-${String(y).slice(-2)}`;case"dd/MM/yyyy":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y}`;case"dd-MM-yyyy":return`${String(p).padStart(2,0)}-${String($+1).padStart(2,0)}-${y}`;case"day,MMM dd, yyyy":return`${7!==g?"Thứ "+(g+1):"Chủ nhật"}, ${String(p).padStart(2,0)} Th${$+1}, ${y}`;case"day,MMMM ddd, yyyy":return`${7!==g?"Thứ "+(g+1):"Chủ nhật"}, ${String(p).padStart(2,0)} Tháng ${$+1}, ${y}`;case"hh:mm":return`${String(s).padStart(2,0)}:${String(M).padStart(2,0)}`;case"hh:mm:ss":return`${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}`;case"hh:mm:ss:mili":return`${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}:${m}`;case"hh:mm 12":return`${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+" CH":String(M).padStart(2,0)+" SA"}`;case"hh:mm:ss 12":return`${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" CH":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" SA"}`;case"hh:mm:ss:mili 12":return`${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+":"+String(m)+" CH":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+":"+String(m)+" SA"}`;case"dd/MM/yyyy hh:mm":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}`;case"day,MMMM ddd, yyyy hh:mm":return`${7!==g?"Thứ "+(g+1):"Chủ nhật"}, ${String(p).padStart(2,0)} Tháng ${$+1}, ${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}`;case"day,MMMM ddd, yyyy hh:mm:ss":return`${7!==g?"Thứ "+(g+1):"Chủ nhật"}, ${String(p).padStart(2,0)} Tháng ${$+1}, ${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}`;case"day,MMMM ddd, yyyy hh:mm:ss:mili":return`${7!==g?"Thứ "+(g+1):"Chủ nhật"}, ${String(p).padStart(2,0)} Tháng ${$+1}, ${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}:${m}`;case"day,MMM dd, yyyy hh:mm":return`${7!==g?"Thứ "+(g+1):"Chủ nhật"}, ${String(p).padStart(2,0)} Th${$+1}, ${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}`;case"day,MMM dd, yyyy hh:mm 12":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} ${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+" CH":String(M).padStart(2,0)+" SA"}`;case"dd/MM/yyyy hh:mm:ss":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}`;case"dd/MM/yyyy hh:mm:ss 12":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} ${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" CH":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" SA"}`;case"dd/MM/yyyy hh:mm:ss:mili":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}:${m}`;case"dd/MM/yyyy hh:mm:ss:mili 12":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} {hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" CH":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" SA"}`;default:return i}else switch(String(r).trim()){case"d/M/yy":return`${p}/${$+1}/${String(y).slice(-2)}`;case"d-M-yy":return`${p}-${$+1}-${String(y).slice(-2)}`;case"dd/MM/yyyy":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y}`;case"dd-MM-yyyy":return`${String(p).padStart(2,0)}-${String($+1).padStart(2,0)}-${y}`;case"day,MMM dd, yyyy":return`${d[g]}, ${S[$]} ${String(p).padStart(2,0)}, ${y}`;case"day,MMMM ddd, yyyy":return`${e[g]}, ${n[$]} ${String(p).padStart(2,0)}, ${y}`;case"hh:mm":return`${String(s).padStart(2,0)}:${String(M).padStart(2,0)}`;case"hh:mm:ss":return`${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}`;case"hh:mm:ss:mili":return`${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}:${m}`;case"hh:mm 12":return`${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+" PM":String(M).padStart(2,0)+" AM"}`;case"hh:mm:ss 12":return`${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" PM":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" AM"}`;case"hh:mm:ss:mili 12":return`${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+":"+String(m)+" PM":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+":"+String(m)+" AM"}`;case"dd/MM/yyyy hh:mm":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}`;case"day,MMM dd, yyyy hh:mm":return`${d[g]}, ${S[$]} ${String(p).padStart(2,0)}, ${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}`;case"day,MMMM ddd, yyyy hh:mm":return`${e[g]}, ${n[$]} ${String(p).padStart(2,0)}, ${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}`;case"day,MMM dd, yyyy hh:mm:ss":return`${d[g]}, ${S[$]} ${String(p).padStart(2,0)}, ${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}`;case"day,MMMM ddd, yyyy hh:mm:ss":return`${e[g]}, ${n[$]} ${String(p).padStart(2,0)}, ${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}`;case"day,MMM dd, yyyy hh:mm:ss:mili":return`${d[g]}, ${S[$]} ${String(p).padStart(2,0)}, ${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}:${m}`;case"day,MMMM ddd, yyyy hh:mm:ss:mili":return`${e[g]}, ${n[$]} ${String(p).padStart(2,0)}, ${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}:${m}`;case"dd/MM/yyyy hh:mm 12":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} ${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+" PM":String(M).padStart(2,0)+" AM"}`;case"day,MMM dd, yyyy hh:mm 12":return`${d[g]}, ${S[$]} ${String(p).padStart(2,0)}, ${y} ${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+" PM":String(M).padStart(2,0)+" AM"}`;case"day,MMMM ddd, yyyy hh:mm 12":return`${e[g]}, ${n[$]} ${String(p).padStart(2,0)}, ${y} ${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+" PM":String(M).padStart(2,0)+" AM"}`;case"day,MMM dd, yyyy hh:mm:ss 12":return`${d[g]}, ${S[$]} ${String(p).padStart(2,0)}, ${y} ${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" PM":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" AM"}`;case"day,MMMM ddd, yyyy hh:mm:ss 12":return`${e[g]}, ${n[$]} ${String(p).padStart(2,0)}, ${y} ${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" PM":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" AM"}`;case"day,MMM dd, yyyy hh:mm:ss:mili 12":return`${d[g]}, ${S[$]} ${String(p).padStart(2,0)}, ${y} ${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+":"+String(m)+" PM":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+":"+String(m)+" AM"}`;case"day,MMMM ddd, yyyy hh:mm:ss:mili 12":return`${e[g]}, ${n[$]} ${String(p).padStart(2,0)}, ${y} ${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+":"+String(m)+" PM":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+":"+String(m)+" AM"}`;case"dd/MM/yyyy hh:mm:ss":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}`;case"dd/MM/yyyy hh:mm:ss 12":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} ${String(12<s?s-12:s).padStart(2,0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" PM":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" AM"}`;case"dd/MM/yyyy hh:mm:ss:mili":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} ${String(s).padStart(2,0)}:${String(M).padStart(2,0)}:${String(h).padStart(2,0)}:${m}`;case"dd/MM/yyyy hh:mm:ss:mili 12":return`${String(p).padStart(2,0)}/${String($+1).padStart(2,0)}/${y} {hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${12<s?String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" PM":String(M).padStart(2,0)+":"+String(h).padStart(2,0)+" AM"}`;default:return i}},formatDateCustomize:(t,r="vi",a=24)=>{if(!t||!new Date(t))return t;let d=new Date(t);var g=d.getDay(),p=d.getDate(),$=d.getMonth(),y=d.getFullYear(),s=d.getHours(),M=d.getMinutes(),h=d.getSeconds();return t=d.getMilliseconds(),{day:("vi"==r?i:e)[g],d:p,dd:String(p).padStart(2,0),M:String($+1),MM:String($+1).padStart(2,0),MMM:"vi"==r?`Th${$+1}`:S[$],MMMM:"vi"==r?`Tháng ${$+1}`:n[$],yy:String(y).slice(-2),yyyy:y,hh:24==a?String(s).padStart(2,0):`${String(12<s?s-12:s).padStart(2,0)}`,mm:String(M).padStart(2,0),ss:String(h).padStart(2,0),mili:String(t)}},getCurrentWeek:t=>{if(!t)return{startWeek:null,endWeek:null};var r=(a=new Date(t).getDay())-1==-1?6:a-1,a=7-a==7?0:7-a;return{startWeek:new Date(new Date(t)).setDate(new Date(t).getDate()-r),endWeek:new Date(new Date(t)).setDate(new Date(t).getDate()+a)}}};const p=a,$=a,y=g,s=g;validationT=r})();