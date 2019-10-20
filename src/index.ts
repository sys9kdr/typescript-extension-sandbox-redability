// vim:set foldmethod=marker:
import fs from 'fs' // node-std
import createDOMPurify from  'dompurify' // require styleだと動かなかった。なぜ...？
// const util = require('util')
// In real usecase, we use browser.
// const { JSDOM } = require('jsdom') // add install node-canvas
import { JSDOM } from 'jsdom'
// const Readability = require('../node_modules/readability/Readability')
import Readability from '../node_modules/readability/Readability'
// const fs = require('fs')

// const { JSDOM } = jsdom
const pseudowindow = (new JSDOM('')).window
const x = createDOMPurify(pseudowindow)

console.log(x, Readability)

// memo {{{
// console.log(util.inspect(DOMPurify, {showHidden: false, depth:null}))
// console.log(util.inspect(DOMPurify.default(), {showHidden: false, depth:null}))
// console.log(typeof DOMPurify(), typeof DOMPurify.default())

// const pseudowindow = (new JSDOM('')).window
// const DOMPurify = createDOMPurify(pseudowindow)

// 実際にはfetchでCORS超えて取りに行かなあかん
// }}}
// pathはプロジェクトルートから見たもの
const mystring = fs.readFileSync('./sample/index.html', 'utf-8')


// console.log(mystring)

const doc = new JSDOM(mystring, {url: "https://example.com/none-this-page"})
const reader = new Readability(doc.window.document, {})
const article = reader.parse()

console.log(article)
