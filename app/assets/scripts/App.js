import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevelaOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

const mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');
const stickyHeader = new StickyHeader();
