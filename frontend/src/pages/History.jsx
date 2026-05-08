import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";


import { IconButton } from "@mui/material";
export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);

  const [meetings, setMeetings] = useState([]);

  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        console.log("Fetched meeting history:", history);
        setMeetings(history);
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };

    fetchHistory();
  }, []);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

return (

  <div className="historyContainer">

    <div className="historyNavbar">
      <div className="historyTitle">
  <h2>Your Meetings</h2>
  <p>Total Meetings: {meetings.length}</p>
</div>

      <IconButton onClick={() => routeTo("/home")}>
        <HomeIcon sx={{ color: "white" }} />
      </IconButton>
    </div>

    <div className="historyContent">
      {meetings.length !== 0 ? (
        meetings.map((e, i) => (
          <Card key={i} className="historyCard">
            <CardContent>
              <Typography className="meetingCode">
                {e.meetingCode}
              </Typography>

              <Typography className="meetingDate">
                {formatDate(e.date)}
              </Typography>
            <br/>
              <Button
                variant="contained"
                className="rejoinBtn"
                onClick={() => routeTo(`/${e.meetingCode}`)}
              >
                Rejoin
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="noHistory">No meetings yet <br/> 
          Start your first meeting now!
        </p>
      )}
    </div>

  </div>
);
 }


//  git commit -m "Improved UI and responsive design for video conferencing app"