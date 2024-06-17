import Button from '@mui/material/Button';
import SearchBox from './search_box/SearchBox.jsx'

function App() {
  let handleClick = () => {
    console.log("button was clicked");
  };

  return (
    <div>
      <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick}>
        Click me here
      </Button>

    <SearchBox/>

    </div>
  );
}

export default App