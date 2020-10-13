import React from 'react';

interface TitleProps {
  text: string;
}

function Title(props: TitleProps){
  return <h1>{props.text}</h1>
}

function App() {
  return (
    <div className="App">
     <Title text="1 - Hello "/>
     <Title text="2 - Hello "/>
     <Title text="3 - Hello "/>
    </div>
  );
}

export default App;
