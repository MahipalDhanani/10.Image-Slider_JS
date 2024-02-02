// let flag = 2;
// slider(flag);

// function show(y){
//     flag = flag + y;
//     slider(flag);
// }

// function slider(num){
//     let slides = document.getElementsByClassName('img');

//     if(num == slides.length){
//         flag = 0;
//         num = 0;
//     }

//     if(num < 0){
//         flag = slides.length-1;
//         num = slides.length-1;
//     }

//     for(let x of slides){
//         x.style.display = 'none';
//     }

//     slides[num].style.display = 'block';

// }


// =-=-=-=-=-=-=-=-=-=-=-=-=-=

// let flag = 0;

// function show(b) {
//   flag = flag + b;
//   slide(flag);
// }
// function slide(x) {
//   let img = document.getElementsByClassName("img");
//   // console.log(img);

//   if(x == img.length){
//         flag=0;
//         x=0;
//   }
//   if(x < 0 ){
//     flag=img.length-1;
//     x=img.length-1;

// }


//   for (let a of img) {
//     a.style.display = "none";
//   }
//   img[x].style.display = "block";
// }

// slide(flag);


// =-=-=-=-=-=-=-=-=-=-=-=-=-=


let flag=0;
slide(flag);

function show(a){
    flag=flag+a;
    slide(flag);
}


function slide(x){

    let img=document.getElementsByClassName("img");
    
    if(x == img.length){
        flag=0;
        x=0;
        
    }
    if(x < 0){
        flag= img.length-1;
        x=img.length-1;
        
    }
    
    for(let key of img){
        key.style.display="none";
    }
    img[x].style.display="block";

}
