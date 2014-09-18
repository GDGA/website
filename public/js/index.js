var tabs = document.querySelector('paper-tabs');
var list = document.querySelector('post-list');
var map = document.querySelector('google-map');

tabs.addEventListener('core-select', function() {
    list.show = tabs.selected;
});