
const domains={
Frontend:["HTML","CSS","JavaScript","React","TypeScript","Next.js","Testing","Deployment"],
Backend:["Node.js","Express","REST APIs","MongoDB","SQL","Docker","System Design"],
AI:["Python","Statistics","Machine Learning","Deep Learning","PyTorch","Transformers","LLMs"],
CyberSecurity:["Networking","Linux","Web Security","Ethical Hacking","SOC"],
Cloud:["Linux","AWS","Azure","Docker","Kubernetes","CI/CD"]
};

const grid=document.getElementById('grid');
function render(q=''){
grid.innerHTML='';
Object.keys(domains).filter(d=>d.toLowerCase().includes(q.toLowerCase())).forEach(d=>{
const c=document.createElement('div');
c.className='card';
c.innerHTML=`<h2>${d}</h2><p>${domains[d].length} roadmap steps</p>`;
c.onclick=()=>showRoadmap(d);
grid.appendChild(c);
});
}
function showRoadmap(d){
grid.style.display='none';
document.getElementById('roadmap').classList.remove('hidden');
document.getElementById('title').textContent=d;
document.getElementById('steps').innerHTML=domains[d].map((s,i)=>`<div class='node'>${i+1}. ${s}</div>`).join('');
}
function back(){
grid.style.display='grid';
document.getElementById('roadmap').classList.add('hidden');
}
document.getElementById('search').oninput=e=>render(e.target.value);
render();
