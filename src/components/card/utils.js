export function stringifyObject(data) {
  var value,
    key,
    tmp = [];
  const encodeFunc = (data) =>
    encodeURIComponent("" + data)
      .replace(/!/g, "%21")
      .replace(/'/g, "%27")
      .replace(/\(/g, "%28")
      .replace(/\)/g, "%29")
      .replace(/\*/g, "%2A")
      .replace(/%20/g, "+");
  const _hbqHelper = (key, val) => {
    var k,
      tmp = [];
    if (val === true) val = "1";
    else if (val === false) val = "0";
    if (val !== null) {
      if (typeof val === "object") {
        for (k in val)
          if (val[k] !== null)
            tmp.push(_hbqHelper(key + "[" + k + "]", val[k], "&"));
        return tmp.join("&");
      } else if (typeof val !== "function")
        return encodeFunc(key) + "=" + encodeFunc(val);
      else return false;
    } else return "";
  };
  for (key in data) {
    value = data[key];
    var query = _hbqHelper(key, value, "&");
    if (query === false) continue;
    if (query !== "") tmp.push(query);
  }
  return tmp.join("&");
}
