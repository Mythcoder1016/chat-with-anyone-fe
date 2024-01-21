export function buildData (...args: any[]) {
  const res = {}
  args.forEach(arg => {
    if (isPlainObject(arg)) {
        Object.assign(res, arg)
    }
  })
  return res
}

export function getBasicInfo (type: string) {
  if (type === 'currentUser') {
    return window.context
  }
}

export function isPlainObject (obj: any) {
  if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
    return false;
  }
  const hasOwnConstructor = Object.prototype.hasOwnProperty.call(obj, 'constructor');
  const hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf');
  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  }
  let key;
  for (key in obj) { /**/ }

  return typeof key === 'undefined' || Object.prototype.hasOwnProperty.call(obj, key);
};

// export function getTextLength(ref: any) {
//   const myDiv = ref?.current?.
//   const textContent = myDiv.textContent;
//   const span = document.createElement('span');
//   span.textContent = textContent;
//   document.body.appendChild(span);
//   const textLength = span.getBoundingClientRect().width;
//   document.body.removeChild(span);
//   return textLength;
// }