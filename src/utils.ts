import { Subscription } from 'rxjs/Rx';

export function generateUUID(pattern: string): string {
  var d = new Date().getTime();
  var uuid = (pattern || 'xxxxxxxxxxxxxxxxxxxx').replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
};
export function hasClass(el: any, name: string) {
  return new RegExp('(?:^|\s+)' + name + '(?:\s+|$)').test(el.className);
}
export function addClass(el: any, name: string) {
  if (!hasClass(el, name)) {
    el.className = el.className ? [el.className, name].join(' ') : name;
    return true;
  }
  return false;
}
export function removeClass(el: any, name: string) {
  if (hasClass(el, name)) {
    el.className = el.className.replace(new RegExp('(?:^|\s+)' + name + '(?:\s+|$)', 'g'), '');
    return true;
  }
  return false;
}
export function toggleClass(el: any, name: string) {
  if (!addClass(el, name)) {
    removeClass(el, name);
  }
}
export function objectToArray(obj: Object): Array<Object> {
  if (!obj) { return null; }
  let keys = Object.keys(obj);
  let res = [];
  for (let i = 0; i < keys.length; i++) {
    res[i] = { key: keys[i], value: obj[keys[i]] };
  }
  return res;
}
export function removeAccents(input: string): string {
  if (!input) { return ''; }
  var rExps = [
    { re: /[\xC0-\xC6]/g, ch: 'A' },
    { re: /[\xE0-\xE6]/g, ch: 'a' },
    { re: /[\xC8-\xCB]/g, ch: 'E' },
    { re: /[\xE8-\xEB]/g, ch: 'e' },
    { re: /[\xCC-\xCF]/g, ch: 'I' },
    { re: /[\xEC-\xEF]/g, ch: 'i' },
    { re: /[\xD2-\xD6]/g, ch: 'O' },
    { re: /[\xF2-\xF6]/g, ch: 'o' },
    { re: /[\xD9-\xDC]/g, ch: 'U' },
    { re: /[\xF9-\xFC]/g, ch: 'u' },
    { re: /[\xD1]/g, ch: 'N' },
    { re: /[\xF1]/g, ch: 'n' }
  ];
  for (var i = 0, len = rExps.length; i < len; i++) {
    input = ('' + input).replace(rExps[i].re, rExps[i].ch);
  }
  return input;
}
export function searchString(input: string, term: string): boolean {
  return removeAccents(input).toLowerCase().indexOf(removeAccents(term).toLowerCase()) > -1;
}
export function deepMerge(target, src) {
  var isArray = Array.isArray(src);
  var dst: any = isArray ? [] : {};

  if (isArray) {
    target = target || [];
    dst = dst.concat(target);
    src.forEach(function (e, i) {
      if (typeof dst[i] === 'undefined') {
        dst[i] = e;
      } else if (typeof e === 'object') {
        dst[i] = deepMerge(target[i], e);
      } else {
        if (target.indexOf(e) === -1) {
          dst.push(e);
        }
      }
    });
  } else {
    if (target && typeof target === 'object') {
      Object.keys(target).forEach(function (key) {
        dst[key] = target[key];
      });
    }
    Object.keys(src).forEach(function (key) {
      if (typeof src[key] !== 'object' || !src[key]) {
        dst[key] = src[key];
      } else {
        if (!target[key]) {
          dst[key] = src[key];
        } else {
          dst[key] = deepMerge(target[key], src[key]);
        }
      }
    });
  }

  return dst;
}
function findByPath(object: Object, path: Array<string | number>, cb: Function) {
  let index = -1, length = path.length, lastIndex = length - 1, nested = object;

  while (nested != null && ++index < length) {
    var key = path[index];
    if (typeof nested == 'object') {
      if (index != lastIndex) {
        if (nested[key] == null) { // Initialize, in case of unset object
          nested[key] = (typeof path[index + 1] === 'number' ? [] : {});
        }
        nested = nested[key]; // Keep digging into the object
      } else {
        nested[key] = nested[key] || []; // Initialize as array if null
        cb(nested[key]);
      }

    }
  }

}
export function setByPath(object: Object, path: Array<string | number>, value: any) {
  let index = -1, length = path.length, lastIndex = length - 1, nested = object;

  while (nested != null && ++index < length) {
    var key = path[index];
    if (typeof nested == 'object') {
      var newValue = value;
      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = objValue == null // Initialize, in case of unset object
          ? (typeof path[index + 1] === 'number' ? [] : {})
          : objValue;
      }
      nested[key] = newValue;
    }
    nested = nested[key]; // Keep digging into the object
  }
}
export function pushByPath(object: Object, path: Array<string | number>, value: any) {
  findByPath(object, path, function (found) {
    if (Object.prototype.toString.call(found) === '[object Array]') {
      (<Array<any>>found).push(value); // Push de value if it's array
    }
  });
}
export function pullByPath(object: Object, path: Array<string | number>) {
  let index = path.pop();
  findByPath(object, path, function (found) {
    if (Object.prototype.toString.call(found) === '[object Array]') {
      found.splice(index, 1); // Pull de value
    }
  });
}
export function unsubscribe(subscription: Subscription) {
  if (this.subscription && this.subscription.isUnsubscribed === false) {
    this.subscription.unsubscribe();
  }
}

export function deepClone(object: Object): Object {
  return JSON.parse(JSON.stringify(object));
}
export function objEquals(obj1: Object, obj2: Object): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
export function sideOfScreen(element): 'left' | 'right' {
  let windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  let elementLeft = (element.offsetLeft - element.scrollLeft + element.clientLeft);
  return elementLeft < (windowWidth / 2) ? 'left' : 'right';
}
