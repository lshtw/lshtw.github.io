// import {ApexCharts} from 'apexcharts';


let joinAsCarrierButton = $('.carriers__join-button');


joinAsCarrierButton.on('click', function () {
    $('.ui.basic.modal').modal({
        centered: false
    }).modal('show')
    ;
});

$('.ui.rating').rating();

var options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
};

// var chart = new ApexCharts(document.querySelector('.statistic__diagram'), options);
//
// chart.render();