let $ = {};

$.define = function (namespace, fn) {
  let namespaces = namespace.split('.');
  let fnName = namespaces.pop();
  let current = $;
  for (let i = 0; i < namespaces.length; i++) {
    let namespace = namespaces[i];
    if (!current[namespace]) {
      current[namespace] = {};
    }
    current = current[namespace];
  }
  current[fnName] = fn;
}

$.define('dom.class.addClass', function (arguments) {
  console.log('dom.class.addClass');
  console.log(arguments);
});

$.dom.class.addClass('hello world');

