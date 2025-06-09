import ComplexComment from "./ComplexComment";

const comment = {
  author: {
    name: "John Doe",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
  text: "I really enjoyed this article!",
  date: new Date(),
};

function App() {
  return (
    <div className="App">
      <ComplexComment
        author={comment.author}
        text={comment.text}
        date={comment.date}
      />
    </div>
  );
}

export default App;