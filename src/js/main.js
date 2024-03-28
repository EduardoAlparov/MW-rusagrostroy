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
import productSlider from './productSlider';
import extendedSearch from './extendedSearch';
import bricks from './bricks';
import animations from './animations';
import revealBlocks from './revealBlocks';
import listViewToggle from './listViewToggle';
import aboutResultsSlider from './aboutResultsSlider';
import projectsCards from './projectsCards';
import fancybox from './fancybox';
import printBtn from './print';
import sharing from './sharing';

import solutionsCarouselSwiper from './solutionsCarouselSwiper';
import peculiarityCardClickHandler from './peculiarityCardClickHandler';
import tourSectionAnimation from './tourSectionAnimation';
import locationMapsControl from './locationMapsControl';
import plansSwiperControl from './plansSwiperControl';
import stagesSectionSwiper from './stagesSectionSwiper';
import peculiaritiesNavMobileSwiper from './peculiaritiesNavMobileSwiper';
import galleriesSwiper from './galleriesSwiper';
import galleryTooltipControl from './galleryTooltipControl';
import stagesFancyboxSwiper from './stagesFancyboxSwiper';
import generalPlanSwitcher from './generalPlanSwitcher';
import headingsAnimations from './headingsAnimations';
import closeItself from './closeItself';
import locationItemsWrap from './locationItemsWrap';

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
    productSlider();
    extendedSearch();
    bricks();
    animations();
    revealBlocks();
    listViewToggle();
    aboutResultsSlider();
    projectsCards();
    fancybox();
    printBtn();
    sharing();

    solutionsCarouselSwiper();
    peculiarityCardClickHandler();
    tourSectionAnimation();
    locationMapsControl();
    plansSwiperControl();
    stagesSectionSwiper();
    peculiaritiesNavMobileSwiper();
    galleriesSwiper();
    galleryTooltipControl();
    stagesFancyboxSwiper();
    generalPlanSwitcher();
    headingsAnimations();
    closeItself();
    locationItemsWrap();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
