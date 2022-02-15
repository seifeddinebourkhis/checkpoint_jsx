import photo from './photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">seif </h1>

<br/> 

<img src={photo} alt="photo" />

<br />

<img src="/dragon-ball-z.jpg" alt="dragon-ball-z" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
