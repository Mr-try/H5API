/**
 * Created by ty on 2016/12/6.
 */
onmessage = function (e) {
    postMessage(smear(e.data));
};
function smear(pixels) {
    var data = pixels.data,width = pixels.width,height = pixels.height;
    var n = 0,m = n-1;
    for(var row = 0;row < height;row++){
        var i = row*width*4;
        for(var col = 1; col <= width; col++,i+=4){
            // data[i] = (data[i] + data[i-4]*m)/n;
            // data[i+1] = (data[i+1] + data[i-3]*m)/n;
            // data[i+2] = (data[i+2] + data[i-2]*m)/n;
            // data[i+3] = (data[i+3] + data[i-1]*m)/n;

            data[i] = 255-data[i];
            data[i+1] = 255- data[i+1];
            data[i+2] = 255-data[i+2];
            data[i+3] = 255;
        }
    }
    return pixels;
}