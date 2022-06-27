import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';
import menu from './menu';

import rangeSliders from './rangeSliders';
import customSelects from './customSelects';
import rangeSlidersDouble from './rangeSlidersDouble';
import autosizingInputs from './autosizingInputs';
import introPromo from './introPromo';
import showAll from './showAll';
import planDropdowns from './planDropdowns';
import projectNewsSlider from './projectNewsSlider';
import contactsMap from './contactsMap';
import featuresSlider from './featuresSlider';
import projectMap from './projectMap';


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import catalogSidebar from './catalogSidebar';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    masks();
    validation();
    anchorLinks();
    accordions();
    autosizingInputs();
    modals();
    tabs();
    menu();
    rangeSliders();
    customSelects();
    rangeSlidersDouble();
    introPromo();
    showAll();
    planDropdowns();
    projectNewsSlider();
    contactsMap();
    featuresSlider();
    projectMap(); 
    catalogSidebar();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
