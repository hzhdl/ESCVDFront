import {request} from "./index";


export const getchart1= (urlpre,id,flag)=> request({
  url: urlpre + 'chart1',
  params:{
    'id': id,
    'flag':flag
  }
})

export const getchart2= (urlpre,id,flag)=> request({
  url: urlpre + 'chart2',
  params:{
    'id': id,
    'flag':flag
  }
})

export const getchart3= (urlpre,id,flag)=> request({
  url: urlpre + 'chart3',
  params:{
    'id': id,
    'flag':flag
  }
})

export const getchart4= (urlpre,id,flag)=> request({
  url: urlpre + 'chart4',
  params:{
    'id': id,
    'flag':flag
  }
})

export const gethisinfo= (urlpre,id,flag,limit,pages)=> request({
  url: urlpre + 'hisinfo',
  params:{
    'id': id,
    'flag':flag,
    'limit':limit,
    'pages':pages
  }
})

export const addDcomplie= (urlpre,id,scname,abi,code,bytecode,flag)=> request({
  url: urlpre + 'Dcomplie',
  params:{
    'userid': id,
    'scname':scname,
    'ABI':abi,
    'Code':code,
    'ByteCode':bytecode,
    'flag':flag
  }
})

export const addcomplie= (urlpre,id,scname,bytecode,flag)=> request({
  url: urlpre + 'complie',
  params:{
    'userid': id,
    'scname':scname,
    'ByteCode':bytecode,
    'flag':flag
  }
})

export const login=(urlpre,name,pass)=> request({
  url: urlpre + 'login',
  params:{
    'name': name,
    'psd':pass
  }
})

export const register=(urlpre,name,pass)=> request({
  url: urlpre + 'register',
  params:{
    'name': name,
    'psd':pass
  }
})
