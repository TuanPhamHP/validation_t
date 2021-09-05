export default {
 removeAscent: str => {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
 },
 removeAscentNormal: str => {
  if (str === null || str === undefined) return str;
  str = str.replace(
   /à|À|á|Á|ạ|Ạ|ả|Ả|ã|Ã|â|Â|ầ|Ầ|ấ|Ấ|ậ|Ậ|ẩ|Ẩ|ẫ|Ẫ|ă|Ă|ằ|Ằ|ắ|Ắ|ặ|Ặ|ẳ|Ẳ|ẵ|Ẵ/g,
   "a",
  );
  str = str.replace(/è|È|é|É|ẹ|Ẹ|ẻ|Ẻ|ẽ|Ẽ|ê|Ê|ề|Ề|ế|Ế|ệ|Ệ|ể|Ể|ễ|Ễ/g, "e");
  str = str.replace(/ì|I|í|Í|ị|Ị|ỉ|Ỉ|ĩ|Ĩ/g, "i");
  str = str.replace(
   /ò|Ò|ó|Ó|ọ|Ọ|ỏ|Ỏ|õ|Õ|ô|Ô|ồ|Ồ|ố|Ố|ộ|Ộ|ổ|Ổ|ỗ|Ỗ|ơ|Ơ|ờ|Ờ|ớ|Ớ|ợ|Ợ|ở|Ở|ỡ|Ỡ/g,
   "o",
  );
  str = str.replace(/ù|Ù|ú|Ú|ụ|Ụ|ủ|Ủ|ũ|Ũ|ư|Ư|ừ|Ừ|ứ|Ứ|ự|Ự|ử|Ử|ữ|Ữ/g, "u");
  str = str.replace(/ỳ|Ỳ|ý|Ý|ỵ|Ỵ|ỷ|Ỷ|ỹ|Ỹ/g, "y");
  str = str.replace(/đ|Đ/g, "d");
  return str;
 },
 isEmail: str => {
  if (str === null || str === undefined) return str;
  let re =
   /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  return re.test(str);
 },
 isNotContainNumber: str => {
  if (str === null || str === undefined) return str;
  let re = /^([^0-9]*)$/;
  return re.test(str);
 },
 isURL: str => {
  if (str === null || str === undefined) return str;
  var pattern = new RegExp(
   "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
   "i",
  ); // fragment locator
  return !!pattern.test(str);
 },
 isContainURL: str => {
  if (str === null || str === undefined) return str;
  var pattern = new RegExp(
   "(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
   "i",
  ); // fragment locator
  return !!pattern.test(str);
 },
 getCurrency: str => {
  if (+str != 0 && !+str) return str;
  let val = String(str).trim();
  let hT = val.split(".");
  let head = hT[0].split("");
  if (head.length > 3) {
   let index = 3;
   while (head.length - index >= 1) {
    head.splice(head.length - index, 0, ",");
    index += 4;
   }
  }
  return hT.length > 1 ? head.join("") + "." + hT[1] : head.join("");
 },
};
