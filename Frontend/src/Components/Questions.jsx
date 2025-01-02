import React, { useEffect, useState } from "react";
import axios from "axios";
function Questions() {
  const [questions, setquestions] = useState([]);
  const [page, setPage] = useState(1);
  const [limit,setLimit]= useState(5)
  const fecthQuestions = async() => {
    try {
      const  api = `http://localhost:5000/questions?page=${page}&limit=${limit}`
      const res = await axios.get(api);
      setquestions(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    fecthQuestions();
  },[page])

  const handlePageNext = ()=>{
   if(questions.length < limit){
    return alert('+')
   }
    setPage((prev)=>prev+1);
  }
 const handlePagePrev = ()=>{
    if(page <= 1){
        return alert('-')
       }
        setPage((prev)=>prev-1);
      }
 
  return <div>
  {questions?.map((ques,i)=>(
   <div key={ques._id} style={{ marginBottom: "20px" }}>
   <strong>Question {i + 1 + (page - 1) * limit}:</strong>
   <div>{ques.question}</div>
   <div>
     <em>Answer:</em> {ques.answer}
   </div>
 </div>
  ))}
    <button onClick={handlePagePrev}>Prev</button>
    <button onClick={handlePageNext}>next</button>
  </div>;
}

export default Questions;
