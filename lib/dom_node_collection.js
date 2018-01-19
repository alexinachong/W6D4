// module.exports.DOMNodeCollection

class DOMNodeCollection {
  constructor(HTMLelements) {
    this.HTMLelements = HTMLelements;
  }

  html(string) {
    if (typeof string === "string") {
      this.forEach((node) => {
        node.innerHTML = string;
      });
    } else if (this.HTMLelements.length > 0) {
      return this.HTMLelements[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(input) {
    this.forEach((el) => {
      el.innerHTML += input;
    });
  }

  attr(key, value){
    if (typeof value === 'string') {
      this.forEach(node => node.setAttribute(key, value));
    } else {
      return this.HTMLelements[0].getAttribute(key);
    }
  }

  addClass(value) {
    if (!this.attr('class')) {
      this.attr('class',value);
    } else {

    }
  }
}
