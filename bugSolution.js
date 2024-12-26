```javascript
// Convert name field to lowercase for consistent comparison
db.collection('users').aggregate([
  { $project: { nameLower: { $toLower: '$name' }, name: 1 } },
  { $match: { nameLower: { $regex: 'john', $options: 'i' } } },
  { $project: { _id: 0, name: 1 } }
]).toArray().then(results => {
  console.log(results);
}).catch(err => {
  console.error('Error querying database:', err);
});
```