function get(id) {
    return (typeof id === 'string' ? document.getElementById(id) : id);
}

function create(tagName, className, container, options) {
    var el = document.createElement(tagName);
    el.className = className;

    if (options && options.tabIndex) {
        el.tabIndex = options.tabIndex
    }

    if (container) {
        container.appendChild(el);
    }
    return el;
}

function getPosition(el) {
    var pos = {
        x: 0,
        y: 0
    }
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        pos.x += el.offsetLeft // - el.scrollLeft;
        pos.y += el.offsetTop // - el.scrollTop;
        el = el.offsetParent;
    }
    return pos;
}

export {get, create, getPosition }