
var options1 = {
    chart: {
        type: 'line',
        height: 350,
        width: '100%',
        toolbar: false
    },
    dataLabels: {
        formatter:undefined,
        show: false
    },

    series: [{
        // name: 'sales',
        // data: [45,58,55,58,58,68]
        data: [{
            x: 'февраль',
            y: 45
        }, {
            x: 'март',
            y: 58
        },
            {
                x: 'апрель',
                y: 55
            },
            {
                x: 'май',
                y: 58
            },
            {
                x: 'июнь',
                y: 58
            },
            {
                x: 'июль',
                y: 68
            }]
    }],
    xaxis: {
        // categories: ['февраль', 'март', 'апрель', 'май', 'июнь', 'июль']
    },
    yaxis: {
        tickAmount: 4,
        min: 40,
        max: 80,
        forceNiceScale: true
    },
    stroke: {
        width: 2,
        colors: ['#135CA9']
    },
    tooltip: {
        theme: 'white',
        marker: {
          show: false
        },
        x: {
            show: false
        },
        y: { formatter: undefined,
            title: {
                formatter: function () {
                    return ''
                }
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector('.growth-dynamics__diagram'), options1);

chart.render();

var options2 = {
    chart: {
        type: 'radialBar',
        height: '200px',
        width: '200px',
    },
    plotOptions: {
        radialBar: {
            track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                shadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                }
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    fontSize: '32px'
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
        },
    },
    series: [98],
    labels: ['Average Results'],
        title: {
            text: 'День в день',
            align: 'center',
            offsetY: 150
    }

};


var chart = new ApexCharts(
    document.querySelector(".timely-delivery__diagram"),
    options2
);

chart.render();