
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = ["https://focus.youth.cn/article/s?signature=8DpYRNzAGL5bkKE1RBy9gJuJEBwXuODep9g1ov3Xqel0ngwVyZ&uid=54263972&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=37095201&time=1616634043&app_version=2.0.0&sign=1aa4de440fc9adb2832f9d08d8aa036b",
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LMz9RPCNy2qbs8ZyJygaEMLO9lwG2zQJeB&uid=54263972&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=37095340&time=1616634202&app_version=2.0.0&sign=d678f91e02d0fb03d27fce8c5c630797",
"https://focus.youth.cn/article/s?signature=RpqGjEWYvLyBl2g1lqM68efz5e0AUvMDpDY4D56Pd3OMonkQx9&uid=54263972&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=37040984&time=1616634226&app_version=2.0.0&sign=005e3c2d5ad58603db77e5844acd20a3",
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBj92nRi5NWpJU6BK2mvad93krDoJqw0WYn&uid=54263972&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=37041449&time=1616634264&app_version=2.0.0&sign=04e5c7f3b781efc361a5e3ee4cb17e92",
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDjBygMIeOPEWh0nRKJb4K5N3rYk6pmxVGl&uid=54263972&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=37068074&time=1616657300&app_version=2.0.0&sign=1c0f276f7dfe768decb60bcc1942ff27",
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDjJBR9TeOPEWh0nRKJM4K5N3rYk6pmxVGl&uid=54263972&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=37045547&time=1616657328&app_version=2.0.0&sign=ec20118b08af48ae6c38208f8a78b900",
"https://focus.youth.cn/article/s?signature=QB5EzPY3exK9wOd7EnpxJMsJlgLpugWlnv5a8oADjvkbgZRGLV&uid=54263972&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=38228741&time=1620826672&app_version=2.0.0&sign=9490f65ae4003335a33f6aba6667cff6",
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gqMLNquY6gXQfeYdjDLayGDn2Z0PAvkopB&uid=52052526&phone_code=9cc82e5276a098215f522fb9cc40d88c&scid=38275082&time=1620750098&app_version=2.0.2&sign=49f2ec9d4538f314bec810da86219aef",
"https://focus.youth.cn/article/s?signature=gENjGxJw2L6opAMamvB8yATyvok6UO3l0A21nX3kY58KdmBzRO&uid=52052526&phone_code=9cc82e5276a098215f522fb9cc40d88c&scid=38277433&time=1620750122&app_version=2.0.2&sign=4722e057ee1647159339b3636828775c",
"https://focus.youth.cn/article/s?signature=RQ3qz2nVgKk9rep70KPBlJUXr2OkukRGMm54yXmv0ZJLWANOM5&uid=52052526&phone_code=9cc82e5276a098215f522fb9cc40d88c&scid=38276706&time=1620750133&app_version=2.0.2&sign=a893754f40d43e7d18fb0b1811c1ec1e",
"https://focus.youth.cn/article/s?signature=3nLo8BVlwPd52WM79D2lzpi0nlZ3fmwb0k049Ee0q6OyNbJvDX&uid=52052526&phone_code=9cc82e5276a098215f522fb9cc40d88c&scid=38281143&time=1620750144&app_version=2.0.2&sign=b524961e42203689d330cd37eb0b253a",
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YYwZApC8mKY0HVB9WLE7L3yAP6WMnmlGK9&uid=52052526&phone_code=9cc82e5276a098215f522fb9cc40d88c&scid=38276417&time=1620750153&app_version=2.0.2&sign=5a1672c55da708d7317584147785e37a",
"https://focus.youth.cn/article/s?signature=gDKBr63RYWdkby97bMxJ8lSejoEdUJOYbrx4LwQPGzxp0AvZME&uid=52052526&phone_code=9cc82e5276a098215f522fb9cc40d88c&scid=38275058&time=1620750164&app_version=2.0.2&sign=04c0cfa3c09b835327e777ea7fdad8c8",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q28mkgtQmW93hNoAP2E7rny295VAlmPWzY&uid=52052526&phone_code=9cc82e5276a098215f522fb9cc40d88c&scid=38275528&time=1620750173&app_version=2.0.2&sign=57d5601c0ab75bce60b4cb18cbcb001c",
"https://focus.youth.cn/article/s?signature=gENjGxJw2L6opAMamvvwlofxQlD8hO3XDo61nX3kY58KdmBzRO&uid=56283033&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=38394474&time=1621222418&app_version=2.0.0&sign=7233e987eb789a6bc5d344f13b15cd42",
"https://focus.youth.cn/article/s?signature=k5Bv92bmMjwJEOP7888KYeTVBRjMfzq2XGV7gxne6rYKdpWVoR&uid=56283033&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=38395087&time=1621222463&app_version=2.0.0&sign=04ffc454dec8ec30283429b64e4a7039",
"https://focus.youth.cn/article/s?signature=RQ3qz2nVgKk9rep70KKAErCxNlAdhkRewYG4yXmv0ZJLWANOM5&uid=56283033&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=38395087&time=1621222482&app_version=2.0.0&sign=3e6a4bc1cf548274748b3cbe2487aa65",
"https://focus.youth.cn/article/s?signature=8DpYRNzAGL5bkKE1RXXQqQUZBDvNCOY3WAG7ov3Xqel0ngwVyZ&uid=56283033&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=38399714&time=1621222502&app_version=2.0.0&sign=a00914579d5ac78613ab024f52a6f038",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q22025unPMXViNo5KqO7rny295VAlmPWzY&uid=56283033&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=38373897&time=1621222533&app_version=2.0.0&sign=1a3864dc2a72af7d249824a700d7a628",
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBJZQWASBWGPjh6ZvXmjad93krDoJqw0WYn&uid=56283033&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=38434676&time=1621222556&app_version=2.0.0&sign=ace17318719be124174fc448b449a289",
"https://focus.youth.cn/article/s?signature=QB5EzPY3exK9wOd7EnJoynSWg8ZoigW5PwLa8oADjvkbgZRGLV&uid=56283033&phone_code=fbf16e523f1c4fe10c4dc1501c5189b4&scid=38441930&time=1621222662&app_version=2.0.0&sign=2df6df1dcf5dc21da1e04fe54bc718cd",]

let encodearticles;


let headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Referer": "https://focus.youth.cn/",
    "Host": "script.baertt.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000231) NetType/WIFI Language/zh_CN",
    "Accept-Language": "zh-cn"
};

!(async() => {
    for (let i = 0; i < articles.length; i++) {
		encodearticles = encodeURIComponent(encodeURIComponent(articles[i]));
        nowTime = new Date().getTime();
        wxck = md5(nowTime);
        $.log(wxck);
		
        await storage();
        await $.wait(3000);

        await visit();
        await $.wait(3000);

        await openpage();
        await $.wait(3000);

        await callback();
        await $.wait(3000);

    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

function storage() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/storage?t=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp2`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function visit() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/visit?type=1&si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp3`;

        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function openpage() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/openpage?referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp5`;
        const request = {
            url: url,
            headers: headers,

        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function callback() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/callback?si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp6`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
             : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
            new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
            this.http = new s(this),
            this.data = null,
            this.dataFile = "box.dat",
            this.logs = [],
            this.isMute = !1,
            this.isNeedRewrite = !1,
            this.logSeparator = "\n",
            this.startTime = (new Date).getTime(),
            Object.assign(this, e),
            this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.timeout : r;
                const[o, h] = i.split("@"),
                a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e),
                r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
            this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                            e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}
