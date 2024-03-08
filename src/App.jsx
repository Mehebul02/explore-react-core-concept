import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor';
import Information from './Information';
import BookStore from './BookStore'
function App() {
  // const student =['Mehebul Alif','Md Somrat Ali','Razwan Khan','Neam Sarkar']
  // const department =['Computer']
  const books=[
    {id:1,name:'System Analysis & Design',price:145},
    {id:2,name:'Network Administration & System',price:185},
    {id:3,name:'E-Commerce',price:215},
  ]
  const students =[
    {id:1, name:'Mehebul Alif', department:'Computer Technology',roll:'532509',semester:'7th',shift:'1st'},
    {id:2, name:'Razwan Khan', department:'Computer Technology',roll:'532469',semester:'7th',shift:'1st'},
    {id:3, name:'Md Somrat Ali', department:'Computer Technology',roll:'532462',semester:'7th',shift:'1st'},
    {id:4, name:'Neam Sarkar', department:'Computer Technology',roll:'532476',semester:'7th',shift:'1st'},
    {id:5, name:'Tahira Khatun', department:'Computer Technology',roll:'532476',semester:'7th',shift:'1st'},
    {id:6, name:'Mst.Borsa Khatun', department:'Computer Technology',roll:'532454',semester:'7th',shift:'1st'},
  ]
  return (
    <>
      <u><h1>Student List</h1></u>
      <BookStore books={books}></BookStore>
         {
          students.map(info => <Information info={info}></Information>)
         }
      


      {/* {
       student.map(name => <Actor name={name} > </Actor>)
      } */}

      {/* <Actor name={'Mehebul Alif'}></Actor>
      <Actor department={'Computer Technology'}></Actor>
      <Actor semester={'7Th'}></Actor> */}

      {/* <Todo task ='Learn React' isDone={true}></Todo>
      <Todo task ='core concept' isDone={false}></Todo>
      <Todo task ='jsx' isDone={true} ></Todo> */}
       {/* <Device name='Laptop' price='66'></Device>
       <Device name='mobile' price='18000'></Device>
       <Device name='watch' price='26013'></Device>
       <Person></Person>
       <Student department='Computer' semester='7th'></Student>
       <Student department={'Electical'} semester={'5th'}></Student>
       <Student></Student>
       <Developer></Developer> */}
    </>
  )
}
function Person(){
  const age =44;
  const money =20
  const person ={name:'mehebul alif',age:20}
  return <h2>I am {person.name} Person age :{age}</h2>
};
// const {department,semester}={department:'Computer',semester:'7th'};
// function Student({department='computer',semester=1}){
//   console.log(department,semester)
//   return (<div className='student'>
//     <h1>This is a Student</h1>
//     <h1>Department:{department}</h1>
//     <h1>Semester: {semester}</h1>
//   </div>
//   )
// };
function Developer(){
  const developerStyle={
margin:'20px',
padding:'20px',
border:'2px solid red',
borderRadius:'10px',

  }
  return (
    <div style={{
      margin:'20px',
      padding:'20px',
      border:'2px solid green',
      borderRadius:'10px',
      
        }}>
      <h1>I am Developer</h1>
      <h1>Coding:</h1>
    </div>
  )
}
function Device(props){
  console.log(props)
  return (
    <div>
      <h4 style={{border:'2px solid red',fontFamily:'sans-serif'}}>This Device: {props.name} price {props.price}</h4>
    </div>
  )
}

export default App
