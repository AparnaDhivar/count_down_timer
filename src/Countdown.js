import React, { useState , useEffect} from "react";
import { Button, Form, InputGroup } from 'react-bootstrap'
import "./Countdown.css";

function Countdown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [inputDate, setInputDate] = useState("1 Jan 2023");
    const [currentDate, setCurrentDate] = useState(inputDate);

    useEffect(() => {
        const changingDate = new Date(inputDate);
        const currentDate = new Date();
        const totalSeconds = (changingDate - currentDate) / 1000;
    
        setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
        setHours(Math.floor(totalSeconds / 3600) % 24);
        setMinutes(Math.floor(totalSeconds / 60) % 60);
        setSeconds(Math.floor(totalSeconds % 60));
      }, [currentDate]);
    
      function formatTime(time) {
        return time < 10 ? `0${time}` : time;
      }
    
      const onChangeHandler = (event) => {
        setInputDate(event.target.value);
      };
    
      const onClickHandler = () => {
        setCurrentDate(inputDate);
      };


    return (
        <div className="countdown-container">
            <div className="countdown-values row">
                <div className="countdown-value col">
                    <p className="big-text">{days}</p>
                    <span>days</span>
                </div>
                <div className="countdown-value col">
                    <p className="big-text">{hours}</p>
                    <span>hours</span>
                </div>
                <div className="countdown-value col">
                    <p className="big-text">{minutes}</p>
                    <span>minutes</span>
                </div>
                <div className="countdown-value col">
                    <p className="big-text">{seconds}</p>
                    <span>seconds</span>
                </div>
            </div>
            <div className="countdown-input-button" onChange={onChangeHandler}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter Date - 1 January 2023"
                        aria-label="date"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <div className="d-grid gap-2" onClick={onClickHandler}>
                    <Button variant="secondary" size="lg">
                        Count Down
                    </Button>
                </div>
            </div>
        </div>

    );
}

export default Countdown;