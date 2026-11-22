import f from'node:fs'
let{MAKEFUN_INPUT_DIR:A='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env
for(let d of f.readdirSync(A)){
let t=f.readFileSync(A+'/'+d+'/level.txt','utf8'),w=t.indexOf('\n'),T=t.replace(/\n/g,''),D=[-w,-1,1,w],L='ulrd',X=[...T.matchAll(/[$*]/g)].map(m=>m.index),p=T.indexOf('@'),m='',pl=p,M=[],o=[],s=0,P=[]
let F=(a,st,s2='')=>{M[a]=st;P[a]=s2;for(let k=4;k--;){let q=a+D[k];if(T[q]!='#'&&!o[q]&&M[q]!=st)F(q,st,s2+L[k])}}
let r=p/w|0,rs=[]
for(let x=w;x--;)o[r*w+x]=1
for(let b of X){if(M[b])continue;let st=++s;F(b,st);rs.push(X.filter(x=>M[x]==st))}
o=[];for(let b of X)o[b]=1
let Y=(rb,q)=>{let Q=[[rb,q,'']],V={}
for(let h=0;h<Q.length;h++){let[bs,pl2,s2]=Q[h]
for(let b of bs)o[b]=1
let st=++s;F(pl2,st)
let k=bs+','+M.indexOf(st)
if(!V[k]){V[k]=1
for(let bi=rb.length;bi--;){let b=bs[bi]
for(let j=4;j--;){let d=D[j],t=b+d
if(M[b-d]!=st||T[t]=='#'||o[t])continue
let nb=bs.slice();nb[bi]=t;nb.sort((a,b)=>a-b)
let mv=s2+P[b-d]+L[j]
if(nb.every(x=>".*".includes(T[x]))){o[t]=1;pl=b;return mv}
Q.push([nb,b,mv])}}}
for(let b of bs)o[b]=0}
return''}
for(let rb of rs){let v=Y(rb,pl);if(!v){m='';break}m+=v}
f.mkdirSync(O+'/'+d,{recursive:!0});f.writeFileSync(O+'/'+d+'/solution.txt',m)}
