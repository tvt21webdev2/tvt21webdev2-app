import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { Button, Typography } from '@mui/material';


export default function MUITimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" sx={{width: 20, height: 20, borderWidth: 3}}/>
          <TimelineConnector sx={{width: 3, height: 80}}/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="subtitle1">
            1860
          </Typography>
          <Typography variant="body1">
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <Button onClick={() => console.log("click")}></Button>
            <TimelineDot variant="outlined" color="primary" sx={{width: 20, height: 20, borderWidth: 3}}/>
        </TimelineSeparator>
        <TimelineContent>2022</TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
