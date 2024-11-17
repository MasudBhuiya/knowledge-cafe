
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  console.log(bookMarks);

  const handleBookMark = blog =>{
    const allBookmarks = [...bookMarks, blog];
    setBookmarks(allBookmarks);
  }

  const handleReadingTime = (time, id)=>{
    console.log(time);
    const totalTime = readingTime + time;
    setReadingTime(totalTime);
    const remainingBookmarks = bookMarks.filter(bmk => bmk.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className='max-w-[1440px] mx-auto'>
      <Header></Header>
      <hr />
      <div className='md:flex gap-5'>
      <Blogs handleReadingTime={handleReadingTime} handleBookMark={handleBookMark}></Blogs>
      <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>
    </div>
  )
}

export default App
