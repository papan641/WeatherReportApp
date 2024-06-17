import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
export default function SearchBox(){
    return(
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <from>
             <TextField id="city" label="City Name" variant="outlined" required />
            
             <Button variant="contained"type="submit">
                Search
                </Button>
            </from>
            </div>
    );
}