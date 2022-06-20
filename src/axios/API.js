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


