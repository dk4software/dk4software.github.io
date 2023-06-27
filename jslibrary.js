fetch('https://localhost:3000/init')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));
