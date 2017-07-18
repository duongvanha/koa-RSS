const aes     = require('../aes');
const cheerio = require('cheerio');
const Promise = require('bluebird');
const fs      = require('fs');
const request = require('request');

const requestOptions = {
    headers: {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0"
    }
};


function getData(url, opt) {
    return new Promise((resolve, reject) => {
        request(url, opt || requestOptions, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                return resolve(body);
            } else {
                return reject(error);
            }
        });
    })
}

function getLinkDownloadByUrl(url) {
    if (url.indexOf('http://www.phimMoi.net/') === -1 && url.indexOf('http://www.phimmoi.net/') === -1) url = `http://www.phimmoi.net/${url}`;
    if (url.indexOf('html') === -1) url = `${url}xem-phim.html`;
    return getData(url, null)
        .then(response => {
            let codeDownload = cheerio.load(response)('script[onload="checkEpisodeInfoLoaded(this)"]').attr('src');
            return getData(codeDownload.replace('javascript', 'json'), Object.assign({}, requestOptions, {json: true}));
        })
        .then(response => {
            const {episodeId, medias} = response;
            const password            = `PhimMoi.Net@${episodeId}`;
            if (medias) return medias.map(video => ({
                url       : decodeUrl(video.url, password),
                type      : video.type,
                width     : video.width,
                height    : video.height,
                resolution: parseFloat(video.resolution),
                label     : video.resolution
            }));
        })
}

function decodeUrl(url, password) {
    try {
        //noinspection JSUnresolvedFunction
        return aes.dec(url, password)
    } catch (err) {
    }
}


exports.getLinkDownloadByUrl = getLinkDownloadByUrl;