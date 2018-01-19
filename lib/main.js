const DOMNodeCollection = require('./dom_node_collection');

window.$l = function(selector) {
  switch (typeof selector) {
    case 'string':
      return getNodesFromDom(selector);
    case 'object':
      if (selector instanceof HTMLElement) {
        return new DOMNodeCollection([selector]);
      }
  }
};

function getNodesFromDom(selector) {
  const nodes = document.querySelectorAll(selector);
  let arr = Array.from(nodes);
  return new DOMNodeCollection(arr);
}
