const sortMonthEng = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fullMonthEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const sortWeekDayEng = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const fullWeekDayEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const fullWeekDayVi = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
export default {
  formatDate: (_date, format, lang = "vi") => {
    if (!_date || !new Date(_date)) return _date;
    let md = new Date(_date);
    let day = md.getDay();
    let date = md.getDate();
    let month = md.getMonth();
    let year = md.getFullYear();
    let hours = md.getHours();
    let minutes = md.getMinutes();
    let seconds = md.getSeconds();
    let miliseconds = md.getMilliseconds();

    if (lang == "vi") {
      switch (format) {
        case "d/M/yy":
          return `${date}/${month + 1}/${String(year).slice(-2)}`;
        case "d-M-yy":
          return `${date}-${month + 1}-${String(year).slice(-2)}`;
        case "dd/MM/yyyy":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year}`;
        case "dd-MM-yyyy":
          return `${String(date).padStart(2, 0)}-${String(month + 1).padStart(2, 0)}-${year}`;
        case "day,MMM dd, yyyy":
          return `${day !== 7 ? "Thứ " + (day + 1) : "Chủ nhật"}, ${String(date).padStart(2, 0)} Th${month + 1}, ${year}`;
        case "day,MMMM ddd, yyyy":
          return `${day !== 7 ? "Thứ " + (day + 1) : "Chủ nhật"}, ${String(date).padStart(2, 0)} Tháng ${month + 1}, ${year}`;
        case "hh:mm":
          return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;
        case "hh:mm:ss":
          return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`;
        case "hh:mm:ss:mili":
          return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}:${miliseconds}`;
        case "hh:mm 12":
          return `${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${hours > 12 ? String(minutes).padStart(2, 0) + " CH" : String(minutes).padStart(2, 0) + " SA"}`;
        case "hh:mm:ss 12":
          return `${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " CH" : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " SA"
          }`;
        case "hh:mm:ss:mili 12":
          return `${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12
              ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + ":" + String(miliseconds) + " CH"
              : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + ":" + String(miliseconds) + " SA"
          }`;
        case "dd/MM/yyyy hh:mm":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;
        case "day,MMMM ddd, yyyy hh:mm":
          return `${day !== 7 ? "Thứ " + (day + 1) : "Chủ nhật"}, ${String(date).padStart(2, 0)} Tháng ${month + 1}, ${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;
        case "day,MMMM ddd, yyyy hh:mm:ss":
          return `${day !== 7 ? "Thứ " + (day + 1) : "Chủ nhật"}, ${String(date).padStart(2, 0)} Tháng ${month + 1}, ${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(
            seconds
          ).padStart(2, 0)}`;
        case "day,MMMM ddd, yyyy hh:mm:ss:mili":
          return `${day !== 7 ? "Thứ " + (day + 1) : "Chủ nhật"}, ${String(date).padStart(2, 0)} Tháng ${month + 1}, ${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(
            seconds
          ).padStart(2, 0)}:${miliseconds}`;
        case "day,MMM dd, yyyy hh:mm":
          return `${day !== 7 ? "Thứ " + (day + 1) : "Chủ nhật"}, ${String(date).padStart(2, 0)} Th${month + 1}, ${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;

        case "day,MMM dd, yyyy hh:mm 12":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} ${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + " CH" : String(minutes).padStart(2, 0) + " SA"
          }`;

        case "dd/MM/yyyy hh:mm:ss":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`;
        case "dd/MM/yyyy hh:mm:ss 12":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} ${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " CH" : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " SA"
          }`;
        case "dd/MM/yyyy hh:mm:ss:mili":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(
            2,
            0
          )}:${miliseconds}`;
        case "dd/MM/yyyy hh:mm:ss:mili 12":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} {hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " CH" : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " SA"
          }`;
        default:
          return md;
      }
    } else {
      switch (String(format).trim()) {
        case "d/M/yy":
          return `${date}/${month + 1}/${String(year).slice(-2)}`;
        case "d-M-yy":
          return `${date}-${month + 1}-${String(year).slice(-2)}`;
        case "dd/MM/yyyy":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year}`;
        case "dd-MM-yyyy":
          return `${String(date).padStart(2, 0)}-${String(month + 1).padStart(2, 0)}-${year}`;
        case "day,MMM dd, yyyy":
          return `${sortWeekDayEng[day]}, ${sortMonthEng[month]} ${String(date).padStart(2, 0)}, ${year}`;
        case "day,MMMM ddd, yyyy":
          return `${fullWeekDayEng[day]}, ${fullMonthEng[month]} ${String(date).padStart(2, 0)}, ${year}`;
        case "hh:mm":
          return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;
        case "hh:mm:ss":
          return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`;
        case "hh:mm:ss:mili":
          return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}:${miliseconds}`;
        case "hh:mm 12":
          return `${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${hours > 12 ? String(minutes).padStart(2, 0) + " PM" : String(minutes).padStart(2, 0) + " AM"}`;
        case "hh:mm:ss 12":
          return `${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " PM" : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " AM"
          }`;
        case "hh:mm:ss:mili 12":
          return `${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12
              ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + ":" + String(miliseconds) + " PM"
              : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + ":" + String(miliseconds) + " AM"
          }`;
        case "dd/MM/yyyy hh:mm":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;
        case "day,MMM dd, yyyy hh:mm":
          return `${sortWeekDayEng[day]}, ${sortMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;
        case "day,MMMM ddd, yyyy hh:mm":
          return `${fullWeekDayEng[day]}, ${fullMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;
        case "day,MMM dd, yyyy hh:mm:ss":
          return `${sortWeekDayEng[day]}, ${sortMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(
            2,
            0
          )}`;
        case "day,MMMM ddd, yyyy hh:mm:ss":
          return `${fullWeekDayEng[day]}, ${fullMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(
            2,
            0
          )}`;
        case "day,MMM dd, yyyy hh:mm:ss:mili":
          return `${sortWeekDayEng[day]}, ${sortMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(
            2,
            0
          )}:${miliseconds}`;
        case "day,MMMM ddd, yyyy hh:mm:ss:mili":
          return `${fullWeekDayEng[day]}, ${fullMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(
            2,
            0
          )}:${miliseconds}`;
        case "dd/MM/yyyy hh:mm 12":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} ${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + " PM" : String(minutes).padStart(2, 0) + " AM"
          }`;
        case "day,MMM dd, yyyy hh:mm 12":
          return `${sortWeekDayEng[day]}, ${sortMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + " PM" : String(minutes).padStart(2, 0) + " AM"
          }`;
        case "day,MMMM ddd, yyyy hh:mm 12":
          return `${fullWeekDayEng[day]}, ${fullMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + " PM" : String(minutes).padStart(2, 0) + " AM"
          }`;
        case "day,MMM dd, yyyy hh:mm:ss 12":
          return `${sortWeekDayEng[day]}, ${sortMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " PM" : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " AM"
          }`;
        case "day,MMMM ddd, yyyy hh:mm:ss 12":
          return `${fullWeekDayEng[day]}, ${fullMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " PM" : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " AM"
          }`;
        case "day,MMM dd, yyyy hh:mm:ss:mili 12":
          return `${sortWeekDayEng[day]}, ${sortMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12
              ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + ":" + String(miliseconds) + " PM"
              : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + ":" + String(miliseconds) + " AM"
          }`;
        case "day,MMMM ddd, yyyy hh:mm:ss:mili 12":
          return `${fullWeekDayEng[day]}, ${fullMonthEng[month]} ${String(date).padStart(2, 0)}, ${year} ${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12
              ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + ":" + String(miliseconds) + " PM"
              : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + ":" + String(miliseconds) + " AM"
          }`;
        case "dd/MM/yyyy hh:mm:ss":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`;
        case "dd/MM/yyyy hh:mm:ss 12":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} ${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " PM" : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " AM"
          }`;

        case "dd/MM/yyyy hh:mm:ss:mili":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(
            2,
            0
          )}:${miliseconds}`;
        case "dd/MM/yyyy hh:mm:ss:mili 12":
          return `${String(date).padStart(2, 0)}/${String(month + 1).padStart(2, 0)}/${year} {hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}:${
            hours > 12 ? String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " PM" : String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0) + " AM"
          }`;
        default:
          return md;
      }
    }
  },
  formatDateCustomize: (_date, lang = "vi", timeZone = 24) => {
    if (!_date || !new Date(_date)) return _date;
    let md = new Date(_date);
    let day = md.getDay();
    let date = md.getDate();
    let month = md.getMonth();
    let year = md.getFullYear();
    let hours = md.getHours();
    let minutes = md.getMinutes();
    let seconds = md.getSeconds();
    let miliseconds = md.getMilliseconds();
    let dateObject = {
      day: lang == "vi" ? fullWeekDayVi[day] : fullWeekDayEng[day],
      d: date,
      dd: String(date).padStart(2, 0),
      M: String(month + 1),
      MM: String(month + 1).padStart(2, 0),
      MMM: lang == "vi" ? `Th${month + 1}` : sortMonthEng[month],
      MMMM: lang == "vi" ? `Tháng ${month + 1}` : fullMonthEng[month],
      yy: String(year).slice(-2),
      yyyy: year,
      hh: timeZone == 24 ? String(hours).padStart(2, 0) : `${hours > 12 ? String(hours - 12).padStart(2, 0) : String(hours).padStart(2, 0)}`,
      mm: String(minutes).padStart(2, 0),
      ss: String(seconds).padStart(2, 0),
      mili: String(miliseconds),
    };

    return dateObject;
  },
  getCurrentWeek: _date => {
    if (!_date) {
      return { startWeek: null, endWeek: null };
    }
    const now = new Date(_date).getDay();
    const gapToMon = now - 1 === -1 ? 6 : now - 1;
    const gapToSun = 7 - now === 7 ? 0 : 7 - now;
    const startWeek = new Date(new Date(_date)).setDate(new Date(_date).getDate() - gapToMon);
    const endWeek = new Date(new Date(_date)).setDate(new Date(_date).getDate() + gapToSun);
    return { startWeek: startWeek, endWeek: endWeek };
  },
};
