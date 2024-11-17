// import React from 'react';

const BookMarks = ({bookMarks, readingTime}) => {
    return (
        <div className="md:w-1/3 mt-6">
            <h1>Total Reading Time: {readingTime}</h1>
        <h1 className="text-3xl font-bold mb-3">All Book Marks: {bookMarks.length}</h1>
        <div >
           {
            bookMarks?.map((bookmark, idx) => <h1 key={idx} className="text-2xl bg-white p-5 m-2 rounded shadow-md">{idx + 1}. {bookmark?.title}</h1>)
           }
        </div>
        </div>
    );
};

export default BookMarks;