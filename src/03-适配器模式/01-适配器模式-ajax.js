function ajax(options = {}) {
  let defaultOptions = {
    method: 'GET',
    dataType: 'json',
  };

  for (let attr in options) {
    defaultOptions[attr] = options[attr] || defaultOptions[attr];
  }

  console.log(defaultOptions);
}

ajax({
  url: '/api/user',
  success(str) {
    // 服务器返回的是 JSON 字符串
  }
});


function transform(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    return str;
  }
}


