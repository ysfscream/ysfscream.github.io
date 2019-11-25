const intro = () => {
  const myIntro = {
    Name: 'Yu Shifan（余仕帆）',
    'Phone / WeChat': '18669086712',
    Email: '894402575bt@gmail.com',
    Education: 'Dalian Neusoft University of Information',
    Employment: 'EMQ (emqx.io) in Hangzhou',
    Apply: 'FE / Full Stack',
    Skills: [
      'HTML(5)',
      'CSS(3)',
      'JavaScript(ES6+)',
      'TypeScript',
      'Vue',
      'React',
      'Nodejs(Koa, Express)',
      'Webpack / Parcel',
      'Echarts / D3.js',
      'Python(3, flask)',
      'MongoDB',
      'PostgresSQL',
      'Git',
      'Vim / VsCode',
      'Docker'
    ]
  }
  return JSON.stringify(myIntro, null, 2)
}

export default intro
