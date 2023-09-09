import React, { useEffect } from 'react'
import { useState } from 'react';
import { RELATED_VIDEO_API } from '../Utils/Constant';
import RelatedCard from './RelatedCard';
import { Link } from 'react-router-dom';

const Recom = () => {

    const [RecomDetails , setRecomDetails] = useState([]);

    useEffect(() => {
        getDetail();
    } , [])

    const getDetail = async () => {
        const data = await fetch(RELATED_VIDEO_API);
        const json = await data.json();
        // console.log(json);
        setRecomDetails(json?.items);
    }

  return (
    <div className='flex flex-wrap gap-2'>
        {RecomDetails.map((detail) => (
            <Link key = {detail.id} to = {"/watch?v=" + detail.id}><RelatedCard info = {detail} /></Link>
        ))}
    </div>
  )
}

export default Recom
