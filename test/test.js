const css = require('../src');
const assert = require('chai').assert;
const _ = require('lodash');

module.exports = [

  ['Basics',

   ['Single selector and attribute', () => {
     assert.equal(css({
       'body': {
         'background-color': 'red',
       },
     }), 'body {\n  background-color: red;\n}');
   }],

   ['Pseudo-selectors', () => {
     assert.equal(css({
       'div:before': {
         'color': 'red',
       },
     }), 'div:before {\n  color: red;\n}');
     assert.equal(css({
       'div': {
         '&:before': {
           'color': 'red',
         },
       },
     }), 'div:before {\n  color: red;\n}');
   }],

   ['Star selector', () => {
     assert.equal(css({
       '*': {
         'display': 'none',
       },
     }), '* {\n  display: none;\n}');
   }],

  ],

  ['Grouping',

   ['Basic grouping', () => {
     assert.equal(css({
       'h1,h2': {
         'color': 'blue',
       },
     }), 'h1 {\n  color: blue;\n}\nh2 {\n  color: blue;\n}');
   }],

   ['Grouping with "&" operator and pseudo-selector', () => {
     assert.equal(css({
       'h1': {
         '&:before,&:after': {
           'color': 'green',
         },
       },
     }), 'h1:before {\n  color: green;\n}\nh1:after {\n  color: green;\n}');
   }],

  ],

  ['Validation',

   ['Unknown property name', () => {
     assert.throws(_.partial(css, {
       'h1': {
         'notreal': '100%',
       },
     }));
   }],

   ['Using a vendor prefix', () => {
     assert.throws(_.partial(css, {
       'body': {
         '-moz-transform': 'translate3d()',
       },
     }));
   }],

  ],

];

// // valid selectors
// [
//   '*'
//   'a'
//   'a[foo]'
//   'a[foo="bar"]'
//   'a[foo~="bar"]'
//   'a[foo^="bar"]'
//   'a[foo$="bar"]'
//   'a[foo*="bar"]'
//   'a[foo|="en"]'
//   'a:root'
//   'a:nth-child(n)'
//   'a:nth-last-child(n)'
//   'a:nth-of-type(n)'
//   'a:nth-last-of-type(n)'
//   'a:first-child'
//   'a:last-child'
//   'a:first-of-type'
//   'a:last-of-type'
//   'a:only-child'
//   'a:only-of-type'
//   'a:empty'
//   'a:link'
//   'a:visited'
//   'a:active'
//   'a:hover'
//   'a:focus'
//   'a:target'
//   'a:lang(fr)'
//   'a:enabled'
//   'a:disabled'
//   'a:checked'
//   'a::first-line'
//   'a::first-letter'
//   'a::before'
//   'a::after'
//   'a.myclass'
//   'a#myid'
//   'a:not(s)'
//   'a b'
//   'a > b'
//   'a + b'
//   'a ~ b'
// ]

// // grouping
// 'h1,h2,h3'

// // invalid grouping
// 'h1,h2..foo,h3'

// // namespaces
// [
//   '@namespace foo url(http://www.example.com)',
//   'foo|h1',
//   'foo|*',
//   '|h1',
//   '*|h1',
//   'h1'
// ]

// // media queries
// // ...
