const cheerio = require('cheerio');
const Promise = require('bluebird');
const request = require('request');

const requestOptions = {
    headers: {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0"
    }
};


function getData(url, opt) {
    return new Promise((resolve, reject) => {
        request(url, opt || requestOptions, (error, response, body) => {
            if(!error && response.statusCode === 200) {
                return resolve(body);
            } else {
                return reject(error);
            }
        });
    })
}

function getLinkDownloadByUrl(url) {
    if(url.indexOf('http://www.phimMoi.net/') === -1 && url.indexOf('http://www.phimmoi.net/') === -1) url = `http://www.phimmoi.net/${url}`;
    if(url.indexOf('html') === -1) url = `${url}xem-phim.html`;
    return getData(url, null)
        .then(response => {
            let data = response.match(/;eval\(function\(w,i,s,e\).*\);<\/script>/)[0];
            data     = data.substring(1, data.length - 10);
            data     = getPaser(getPaser(getPaser(data)));

            data = data.match(/http:\/\/episode.phimmoi.net[^"]*/)[0];

            return getData(data.match(/http:\/\/episode.phimmoi.net[^"]*/)[0]);
        })
        .then(response => {
            let jsonRaw = response.match(/'[^']*'/g)[0];
            return JSON.parse(jsonRaw.substring(1, jsonRaw.length - 1))
        })
        .then(({medias}) => {
            if(medias) return medias.map(video => ({
                url       : video.url,
                type      : video.type,
                width     : video.width,
                height    : video.height,
                resolution: parseFloat(video.resolution),
                label     : video.resolution,
            }));
        })
}

function getPaser(data) {
    let params = data.match(/'\w+'/g).map(item => item.replace('\'', '')).slice(-4);

    return parse(params[0], params[1], params[2], params[3]);
}

function parse(w, i, s, e) {
    var lIll = 0;
    var ll1I = 0;
    var Il1l = 0;
    var ll1l = [];
    var l1lI = [];
    while (true) {
        if(lIll < 5) l1lI.push(w.charAt(lIll)); else if(lIll
            < w.length) ll1l.push(w.charAt(lIll));
        lIll++;
        if(ll1I < 5) l1lI.push(i.charAt(ll1I)); else if(ll1I
            < i.length) ll1l.push(i.charAt(ll1I));
        ll1I++;
        if(Il1l < 5) l1lI.push(s.charAt(Il1l)); else if(Il1l
            < s.length) ll1l.push(s.charAt(Il1l));
        Il1l++;
        if(w.length + i.length + s.length + e.length == ll1l.length + l1lI.length + e.length) break;
    }
    var lI1l = ll1l.join('');
    var I1lI = l1lI.join('');
    ll1I     = 0;
    var l1ll = [];
    for (lIll = 0; lIll
    < ll1l.length; lIll += 2) {
        var ll11 = -1;
        if(I1lI.charCodeAt(ll1I) % 2) ll11 = 1;
        l1ll.push(String.fromCharCode(parseInt(lI1l.substr(lIll, 2), 36) - ll11));
        ll1I++;
        if(ll1I >= l1lI.length) ll1I = 0;
    }
    return l1ll.join('');
}


exports.getLinkDownloadByUrl = getLinkDownloadByUrl;
