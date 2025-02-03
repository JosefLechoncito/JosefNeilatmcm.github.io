const jsonString = '{"name": "Josh", "age": 20, "hobby": "Gaming"}';
const jsonObject = JSON.parse(jsonString);
const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); 