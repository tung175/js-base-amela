// Sử dụng function để đóng gói logic và giảm lặp code

// console.log('Starting process...');
// if (process.env.NODE_ENV === 'development') {
//   console.log('development mode');
//   // Development-specific logic
// }
// if (process.env.NODE_ENV === 'production') {
//   console.log('production mode');
//   // Production-specific logic
// }

// console.log('Process started.');

const startProcess = () => {
  console.log('Starting process...');
  const environment = process.env.NODE_ENV;
  
  if (environment === 'development') {
    logMode('development');
    // Development-specific logic
  } else if (environment === 'production') {
    logMode('production');
    // Production-specific logic
  }
  
  console.log('Process started.');
}