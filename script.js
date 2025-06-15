document.addEventListener("DOMContentLoaded",()=>{
const allSliders=document.querySelectorAll('.slider');
let index=0;
const sliderGroups=Array.from(allSliders).map(slider=>slider.querySelectorAll('.slide'));
setInterval(()=>{
sliderGroups.forEach(slides=>{
slides.forEach(slide=>slide.classList.remove('active'));
slides[index%slides.length].classList.add('active');
});
index++;
},3000);
const commentSlider=document.querySelector('.comments-slider');
const comments=document.querySelectorAll('.comment');
const dots=document.querySelectorAll('.slider-dot');
let currentIndex=0;
function showComment(index){
comments.forEach(comment=>comment.classList.remove('active'));
dots.forEach(dot=>dot.classList.remove('active'));
comments[index].classList.add('active');
dots[index].classList.add('active');
commentSlider.style.transform=`translateX(-${index*100}%)`;
}
dots.forEach(dot=>{
dot.addEventListener('click',function(){
currentIndex=parseInt(this.getAttribute('data-index'));
showComment(currentIndex);
});
});
setInterval(()=>{
currentIndex=(currentIndex+1)%comments.length;
showComment(currentIndex);
},5000);
const cursor=document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);
document.addEventListener('mousemove',e=>{
cursor.style.top=`${e.clientY}px`;
cursor.style.left=`${e.clientX}px`;
});
});
const observerOptions={
threshold:0.1,
rootMargin:'0px 0px -50px 0px'
};
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.animationPlayState='running';
}
});
},observerOptions);
const contactSection=document.querySelector('.contact-section');
if(contactSection){
observer.observe(contactSection);
}
document.querySelectorAll('.contact-btn').forEach(btn=>{
btn.addEventListener('click',function(e){
const ripple=document.createElement('span');
const rect=this.getBoundingClientRect();
const size=Math.max(rect.width,rect.height);
const x=e.clientX-rect.left-size/2;
const y=e.clientY-rect.top-size/2;
ripple.style.cssText=`
position:absolute;
border-radius:50%;
background:rgba(255,255,255,0.6);
transform:scale(0);
animation:ripple 0.6s linear;
width:${size}px;
height:${size}px;
left:${x}px;
top:${y}px;
pointer-events:none;
`;
this.appendChild(ripple);
setTimeout(()=>{
ripple.remove();
},600);
});
});
const style=document.createElement('style');
style.textContent=`
@keyframes ripple {
to {
transform: scale(4);
opacity: 0;
}
}
`;
document.head.appendChild(style);
