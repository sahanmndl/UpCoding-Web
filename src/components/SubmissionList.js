import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const SubmissionList = ({ darkmode, params }) => {
  return (
    <>
      <h2
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Recent Submissions
      </h2>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {params.map((subs, index) => (
          <ListItem key={`item-${index}`}>
            <ListItemText
              primary={subs.problem.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Points: {subs.problem.points}
                  </Typography>
                  {" | Rating:" + subs.problem.rating}
                  <br />
                  {subs.verdict}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SubmissionList;
