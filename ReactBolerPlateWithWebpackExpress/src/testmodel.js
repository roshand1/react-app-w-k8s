module.exports = 
{
    headers:[
      {firstName:'FirstName'}, 
      {lastName:'LastName'},
      {email:'UserEmail'},
      {gender: 'Gender'}],
    data:[{
      firstName:'Alok',
      lastName:'Shrestha',
      email:'as@hgweb.com',
      gender:'Male',
      hasNestedTable:true,
      showNestedTable:false,
      nestedData:{
        headers:[
          {hobbies:'Hobbies'}, 
          {proffession:'Profession'},
          {relationship:'Relationship'}],
        data:[{
          hobbies:'Music',
          proffession:'Test Engineer',
          relationship:'Married'
        },{
          hobbies:'Fly Aeroplane',
          proffession:'Software engineer',
          relationship:'Married'
        }]
      }
    },{
      firstName:'Prakash',
      lastName:'Shrestha',
      email:'ps@hgweb.com',
      gender:'Male',
      hasNestedTable:true,
      showNestedTable:true,
      nestedData:{
        headers:[
          {hobbies:'Hobbies'}, 
          {proffession:'Profession'},
          {relationship:'Relationship'}],
        data:[{
          hobbies:'Play Pingpong',
          proffession:'Software Test/Automation Engineer',
          relationship:'Married with Neelam'
        },{
          hobbies:'Cook Maasu',
          proffession:'Software engineer at Austin',
          relationship:'Married with Neelam again'
        }]
      }
    },{
      firstName:'Utsav ',
      lastName:'Siwakoti',
      email:'as@hgweb.com',
      gender:'Male',
    },{
      firstName:'Anjita',
      lastName:'Thapa',
      email:'at@hgweb.com',
      gender:'Female',
    },{
      firstName:'Neelam',
      lastName:'Shrestha',
      email:'ns@hgweb.com',
      gender:'Female',
      hasNestedTable:true,
      showNestedTable:true,
      nestedData:{
        headers:[
          {hobbies:'Hobbies'}, 
          {proffession:'Profession'},
          {relationship:'Relationship'}],
        data:[{
          hobbies:'Sing',
          proffession:'Product owner',
          relationship:'Married with Neelam'
        },{
          hobbies:'Dance',
          proffession:'Marketing manager',
          relationship:'Married with Prakash'
        }]
      }
    }]
  }