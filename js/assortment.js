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

var count1 = 0;
var item1 = document.getElementById('botelke_1');
var item1_text = document.getElementById('botelke_1_text');

function slider1() {
    if(count1==0){
        item1.style.background = "url('img/assortment_page/catalog-1_1.png') no-repeat";
        item1_text.innerText = "стекло 0.5л";
        count1+=1;
    }else{
        item1.style.background = "url('img/assortment_page/catalog-1.png')";
        item1_text.innerText = "стекло 0.25л";
        count1-=1;
    }
    item1.style.margin = "0 auto";
    item1.style.width = "323px";
    item1.style.height = "535px";
    item1.style.backgroundSize = "358px";
    item1.style.backgroundRepeat = "no-repeat";
    item1.style.backgroundPositionX = "50%";
    item1.style.marginBottom = "32px";


}


var count2 = 0;
var item2 = document.getElementById('botelke_2');
var item2_text = document.getElementById('botelke_2_text');

function slider2() {
    if(count2==0){
        item2.style.background = "url('img/assortment_page/bottle_1.png')";
        item2_text.innerText = "пэт 1л";
        count2+=1;
    }else if(count2==1){
        item2.style.background = "url('img/assortment_page/bottle_1_5.png')";
        item2_text.innerText = "пэт 1.5л";
        count2+=1;
    }else{
        item2.style.background = "url('img/assortment_page/bottle_05.png')";
        item2_text.innerText = "пэт 0.5л";
        count2=0;
    }
    item2.style.margin = "0 auto";
    item2.style.width = "323px";
    item2.style.height = "535px";
    item2.style.backgroundSize = "358px";
    item2.style.backgroundRepeat = "no-repeat";
    item2.style.backgroundPositionX = "50%";
    item2.style.marginBottom = "32px";
}


var count3 = 0;
var item3 = document.getElementById('botelke_3');
var item3_text = document.getElementById('botelke_3_text');

function slider3() {
    if(count3==0){
        item3.style.background = "url('img/assortment_page/bottle_19.png') no-repeat";
        item3_text.innerText = "пэт 19л Кокшетау,Петp.";
        count3+=1;
    }else{
        item3.style.background = "url('img/assortment_page/bottle_5.png')";
        item3_text.innerText = "пэт 5л";
        count3-=1;
    }
    item3.style.margin = "0 auto";
    item3.style.width = "323px";
    item3.style.height = "535px";
    item3.style.backgroundSize = "358px";
    item3.style.backgroundRepeat = "no-repeat";
    item3.style.backgroundPositionX = "50%";
    item3.style.marginBottom = "32px";
}


var count4 = 0;
var item4 = document.getElementById('botelke_4');
var item4_text = document.getElementById('botelke_4_text');
function slider4() {
    if(count4==0){
        item4.style.background = "url('img/assortment_page/glass_05.png') no-repeat";
        item4_text.innerText = "стекло 0.5л";
        count4+=1;
    }else{
        item4.style.background = "url('img/assortment_page/glass_025.png')";
        item4_text.innerText = "стекло 0.25л";
        count4-=1;
    }
    item4.style.margin = "0 auto";
    item4.style.width = "323px";
    item4.style.height = "535px";
    item4.style.backgroundSize = "358px";
    item4.style.backgroundRepeat = "no-repeat";
    item4.style.backgroundPositionX = "50%";
    item4.style.marginBottom = "32px";
}

var count5= 0;
var item5 = document.getElementById('botelke_5');
var item5_text = document.getElementById('botelke_5_text');

function slider5() {
    if(count5==0){
        item5.style.background = "url('img/assortment_page/soda_1.png')";
        item5_text.innerText = "пэт 1л";
        count5+=1;
    }else if(count5==1){
        item5.style.background = "url('img/assortment_page/soda_1_5.png')";
        item5_text.innerText = "пэт 1.5л";
        count5+=1;
    }else{
        item5.style.background = "url('img/assortment_page/soda_05.png')";
        item5_text.innerText = "пэт 0.5л";
        count5=0;
    }
    item5.style.margin = "0 auto";
    item5.style.width = "323px";
    item5.style.height = "535px";
    item5.style.backgroundSize = "358px";
    item5.style.backgroundRepeat = "no-repeat";
    item5.style.backgroundPositionX = "50%";
    item5.style.marginBottom = "32px";
}
