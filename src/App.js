import { useEffect, useState } from 'react';
import {filterData} from './data'
import {toast} from "react-toastify"

import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';

const apiUrl = process.env.REACT_APP_API_URL;

function App() {

  const [courses , setCourses] = useState(null);
  const [loading , setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title)


  useEffect(()=>{
    async function fetchData (){
      setLoading(true);
      try {
        let res = await fetch(apiUrl);
        let output = await res.json();
        // console.log(output);
        
        setCourses(output.data);
        // console.log(courses);
      } catch (error) {
        toast.error("something went wrong (Network issue)")
      }
      setLoading(false);
    }
    fetchData();
  },[]);

  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-bgDark2">
        <Navbar/>
        <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) :(<Cards courses={courses} category={category}/>)
        }
        </div>
        </div>
    </div>
  );
}

export default App;