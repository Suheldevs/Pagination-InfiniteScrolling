import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function InfinitScroll() {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchQuestions = async () => {
    try {
      const api = `http://localhost:5000/questions?page=${page}&limit=10`;
      const res = await axios.get(api);
      console.log(res)
      if (res.data.length > 0) {
        setQuestions((prevQuestions) => [...prevQuestions, ...res.data]);
      } else {
        setHasMore(false); 
      }
    } catch (err) {
      console.error('Error fetching questions:', err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [page]);

  return (
    <div>
      <InfiniteScroll
        dataLength={questions.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
        endMessage={<p>No more questions</p>}
      >
        <div>
          {questions.map((ques, i) => (
           <div key={`${ques._id}-${i}`} style={{ marginBottom: '20px' }}>
              <strong>Question {i + 1}:</strong>
              <div>{ques.question}</div>
              <div>
                <em>Answer:</em> {ques.answer}
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default InfinitScroll;
