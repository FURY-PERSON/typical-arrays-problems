
exports.min = function min (array) {
    let minar=0;
    if(!Array.isArray(array)||array.length==0)
        return 0;
    for(let i=0;i<array.length;i++)
        if (array[i]<minar)
            minar=array[i];
  return minar;
}

exports.max = function max (array) {
    let maxar=0;
    if(!Array.isArray(array)||array.length==0)
        return 0;
    for(let i=0;i<array.length;i++)
        if (array[i]>maxar)
            maxar=array[i];
  return maxar;
}

exports.avg = function avg (array) {
    let avgar=0;
    if(!Array.isArray(array)||array.length==0)
        return 0;
    for(let i=0;i<array.length;i++)
        avgar+=array[i];
  return avgar/array.length;
}
