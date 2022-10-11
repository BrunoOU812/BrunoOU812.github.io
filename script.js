let index=0;
let calc=(-1 * ((720 *2) + 95 ));
let project=[];
let circle=[];
let size=[];
for(i=0;i<5;i++){
    project.push(document.querySelectorAll(".projects__project")[i]);
    circle.push(document.querySelectorAll(".projects__circle")[i]);
    i>2?
    size.push(`projects__circle--2`):
    size.push(`projects__circle--${i}`);
}
size.push(`projects__circle--1`);
console.log(size);
// size.reverse();
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
// s

document.querySelector(".projects__widget--left").addEventListener("click",()=>index>0?prev():"");
document.querySelector(".projects__widget--right").addEventListener("click",()=>index<4?next():"");