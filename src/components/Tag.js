import React  from 'react';
import { useState } from 'react';
// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Tag() {
  const [tag, setTag] = useState('car');

  // const [gif,setGif] = useState('');
  // const [loading, setLoading] = useState("false");

  // async function fetchData (){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])

  function changeHandler(event){
    setTag(event.target.value);
  }

  const {gif, loading, fetchData} = useGif(tag);
  function clickHandler(){
    fetchData(tag);
  }

  return (
    <div className="w-1/2  bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className=" mt-[15px] text-3xl uppercase underline font-bold">
        Random {tag} Gif
        </h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt="" width="450" />)
      }

      <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" 
      onChange = {changeHandler}
      // onChange={(event) => setTag(event.target.value)} 
      value={tag} />

      <button onClick={clickHandler}
      className="w-10/12 bg-yellow-500 text-xl py-2 rounded-lg font-bold mb-[20px] hover:bg-yellow-700">
        Generate
      </button>

    </div>
  )
}

export default Tag