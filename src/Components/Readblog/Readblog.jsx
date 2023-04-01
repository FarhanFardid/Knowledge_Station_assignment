import React from 'react';
import './Readblog.css';

const Readblog = (props) => {
     const {blog} = props;
     const{bookmarks} =props;
     let b_length = bookmarks.length;
     let show ;
     let ReadTime = 0;

     if(b_length > 0){
       show = true;
     }
     else{
        show = false;
     }

     for(const b of blog){
        ReadTime = ReadTime + parseInt(b.Read_time);
     }
     
    return (
        <div className='blog-read'>
             <h1>Blogs </h1>
            <div className='time'>
                <h3>Spent Time on Read: {ReadTime} min</h3>
              
            </div>
            <div>
                    <h2>Bookmarked Blogs: {b_length}</h2>
                    {show && bookmarks.map(bookmark => <li className='list'>{bookmark.Blog_title}</li> )}
                     
                    
                </div>
        </div>
    );
};

export default Readblog;