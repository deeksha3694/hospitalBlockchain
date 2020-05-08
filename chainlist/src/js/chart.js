
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        title: {
            text: 'ECG vs Time'
        },
        yAxis: {
            title: {
                text: 'ECG level'
            }
        }
    };

    options.data = {
       csvURL: 'http://localhost:3000/003_1.csv',
       enablePolling: true,
       dataRefreshRate: 2
    }

    Highcharts.chart('container', options);

   });

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        title: {
            text: 'ECG vs Time'
        },
        yAxis: {
            title: {
                text: 'ECG level'
            }
        }
    };

    options.data = {
       csvURL: 'http://localhost:3000/003_1.csv',
       enablePolling: true,
       dataRefreshRate: 2
    }

    Highcharts.chart('container1', options);

   });