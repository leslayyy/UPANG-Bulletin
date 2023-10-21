const express = require('express');
const router = express.Router();
const connection = require('./db');
const multer = require('multer'); // Middleware for handling file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

// Get data from your database
router.get('/data', (req, res) => {
  connection.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      console.error('Error retrieving data:', err);
      res.status(500).json({ error: 'Error retrieving data' });
    } else {
      res.json(results);
    }
  });
});

// Create a new post
router.post('/post', upload.array('images', 5), (req, res) => {
  const newPost = JSON.parse(req.body.post);
  const images = req.files.map((file) => file.buffer);

  const sql =
    'INSERT INTO bulletin_posts (title, text, meta_description, slug_title, featured, image_data) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [
    newPost.title,
    newPost.text,
    newPost.metaDescription,
    newPost.slugTitle,
    newPost.featured,
    images[0], // Assuming you only store one image
  ];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting post data:', err);
      res.status(500).json({ error: 'Error inserting post data' });
    } else {
      const postId = results.insertId;
      connection.query('SELECT * FROM bulletin_posts WHERE id = ?', [postId], (err, postResult) => {
        if (err) {
          console.error('Error fetching post data:', err);
          res.status(500).json({ error: 'Error fetching post data' });
        } else {
          const post = postResult[0];
          res.status(200).json({ message: 'Post data submitted successfully', post: post });
        }
      });
    }
  });
});

// Update user data
router.put('/data/:id', (req, res) => {
  const id = req.params.id;
  const { name, studentNumber, age, gender, symptoms, potentialIssues } = req.body;

  const sql = 'UPDATE user_data SET name=?, student_number=?, age=?, gender=?, symptoms=?, potential_issues=? WHERE id=?';
  const values = [name, studentNumber, age, gender, JSON.stringify(symptoms), JSON.stringify(potentialIssues), id];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error updating user data:', err);
      res.status(500).json({ error: 'Error updating user data' });
    } else {
      res.status(200).json({ message: 'User data updated successfully' });
    }
  });
});

// Delete user data
router.delete('/data/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'DELETE FROM user_data WHERE id=?';
  const values = [id];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error deleting user data:', err);
      res.status(500).json({ error: 'Error deleting user data' });
    } else {
      res.status(200).json({ message: 'User data deleted successfully' });
    }
  });
});

module.exports = router;
