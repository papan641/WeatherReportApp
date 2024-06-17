import React, { useState } from 'react';  // Ensure useState is imported from React
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox() {
    let [city, setCity] = useState("");  // Initialize state

    let handleChange = (evt) => {
        setCity(evt.target.value);  // Update state on input change
    };

    let handleSubmit = (evt) => {  // Correct function name
        evt.preventDefault();
        console.log(city);
        setCity("");  // Reset the city state
    };

    return (
        <div className="search-box">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>  {/* Correct function reference */}
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}
