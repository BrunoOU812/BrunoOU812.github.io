let index=0;
let calc=(-1 * ((720 *2) + 95 ));
let project=[];
let circle=[];
let size=[];
let scrolled=false;
for(i=0;i<5;i++){
    project.push(document.querySelectorAll(".projects__project")[i]);
    circle.push(document.querySelectorAll(".projects__circle")[i]);
    i>2?
    size.push(`projects__circle--2`):
    size.push(`projects__circle--${i}`);
}
size.push(`projects__circle--1`);
const prev=()=>{
    index>0?index<5?index--:index=4:index=0;
    project.forEach(item=>item.style.transform=`translateX(${index*calc}px)`);
    circle.forEach((item,i)=>item.classList.remove(size[i]));
    let first=size.shift();
    size.push(first);
    circle.forEach((item,i)=>item.classList.add(size[i]));
    console.log(index)
}
const next=()=>{
    console.log("index",index);
    index>=0?index<4?index++:index=4:index=0;
    project.forEach(item=>item.style.transform=`translateX(${index*calc}px)`);
    circle.forEach((item,i)=>item.classList.remove(size[i]));
    let first=size.pop();
    size.unshift(first);
    circle.forEach((item,i)=>item.classList.add(size[i]));
} 

document.querySelector(".projects__widget--left").addEventListener("click",()=>index>0?prev():"");
document.querySelector(".projects__widget--right").addEventListener("click",()=>index<4?next():"");


document.addEventListener('scroll', (e) => {
    if(window.scrollY>500){
        document.querySelector(".nav").style.backgroundColor = "rgba( 0,0,0,0.3)";
    }
    else{
        document.querySelector(".nav").style.backgroundColor = "rgba( 0,0,0,1)";
    };
  });

  document.addEventListener('scroll', () => {
        index<4?window.scrollY>=870?scrolled==false?next():"":"":"";
        window.scrollY>=870?scrolled=true:""
        console.log(scrolled);
    })
