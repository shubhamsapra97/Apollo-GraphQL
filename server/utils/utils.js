const removeNoneList = (array) => {
    return array.filter(el => {
        return el != null && el != '';
    });
}

const removeNoneObject = (obj) => {
    return Object.entries(obj).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})
}

module.exports = {
    removeNoneList,
    removeNoneObject
};
