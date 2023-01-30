import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLatestNews } from '../Store/News/news.actions';

const Latest = () => {
  const {latest} = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLatestNews());
  }, []);
  console.log(latest);
  return (
    <div>Latest</div>
  )
}

export default Latest