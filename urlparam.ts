function urlparam(){
  const q=location.href.indexOf('?')
  const r={}
  if(q>0){
    const p=location.href.slice(q+1)
    const a=p.split('&')
    for(const it of a){
      const b=it.split('=')
      r[b[0]]=b[1]}}
  return r}
