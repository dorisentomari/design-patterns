// let h1 = <h1 className="title">hello</h1>;

// let h1 = React.createElement('h1', {className: 'title'}, 'hello');

class VNode {
  constructor(tagName, attrs, children) {
    this.tagName = tagName;
    this.attrs = attrs;
    this.children = children;
  }
}

function createElement(tagName, attrs, children) {
  return new VNode(tagName, attrs, children);
}
