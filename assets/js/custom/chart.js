var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgba(169, 180, 216, 0.42)',
                borderColor: 'rgb(124, 148, 205)',
                data: [0, 10, 5, 2, 20, 30, 45],

            },
            {
                label: 'Second',
                backgroundColor: 'rgba(169, 217, 221, 0.42)',
                borderColor: 'rgb(154, 216, 226)',
                data: [0, 45, 7, 8, 70, 100, 5]
            }
        ]
    },

    // Configuration options go here
    options: {}
});