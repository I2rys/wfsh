"use strict";

// Dependencies
const request = require("request-async")
const crypto = require("crypto")

// Main
function hash(link){
    return new Promise(async(resolve)=>{
        const response = await request(link)
        const hash = crypto.createHash("sha256")
        hash.update(response.body)

        const faviconHash = hash.digest("hex")

        resolve(faviconHash)
    })
}

module.exports = hash