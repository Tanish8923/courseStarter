import React, { useState } from 'react'
import Card from './Card';
import NoDataFound from './NoDataFound';

const Cards = ({courses , category}) => {

  // const courses = props.courses;
  // const category = props.category;

  const [likedCourses , setLikedCourses] = useState([]);
  function getCourses(){
    if(category === "All"){
      let allCourses =[];
      Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      })
    })
    return allCourses;
    }else{
      return courses[category];
    }
  }

  if(courses === null){
    return (<NoDataFound/>)
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map( (course)=>{
          return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })
      }
    </div>
  )
}

export default Cards
