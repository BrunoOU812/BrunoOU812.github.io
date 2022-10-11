let index=0;
let calc=(-1 * ((720 *2) + 95 ));
let project=document.querySelectorAll(".projects__project")[0];
// for(i=0;i<5;i++){
//     project.push()
// }
const prev=()=>{
    index>0?index<5?index--:index=4:index=0;
    document.querySelectorAll(".projects__project")[0].style.transform=`translateX(${index*calc}px)`;
    document.querySelectorAll(".projects__project")[1].style.transform=`translateX(${index*calc}px)`;
    document.querySelectorAll(".projects__project")[2].style.transform=`translateX(${index*calc}px)`;
    document.querySelectorAll(".projects__project")[3].style.transform=`translateX(${index*calc}px)`;
    document.querySelectorAll(".projects__project")[4].style.transform=`translateX(${index*calc}px)`;
    // document.querySelectorAll(".projects__circle")[0].classList.remove(`projects__circle--${index+2}`);
    // document.querySelectorAll(".projects__circle")[0].classList.add(`projects__circle--${index+1}`);
    console.log(index)
}
const next=()=>{
    index>=0?index<4?index++:index=4:index=0;
    document.querySelectorAll(".projects__project")[0].style.transform=`translateX(${index*calc}px)`;
    document.querySelectorAll(".projects__project")[1].style.transform=`translateX(${index*calc}px)`;
    document.querySelectorAll(".projects__project")[2].style.transform=`translateX(${index*calc}px)`;
    document.querySelectorAll(".projects__project")[3].style.transform=`translateX(${index*calc}px)`;
    document.querySelectorAll(".projects__project")[4].style.transform=`translateX(${index*calc}px)`;
    // if(index!=0){
    // document.querySelectorAll(".projects__circle")[0].classList.remove(`projects__circle--${index}`);
    // document.querySelectorAll(".projects__circle")[0].classList.add(`projects__circle--${index+1}`);
    // document.querySelectorAll(".projects__circle")[1].classList.remove(`projects__circle--${index+1}`);
    // document.querySelectorAll(".projects__circle")[1].classList.add(`projects__circle--${index>5?index-3:index}`);
    // }
    console.log(index)
}


document.querySelector(".projects__widget--left").addEventListener("click",prev);
document.querySelector(".projects__widget--right").addEventListener("click",next);