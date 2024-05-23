import React from 'react'
import Card from "../components/Card";
import img from '../components/images/default.jpg'
import amritha from './profileimgs/amritha.jpg'

const contributor = () => {
  return (
    <div>
      <h1>Contributors</h1>
      <div className='flex justify-between'>
        <Card name={"Manasha A"} imgpath={img} rollno={"CB.EN.U4AIE22101"} linkedin={"/"} github={"https://github.com/Manasha-1204"}/>
        <Card name={"Amritha Nandini"} imgpath={amritha} rollno={"CB.EN.U4AIE22126"} linkedin={"https://www.linkedin.com/in/amrithanandini/"} github={"https://github.com/amri-tah"}/>
        <Card name={"Sudheer Kumar Chowdary"} imgpath={img} rollno={"CB.EN.U4AIE22151"} linkedin={"/"} github={"https://github.com/sudheerkumarchowdary"}/>
        <Card name={"B Rahul"} imgpath={img} rollno={"CB.EN.U4AIE22161"} linkedin={"/"} github={"https://github.com/BURUGURAHUL"}/>
      </div>
    </div>
  )
}

export default contributor
