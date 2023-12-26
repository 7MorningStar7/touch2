var $ = document;
var item1 = $.getElementById('item11')
var item2 = $.getElementById('item22')
var item3 = $.getElementById('item33')
var item4 = $.getElementById('item44')
item1.addEventListener('touchstart', function () {
    item1.style.backgroundColor="black"
})
item2.addEventListener('touchmove', function () {
    item1.style.backgroundColor="red"
})
item1.addEventListener('touchend', function () {
    item1.style.backgroundColor="blue"
})
item1.addEventListener('touchcancel', function () {
    item1.style.backgroundColor="yellow"
})