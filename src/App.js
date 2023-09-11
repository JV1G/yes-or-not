import Header from './Header';
import Content from './Content';
import './App.css';

function App() {
  const pills = [
    {title: "BestTitle1", author: "BestAuthor1", text: "BestText1", redpilled: 0, bluepilled: 50}, 
    {title: "BestTitle2", author: "BestAuthor2", text: "BestText2", redpilled: 10, bluepilled: 15},
    {title: "BestTitle3", author: "BestAuthor3", text: "BestText3", redpilled: 5, bluepilled: 20},
    {title: "BestTitle4", author: "BestAuthor4", text: "BestText4", redpilled: 25, bluepilled: 10}  
  ];
  return (
    <div className="App">
      <Header title="RedpillOrNot"/>
      <Content pills = {pills}/>
    </div>
  );
}

export default App;
