 // Data for Borrowed Books
 const borrowedData = {
    labels: ['Today', 'This Month', 'This Year'],
    datasets: [{
      label: 'Books Borrowed',
      data: [120, 3500, 40000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  // Data for Returned Books
  const returnedData = {
    labels: ['Today', 'This Month', 'This Year'],
    datasets: [{
      label: 'Books Returned',
      data: [80, 3100, 36500],
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1
    }]
  };

  // Config for Borrowed Chart
  const borrowedConfig = {
    type: 'bar',
    data: borrowedData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    },
  };

  // Config for Returned Chart
  const returnedConfig = {
    type: 'bar',
    data: returnedData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    },
  };

  // Render Borrowed Chart
  const borrowedChart = new Chart(
    document.getElementById('borrowedChart'),
    borrowedConfig
  );

  // Render Returned Chart
  const returnedChart = new Chart(
    document.getElementById('returnedChart'),
    returnedConfig
  );