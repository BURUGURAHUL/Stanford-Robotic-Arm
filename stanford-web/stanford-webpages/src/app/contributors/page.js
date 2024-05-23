import React from 'react'
import Card from "../components/Card";
import img from '../components/images/default.jpg'
import amritha from './profileimgs/amritha.jpg'
import sudheer from './profileimgs/sudheer.jpg'
import rahul from './profileimgs/rahul.jpg'
import manasha from './profileimgs/manasha.jpg'

const contributor = () => {
  return (
    <div>
      <h1>Contributors</h1>
      <div className='justify-between md:flex'>
        <Card name={"Manasha A"} imgpath={manasha} rollno={"CB.EN.U4AIE22101"} linkedin={"https://www.linkedin.com/in/manasha-arunachalam-531719250/"} github={"https://github.com/Manasha-1204"}/>
        <Card name={"Amritha Nandini"} imgpath={amritha} rollno={"CB.EN.U4AIE22126"} linkedin={"https://www.linkedin.com/in/amrithanandini/"} github={"https://github.com/amri-tah"}/>
        <Card name={"Sudheer Kumar Chowdary"} imgpath={sudheer} rollno={"CB.EN.U4AIE22151"} linkedin={"http://www.linkedin.com/in/sudheer-chowdary-yerra-459660252"} github={"https://github.com/sudheerkumarchowdary"}/>
        <Card name={"B Rahul"} imgpath={rahul} rollno={"CB.EN.U4AIE22161"} linkedin={"/"} github={"https://github.com/BURUGURAHUL"}/>
      </div>
    </div>
  )
}

export default contributor
