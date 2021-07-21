am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartbar", am4charts.XYChart);

    // Add data
    chart.data = [{
        "country": "USA",
        "visits": 0
    }, {
        "country": "China",
        "visits": 1
    }, {
        "country": "Japan",
        "visits": 1
    }, {
        "country": "Germany",
        "visits": 3
    }, {
        "country": "UK",
        "visits": 1
    }, {
        "country": "France",
        "visits": 4
    }, {
        "country": "India",
        "visits": 2
    }, {
        "country": "Spain",
        "visits": 4
    }, {
        "country": "Netherlands",
        "visits": 6
    }];

    // Create axes

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
        if (target.dataItem && target.dataItem.index & 2 == 2) {
            return dy + 25;
        }
        return dy;
    });

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

}); // end am4core.ready()

am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Exclude Antartica
    polygonSeries.exclude = ["AQ"];

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.polygon.fillOpacity = 0.6;


    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(0);

    // Add image series
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.mapImages.template.tooltipText = "{title}";
    imageSeries.mapImages.template.propertyFields.url = "url";

    var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.radius = 3;
    circle.propertyFields.fill = "color";

    var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle2.radius = 3;
    circle2.propertyFields.fill = "color";


    circle2.events.on("inited", function (event) {
        animateBullet(event.target);
    })


    function animateBullet(circle) {
        var animation = circle.animate([{
            property: "scale",
            from: 1,
            to: 5
        }, {
            property: "opacity",
            from: 1,
            to: 0
        }], 1000, am4core.ease.circleOut);
        animation.events.on("animationended", function (event) {
            animateBullet(event.target.object);
        })
    }

    var colorSet = new am4core.ColorSet();

    imageSeries.data = [{
        "title": "Brussels",
        "latitude": 50.8371,
        "longitude": 4.3676,
        "color": colorSet.next()
    }, {
        "title": "Copenhagen",
        "latitude": 55.6763,
        "longitude": 12.5681,
        "color": colorSet.next()
    }, {
        "title": "Paris",
        "latitude": 48.8567,
        "longitude": 2.3510,
        "color": colorSet.next()
    }, {
        "title": "Reykjavik",
        "latitude": 64.1353,
        "longitude": -21.8952,
        "color": colorSet.next()
    }, {
        "title": "Moscow",
        "latitude": 55.7558,
        "longitude": 37.6176,
        "color": colorSet.next()
    }, {
        "title": "Madrid",
        "latitude": 40.4167,
        "longitude": -3.7033,
        "color": colorSet.next()
    }, {
        "title": "London",
        "latitude": 51.5002,
        "longitude": -0.1262,
        "url": "http://www.google.co.uk",
        "color": colorSet.next()
    }, {
        "title": "Peking",
        "latitude": 39.9056,
        "longitude": 116.3958,
        "color": colorSet.next()
    }, {
        "title": "New Delhi",
        "latitude": 28.6353,
        "longitude": 77.2250,
        "color": colorSet.next()
    }, {
        "title": "Tokyo",
        "latitude": 35.6785,
        "longitude": 139.6823,
        "url": "http://www.google.co.jp",
        "color": colorSet.next()
    }, {
        "title": "Ankara",
        "latitude": 39.9439,
        "longitude": 32.8560,
        "color": colorSet.next()
    }, {
        "title": "Buenos Aires",
        "latitude": -34.6118,
        "longitude": -58.4173,
        "color": colorSet.next()
    }, {
        "title": "Brasilia",
        "latitude": -15.7801,
        "longitude": -47.9292,
        "color": colorSet.next()
    }, {
        "title": "Ottawa",
        "latitude": 45.4235,
        "longitude": -75.6979,
        "color": colorSet.next()
    }, {
        "title": "Washington",
        "latitude": 38.8921,
        "longitude": -77.0241,
        "color": colorSet.next()
    }, {
        "title": "Kinshasa",
        "latitude": -4.3369,
        "longitude": 15.3271,
        "color": colorSet.next()
    }, {
        "title": "Cairo",
        "latitude": 30.0571,
        "longitude": 31.2272,
        "color": colorSet.next()
    }, {
        "title": "Pretoria",
        "latitude": -25.7463,
        "longitude": 28.1876,
        "color": colorSet.next()
    }];



}); // end am4core.ready()


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