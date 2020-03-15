module.exports = function check(str, bracketsConfig) {

  if (typeof str !== "string" || str.trim().length === 0) {
return false;
}
while (str.length > 0) {
let perviousLenght = str.length;
str = str.replace(/\(\)/g, "");
str = str.replace(/34/g, "");
str = str.replace(/12/g, "");
str = str.replace(/{}/g, "");
str = str.replace(/88/g, "");
str = str.replace(/\|\|/g, "");
str = str.replace(/77/g, "");
str = str.replace(/["'\[]]/g, "");
str = str.replace(/56/g, "");

if (str.length === perviousLenght) {
return false;
}
}
return true;
}
