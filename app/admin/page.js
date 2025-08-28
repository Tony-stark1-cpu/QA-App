export const dynamic = "force-dynamic"; 

import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import clientPromise from '@/lib/mongodb';

export default async function Admin() {
  const client = await clientPromise;
  const db = client.db('romanticSpicyDB');
  const responses = await db
    .collection('responses')
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel - Responses
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Category</strong></TableCell>
              <TableCell><strong>Question</strong></TableCell>
              <TableCell><strong>Answer</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {responses.map((res) => (
              <TableRow key={res._id.toString()}>
                <TableCell>{res.category}</TableCell>
                <TableCell>{res.question}</TableCell>
                <TableCell>{res.answer}</TableCell>
                <TableCell>
                  {new Date(res.createdAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
