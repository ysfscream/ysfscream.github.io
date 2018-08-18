const intro = () => {
  const myIntro = {
    Name: 'Yu Shifan',
    'Phone / weChat': '18669086712',
    Education: 'Dalian Neusoft University of Information',
    Employment: 'EMQ (emqx.io) in Hangzhou',
    Apply: 'FE / Full Stack',
    Skills: [
      'HTML(5)',
      'CSS(3)',
      'Javascript(ES6+)',
      'Vue(Buckets)',
      'React(Buckets)',
      'Nodejs(Koa, express)',
      'Python(3, flask)',
      'MongoDB(mongoose)',
      'PostgresSQL(...)',
      'Docker'
    ]
  }
  return JSON.stringify(myIntro, null, 2)
}

export default intro
