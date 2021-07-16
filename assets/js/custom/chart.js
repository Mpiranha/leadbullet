const data = {
    datasets: [{
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        label: 'My First Dataset',
        data: [70, 40],
        backgroundColor: [
            '#08a5b2',
            '#9f9b9b',
        ],
        hoverOffset: 4
    }]
};

var options = {
    cutout: 90
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        cutout: 22,
        rotation: 0,
        spacing: 5,
        responsive: true,
        legend: {
            display: false
        },
    },

};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);

Chart.register({
    beforeDraw: function (chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = "75%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
    }
});