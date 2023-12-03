
const casual = require('casual');
const n = 1500000; // Change this to the desired number of objects
const arrayOfObjects = [];

for (let i = 0; i < n; i++) {
  const first_name = casual.first_name;
  const last_name = casual.last_name;
  const phone = casual.phone;

    const newObj = {
    
        id: i + 1,
        name: first_name,
        lastName: last_name,
        phone: phone,


    };

    arrayOfObjects.push(newObj);
}

//console.log(arrayOfObjects)
module.exports=arrayOfObjects; 