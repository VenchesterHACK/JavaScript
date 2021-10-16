/**
 * Implement the function shorten(s, n).
 *
 * It should shorten the string to the first 'n' chars and add '...' if the shortening did happen.
 * */

import { shorten } from './functions.js';

const longString = 'this string is quite long, especially for its age.'
const shortString = 'a short one'
const shortString1 = 'this string is too long to fit our ad'

console.log(shorten(longString, 20));
console.log(shorten(shortString, 20));
console.log(shorten(shortString1, 21));