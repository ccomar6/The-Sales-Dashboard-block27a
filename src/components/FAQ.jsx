import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>FAQ</Typography>
      <Typography variant="h6" gutterBottom>
        Here you can find the answers to some of the most frequently asked questions.
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Question 1?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero totam iure esse excepturi quas laborum labore corporis, iste doloribus voluptates cum temporibus inventore maiores, accusamus facere veniam, sunt velit illo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Question 2?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae, tempora quo ipsam nobis ipsa esse atque numquam sint sapiente aliquam voluptates nam provident eligendi nihil! Molestiae doloremque dolorum similique!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Question 3?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis corrupti neque. Repellendus accusantium unde quia mollitia voluptatem, blanditiis cupiditate incidunt facere harum at. Voluptatem dolorum animi obcaecati quibusdam impedit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default FAQ;
