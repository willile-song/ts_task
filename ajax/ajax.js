"use strict";
var changeValue;
(function (changeValue) {
    changeValue[changeValue["readyStage"] = 4] = "readyStage";
    changeValue[changeValue["successStatus"] = 200] = "successStatus";
})(changeValue || (changeValue = {}));
var ajax = function (data) {
    var xhr = new XMLHttpRequest();
    var type = data.method || 'GET';
    var isAsync = data.isAsync;
    var url = data.url;
    var transData = data.data || null;
    var callback = data.callback;
    xhr.open(type, url, isAsync);
    xhr.send(transData);
    xhr.onreadystatechange = function () {
        if (this.readyState === changeValue.readyStage && this.status === changeValue.successStatus) {
            typeof callback == 'function' && callback(xhr.responseText);
        }
        else {
            throw Error("fail request!");
        }
    };
};
