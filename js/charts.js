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


    $('.grid-stack-item').on('resizestop', function (event, ui) {
        var grid = this;
        var element = event.target;
        console.log($(grid).width()+" :: "+$(grid).height());
        chart2.resize({height:$(grid).height()-145, width:$(grid).width()-56
        });
    });
});
