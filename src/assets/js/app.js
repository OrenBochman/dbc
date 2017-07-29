"use strict";

import $ from 'jquery';
import whatInput from 'what-input';
import {dataLayer} from './dl';
//import * as analytics from 'multiple-trackers.js';

window.$ = $;

import Foundation from 'foundation-sites';


// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

var dl= new dataLayer();
var posts =dl.getPosts(new Date(2015,3,21),new Date(2017,6,25),10,null);
console.log(posts);
var authors = dl.getAuthors();
console.log(authors);
var categories = dl.getCategories();
console.log(categories);
var products = dl.getAllProducts()
console.log(products);



