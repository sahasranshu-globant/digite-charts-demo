/**
 * Created by sahasranshuroy on 29/06/16.
 */
$(document).ready(function() {

    var chart1 = c3.generate({
        bindto: '#cont2 .chart-container',
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ]
        },
        size: {
            width: 300,
            height: 100
        }
    });

    var chart2 = c3.generate({
        bindto: '#cont5 .chart-container',
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ]
        }
    });
});
