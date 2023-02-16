var animItems = document.querySelectorAll('._anim-items');

window.addEventListener('scroll',animOnScroll);
function animOnScroll(){
    for (let i = 0; i < animItems.length; i++) {

        var elem = animItems[i];
        var distInView = elem.getBoundingClientRect().top - window.innerHeight;
        if (distInView < 0) {
            console.log("yes");
            elem.classList.add("_active");
        } else {
            elem.classList.remove("_active");
        }
    }
}
 
let elements = document.querySelectorAll(".zat");
console.log(elements);
window.addEventListener('scroll', fadeIns); 
function fadeIns() {
    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            console.log("yes");
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIns();



let images = document.querySelectorAll('.healthy_slide_picture img');
console.log(images);
var current = 0;
let sandar = document.querySelector('.healthy_slide_text_count').innerHTML;
var title1 = document.querySelector('.healthy_slide_text_title').innerHTML;
function slider1() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');

    }
    images[current].classList.remove('opacity0');
    document.querySelector('.healthy_slide_text_count').innerHTML='0'+(current+1)+sandar.substring(2);
    if(current==0){
        document.querySelector('.healthy_slide_text_title').innerHTML ='Полезно для семьи';
        document.querySelector('.healthy_slide_text_descr').innerHTML ='TURAN можно и нужно пить взрослым, детям и пожилым – природный баланс минералов идеально усваивается организмом. Природная минеральная питьевая вода TURAN полезна и безопасна для ежедневного употребления всей семьей.';
    }else if(current==1){
        document.querySelector('.healthy_slide_text_title').innerHTML ='Полезно для спорта';
        document.querySelector('.healthy_slide_text_descr').innerHTML ='Во время спорта организм человека активно теряет не только жидкость, но и минеральные соли – кальций, натрий, магний. TURAN идеально подходит для быстрого восстановления водного и кислотно-щелочного равновесия, так как содержит оптимальную минерализацию и pH-баланс 7.5';
    }else if(current==2){
        document.querySelector('.healthy_slide_text_title').innerHTML ='Полезно каждый день';
        document.querySelector('.healthy_slide_text_descr').innerHTML ='Не забывайте взять с собой TURAN в офис, чтобы пить в течение дня. В TURAN содержится природный магний (Mg), снижающий уровень стресса, а также натрий (Na) и кальций (Ca), которые благотворно влияют на сердечный ритм. Для водного баланса ВОЗ рекомендует выпивать не менее 0,4-0,7 л природной минеральной воды в сутки.';
    }
}
document.querySelector('.healthy_slide_text_next').onclick = function(){
    if(current < images.length - 1) {
        current++;
    } else {
        current = 0;
    }
    
    slider1();
};

document.querySelector('.healthy_slide_text_prev').onclick = function(){
    if(current-1== -1) {
        current=images.length-1;
    } else {
        current --;
    }
    slider1();
};

let imges = document.querySelectorAll('.glass_of_water_left img');
console.log(imges);
var cnt = 0;
let sandr = document.querySelector('.glass_of_water_right_count').innerHTML;

function slider2() {
    for (let i = 0; i < imges.length; i++) {
        imges[i].classList.add('opacityzero');
    }
    imges[cnt].classList.remove('opacityzero');
    document.querySelector('.glass_of_water_right_count').innerHTML='0'+(cnt+1)+sandr.substring(2);
    if(cnt==0) document.querySelector('.glass_of_water_right_descr').innerHTML='Не вся вода одинаковая';
    if(cnt==1) document.querySelector('.glass_of_water_right_descr').innerHTML='TURAN единственная в Казахстане живая природная вода';

}
document.querySelector('.glass_of_water_right_button_next').onclick = function(){
    if(cnt < imges.length - 1) {
        cnt++;
    } else {
        cnt = 0;
    }
    slider2();
};
document.querySelector('.glass_of_water_right_button_prev').onclick = function(){
    if(cnt-1== -1) {
        cnt=imges.length-1;
    } else {    
        cnt --;
    }
    slider2();
};