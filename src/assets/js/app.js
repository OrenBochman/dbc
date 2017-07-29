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
dl.getPosts(4);

