import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = (props) => {
  const [index, setIndex] = useState(0);
  const [prevv, setPrevv] = useState(true);
  const [next, setNext] = useState(false);
  const [restart, setRestart] = useState(true);
  function handleRestart() {
    setIndex(0);
  }
  function handlePrev() {
    if (index > 0) {
      let i = index;
      setIndex(i - 1);
    }
  }
  function handleNext() {
    if (index < props.slides.length - 1) {
      let i = index;
      setIndex(i + 1);
    }
  }
  useEffect(() => {
    if (index === props.slides.length - 1) {
      setRestart(false);
      setPrevv(false);
      setNext(true);
    } else if (index === 0) {
      setRestart(true);
      setPrevv(true);
      setNext(false);
    } else {
      setRestart(false);
      setPrevv(false);
      setNext(false);
    }
  }, [index]);
  return (
    <>
      <h1 data-testid="title">{props.slides[index].title}</h1>
      <p data-testid="text">{props.slides[index].text}</p>
      <button
        data-testid="button-restart"
        onClick={handleRestart}
        disabled={restart}
      >
        Restart
      </button>
      <button data-testid="button-prev" onClick={handlePrev} disabled={prevv}>
        Prev
      </button>
      <button data-testid="button-next" onClick={handleNext} disabled={next}>
        Next
      </button>
    </>
  );
};

export default App;
