
interface Data {
    url: string,
    method?: 'GET' | 'POST',
    isAsync: boolean,
    data?: string,
    callback: unknown
}
enum changeValue {
    readyStage = 4,
    successStatus = 200
}
const ajax = (data: Data) => {
    let xhr = new XMLHttpRequest()
    let type = data.method || 'GET'
    let isAsync = data.isAsync
    let url = data.url
    let transData = data.data || null
    let callback = data.callback
    xhr.open(type, url, isAsync)
    xhr.send(transData)
    xhr.onreadystatechange = function () {
        if (this.readyState === changeValue.readyStage && this.status === changeValue.successStatus) {
            typeof callback == 'function' && callback(xhr.responseText)
        } else {
            throw Error("fail request!")
        }
    }
}