let data = fetchData();
let result;

if (data) {
  result = processData(data);
} else {
  result = 'No data';
}

let resultEdited = data ? processData(data) : "no data";