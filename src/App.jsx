
import './App.css'
import FComment from './component/FComment';


const comments = [
  {id:1, author:'Em Linh', content:'Looking good bro', timeAgo:'Today is at 9:00'},
  {id:2, author:'Em Trung', content:'Looking Bad bro', timeAgo:'Today is at 2:00'},
  {id:3, author:'Em Kan', content:'Boring', timeAgo:'Today is at 5:00'},
  {id:4, author:'Em Quoc', content:'No No No', timeAgo:'Today is at 1:00'},

]
function App() {
  const contents= comments.map(item =>{
    return(
        <FComment author={item.author} content={item.content} timeAgo={item.timeAgo}></FComment>
    )
})


  return (
   
     <div className='ui container comments'>
      {contents}
      <h3> ClassComponent</h3>
          <FComment author='Em Linh' content='this is content' timeAgo='Today is at 7:00'></FComment>
          <FComment author='Em Trung' content='this is content' timeAgo='Today is at 7:00'></FComment>
          <FComment author='Em Kan' content='this is content' timeAgo='Today is at 7:00'></FComment>
          <FComment author='Em Quoc' content='this is content' timeAgo='Today is at 7:00'></FComment>
             
  
        </div>
     
    
  );
}

export default App
