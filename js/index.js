'use strict';

import animationScroll from "./modules/animationScroll.js";
import header from "./modules/header.js";
import skills from "./modules/skills.js";

const documentReady = () => {
  header();
  skills();
  animationScroll();
};

document.addEventListener('DOMContentLoaded', documentReady);