

const URL_API = 'http://192.168.1.8:3000';

const ObjToQueryStringGet = obj => {
    const keyValuePairs = [];
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
        keyValuePairs.push(
            `${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(
                Object.values(obj)[i],
            )}`,
        );
    }
    return keyValuePairs.join('&');
};

const RequestGetBaseApi = async (url, param) => {
    console.log('RequestGetBaseApi:', url);
    let headers = { 'Content-Type': 'application/json' };
    let result = {};
    try {
        let res = await fetch(URL_API+ url);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};

const RequestPostBaseApi = async (url, body, header = null) => {
    console.log('RequestPostBaseApi:', url);
    let result = {};
    try {
        const res = await fetch(URL_API + url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        console.log('status:',res.status!=200)
        if((res.status!=200)){
            console.log('error log')
            throw new Error('err post');
        }
           
        const data = await res.json();
        console.log('status:',res.status)
        return data;
        // result = {...result, ...{status: res.status, ...data}};
    } catch (error) {
        // result = {...result, ...{status: 501, err: error.toString()}};
        throw error.toString();
    }
};

export { URL_API, RequestGetBaseApi, RequestPostBaseApi };
