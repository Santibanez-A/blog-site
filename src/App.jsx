import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const articles = [
    {
      id: 1,
      title: "First Post",
      date: "June 2026",
      preview: "My first article.",
    },
  ];

  return (
    <>
      <Header name="My Blog" />
      <About
        image="https://via.placeholder.com/150"
        about="This is my blog."
      />
      <ArticleList articles={articles} />
    </>
  );
}

export default App;