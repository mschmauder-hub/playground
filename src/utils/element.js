export function createElement(tagname, props, ...children) {
  const element = document.createElement(tagname);
  Object.assign(element, props);
  element.append(...children);
  return element;
}
