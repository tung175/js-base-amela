// Sử dụng async/await để tránh callback hell và làm code dễ đọc

// getData(function (a) {
//   parseData(a, function (b) {
//     processData(b, function (c) {
//       displayData(c, function (d) {
//         console.log("Done");
//       });
//     });
//   });
// });

const getDataAsync = () => new Promise((resolve) => getData(resolve));
const parseDataAsync = (a) => new Promise((resolve) => parseData(a, resolve));
const processDataAsync = (b) =>
  new Promise((resolve) => processData(b, resolve));
const displayDataAsync = (c) =>
  new Promise((resolve) =>
    displayData(c, () => (console.log("Done"), resolve()))
  );

(async () => {
  try {
    const a = await getDataAsync();
    const b = await parseDataAsync(a);
    const c = await processDataAsync(b);
    await displayDataAsync(c);
  } catch (error) {
    console.error(error);
  }
})();
