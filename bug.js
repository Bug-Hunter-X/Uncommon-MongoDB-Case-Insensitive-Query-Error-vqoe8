```javascript
const query = { name: /John/i }; // Case-insensitive search for 'John'
const options = { projection: { _id: 0, name: 1 } }; // Select only the name field

db.collection('users').find(query, options).toArray().then(results => {
  console.log(results);
}).catch(err => {
  console.error('Error querying database:', err);
});
```