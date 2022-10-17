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
    console.log(window.scrollY)
    if(window.scrollY>500&&window.scrollY<1200){
        document.querySelector(".nav").style.backgroundColor = "rgba( 0,0,0,0.3)";
    }
    else{
        document.querySelector(".nav").style.backgroundColor = "rgba( 0,0,0,1)";
    };
    if(window.scrollY>800){
        document.querySelector(".whotech").classList.add(`whotech--hover`);
    }
    else{
        document.querySelector(".whotech").classList.remove(`whotech--hover`);
    };
    document.querySelector(".who").style.transform=`translateX(0))`
window=100
        0
    if(window.scrollY>1747&&window.scrollY<3695){
        // document.querySelector(".who").style.transform=`translateX(calc(-1 * (${window.scrollY-1747}px )))`
        document.querySelector(".technologies").style.transform=`translateX(calc(-1 * (${window.scrollY-(3668)}px )))`;
    }  
    else{
        document.querySelector(".who").style.transform=`translateX(0))`
        // document.querySelector(".whotech").classList.remove(`whotech--hover`);
    };
    if(window.scrollY>4160){
        document.querySelector(".technologies").style.transform=`translateY(calc(-1 * (${window.scrollY-(4170)}px )))`
        // document.querySelector(".whotech").style.transform=`translateY(${window.scrollY-4160}px))`;
    }
  });

  document.addEventListener('scroll', () => {
        index<4?window.scrollY>=870?scrolled==false?next():"":"":"";
        window.scrollY>=870?scrolled=true:""
        console.log(scrolled);
    })

const totalNodes = document.querySelectorAll(".projects__page").length;

for (let i = 0; i < totalNodes; i++) {
    console.log(i);
    document.querySelectorAll(".projects__page")[i].classList.add(`projects__page--${i}`);
    
    document.querySelectorAll(".projects__clickhere")[i].classList.add(`projects__clickhere--${i}`);
    document.querySelectorAll(".projects__a")[i].classList.add(`projects__a--${i}`);
    document.querySelectorAll(".projects__new")[i].classList.add(`projects__new--${i}`);
}

for(let i = 0; i < totalNodes; i++){
    document.querySelector(`.projects__page--${i}`).addEventListener("mouseover", function(){
        console.log("hallo")
            document.querySelector(`.projects__clickhere--${i}`).classList.add("projects__clickhere--hover");
            document.querySelector(`.projects__a--${i}`).classList.add("projects__a--hover");
            document.querySelector(`.projects__new--${i}`).classList.add("projects__new--hover");
        });
        
    document.querySelector(`.projects__page--${i}`).addEventListener("mouseout", function(){
            document.querySelector(`.projects__clickhere--${i}`).classList.remove("projects__clickhere--hover");
            document.querySelector(`.projects__a--${i}`).classList.remove("projects__a--hover");
            document.querySelector(`.projects__new--${i}`).classList.remove("projects__new--hover");
    });
}
