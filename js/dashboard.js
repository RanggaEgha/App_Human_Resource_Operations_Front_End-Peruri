(function($) {
    'use strict';
    $(function() {
        const ctx = document.getElementById('performanceChart').getContext('2d');
        const performanceChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Kadiv', 'Kadept', 'Kasek', 'Pegawai'], // Sumbu X
                datasets: [{
                    label: 'Penggunaan',
                    data: [2000000, 1500000, 1000000, 500000], // Data untuk setiap kategori
                    backgroundColor: [
                        'rgba(31, 59, 179, 0.8)',
                        'rgba(58, 71, 246, 0.8)',
                        'rgba(132, 71, 239, 0.8)',
                        'rgba(85, 109, 255, 0.8)'
                    ],
                    borderColor: [
                        'rgba(31, 59, 179, 1)',
                        'rgba(58, 71, 246, 1)',
                        'rgba(132, 71, 239, 1)',
                        'rgba(85, 109, 255, 1)'
                    ],
                    borderWidth: 1,
                    barThickness: 40,
                    maxBarThickness: 50
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: "#F0F0F0",
                        },
                        ticks: {
                            beginAtZero: true,
                            callback: function(value) {
                                if (value === 0) return '250rb';
                                return value >= 1000000 ? (value / 1000000) + 'jt' : value / 1000 + 'rb';
                            },
                            fontSize: 10,
                            color: "#6B778C",
                            maxTicksLimit: 5
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            fontSize: 10,
                            color: "#6B778C",
                        },
                    }],
                },
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: 'rgba(31, 59, 179, 1)',
                }
            }
        });

        // Inisialisasi untuk Diagram Penggunaan Pulsa
        const ctxPulsa = document.getElementById('performanceChartPulsa').getContext('2d');
        const performanceChartPulsa = new Chart(ctxPulsa, {
            type: 'bar',
            data: {
                labels: ['M975', '7120', '1231', '5435'],
                datasets: [{
                    label: 'Penggunaan',
                    data: [2000000, 1500000, 1000000, 500000],
                    backgroundColor: [
                        'rgba(31, 59, 179, 0.8)',
                        'rgba(31, 59, 179, 0.8)',
                        'rgba(31, 59, 179, 0.8)',
                        'rgba(31, 59, 179, 0.8)'
                    ],
                    borderColor: [
                        'rgba(31, 59, 179, 0.8)',
                        'rgba(31, 59, 179, 0.8)',
                        'rgba(31, 59, 179, 0.8)',
                        'rgba(31, 59, 179, 0.8)'
                    ],
                    borderWidth: 1,
                    barThickness: 40,
                    maxBarThickness: 50
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: "#F0F0F0",
                        },
                        ticks: {
                            beginAtZero: true,
                            callback: function(value) {
                                if (value === 0) return '250rb';
                                return value >= 1000000 ? (value / 1000000) + 'jt' : value / 1000 + 'rb';
                            },
                            fontSize: 10,
                            color: "#6B778C",
                            maxTicksLimit: 5
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            fontSize: 10,
                            color: "#6B778C",
                        },
                    }],
                },
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: 'rgba(31, 59, 179, 1)',
                }
            }
        });
        if ($("#datepicker-popup").length) {
            $('#datepicker-popup').datepicker({
                enableOnReadonly: true,
                todayHighlight: true,
            });
            $("#datepicker-popup").datepicker("setDate", "0");
        }
        if ($("#status-summary").length) {
            var statusSummaryChartCanvas = document.getElementById("status-summary").getContext('2d');;
            var statusData = {
                labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI"],
                datasets: [{
                    label: '# of Votes',
                    data: [50, 68, 70, 10, 12, 80],
                    backgroundColor: "#ffcc00",
                    borderColor: [
                        '#01B6A0',
                    ],
                    borderWidth: 2,
                    fill: false, // 3: no fill
                    pointBorderWidth: 0,
                    pointRadius: [0, 0, 0, 0, 0, 0],
                    pointHoverRadius: [0, 0, 0, 0, 0, 0],
                }]
            };

            var statusOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        display: false,
                        gridLines: {
                            display: false,
                            drawBorder: false,
                            color: "#F0F0F0"
                        },
                        ticks: {
                            beginAtZero: false,
                            autoSkip: true,
                            maxTicksLimit: 4,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                    xAxes: [{
                        display: false,
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: false,
                            autoSkip: true,
                            maxTicksLimit: 7,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                },
                legend: false,

                elements: {
                    line: {
                        tension: 0.4,
                    }
                },
                tooltips: {
                    backgroundColor: 'rgba(31, 59, 179, 1)',
                }
            }
            var statusSummaryChart = new Chart(statusSummaryChartCanvas, {
                type: 'line',
                data: statusData,
                options: statusOptions
            });
        }
        if ($('#totalVisitors').length) {
            var bar = new ProgressBar.Circle(totalVisitors, {
                color: '#fff',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 15,
                trailWidth: 15,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#52CDFF',
                    width: 15
                },
                to: {
                    color: '#677ae4',
                    width: 15
                },
                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });

            bar.text.style.fontSize = '0rem';
            bar.animate(.64); // Number from 0.0 to 1.0
        }
        if ($('#visitperday').length) {
            var bar = new ProgressBar.Circle(visitperday, {
                color: '#fff',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 15,
                trailWidth: 15,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#34B1AA',
                    width: 15
                },
                to: {
                    color: '#677ae4',
                    width: 15
                },
                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });

            bar.text.style.fontSize = '0rem';
            bar.animate(.34); // Number from 0.0 to 1.0
        }
        if ($("#marketingOverview").length) {
            var marketingOverviewChart = document.getElementById("marketingOverview").getContext('2d');
            var marketingOverviewData = {
                labels: ["306628", "306629", "306630", "306631", "306631", "306631", "306631"],
                datasets: [{
                    label: 'Penggunaan',
                    data: [2000000, 1500000, 1000000, 500000, 500000, 500000, 500000], // Data baru sesuai dengan yang diinginkan
                    backgroundColor: "#1F3BB3",
                    borderColor: [
                        '#1F3BB3',
                    ],
                    borderWidth: 0,
                    barThickness: 30, // Ketebalan bar
                    maxBarThickness: 50,
                    fill: true, // 3: no fill
                }]
            };

            var marketingOverviewOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: "#F0F0F0",
                            zeroLineColor: '#F0F0F0',
                        },
                        ticks: {
                            beginAtZero: true,
                            callback: function(value) {
                                if (value === 0) return '250rb';
                                return value >= 1000000 ? (value / 1000000) + 'jt' : value / 1000 + 'rb';
                            },
                            autoSkip: true,
                            maxTicksLimit: 5,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                    xAxes: [{
                        barPercentage: 0.5, // Lebar bar relatif
                        categoryPercentage: 0.5, // Spasi antar bar
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            fontSize: 10,
                            color: "#6B778C",
                        },
                    }],
                },
                legend: false,
                legendCallback: function(chart) {
                    var text = [];
                    text.push('<div class="chartjs-legend"><ul>');
                    for (var i = 0; i < chart.data.datasets.length; i++) {
                        text.push('<li class="text-muted text-small">');
                        text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
                        text.push(chart.data.datasets[i].label);
                        text.push('</li>');
                    }
                    text.push('</ul></div>');
                    return text.join("");
                },
                elements: {
                    line: {
                        tension: 0.4,
                    }
                },
                tooltips: {
                    backgroundColor: 'rgba(31, 59, 179, 1)',
                }
            }

            var marketingOverview = new Chart(marketingOverviewChart, {
                type: 'bar',
                data: marketingOverviewData,
                options: marketingOverviewOptions
            });
            document.getElementById('marketing-overview-legend').innerHTML = marketingOverview.generateLegend();
        }

        if ($("#marketingOverview-dark").length) {
            var marketingOverviewChartDark = document.getElementById("marketingOverview-dark").getContext('2d');
            var marketingOverviewDataDark = {
                labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                datasets: [{
                    label: 'Last week',
                    data: [110, 220, 200, 190, 220, 110, 210, 110, 205, 202, 201, 150],
                    backgroundColor: "#52CDFF",
                    borderColor: [
                        '#52CDFF',
                    ],
                    borderWidth: 0,
                    fill: true, // 3: no fill

                }, {
                    label: 'This week',
                    data: [215, 290, 210, 250, 290, 230, 290, 210, 280, 220, 190, 300],
                    backgroundColor: "#1F3BB3",
                    borderColor: [
                        '#1F3BB3',
                    ],
                    borderWidth: 0,
                    fill: true, // 3: no fill
                }]
            };

            var marketingOverviewOptionsDark = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: "rgba(255,255,255,.05)",
                            zeroLineColor: "rgba(255,255,255,.05)",
                        },
                        ticks: {
                            beginAtZero: true,
                            autoSkip: true,
                            maxTicksLimit: 5,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                    xAxes: [{
                        stacked: true,
                        barPercentage: 0.35,
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: false,
                            autoSkip: true,
                            maxTicksLimit: 7,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                },
                legend: false,
                legendCallback: function(chart) {
                    var text = [];
                    text.push('<div class="chartjs-legend"><ul>');
                    for (var i = 0; i < chart.data.datasets.length; i++) {
                        console.log(chart.data.datasets[i]); // see what's inside the obj.
                        text.push('<li class="text-muted text-small">');
                        text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
                        text.push(chart.data.datasets[i].label);
                        text.push('</li>');
                    }
                    text.push('</ul></div>');
                    return text.join("");
                },

                elements: {
                    line: {
                        tension: 0.4,
                    }
                },
                tooltips: {
                    backgroundColor: 'rgba(31, 59, 179, 1)',
                }
            }
            var marketingOverviewDark = new Chart(marketingOverviewChartDark, {
                type: 'bar',
                data: marketingOverviewDataDark,
                options: marketingOverviewOptionsDark
            });
            document.getElementById('marketing-overview-legend').innerHTML = marketingOverviewDark.generateLegend();
        }
        if ($("#doughnutChart").length) {
            var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
            var doughnutPieData = {
                datasets: [{
                    data: [40, 20, 30, 10],
                    backgroundColor: [
                        "#1F3BB3",
                        "#FDD0C7",
                        "#52CDFF",
                        "#81DADA"
                    ],
                    borderColor: [
                        "#1F3BB3",
                        "#FDD0C7",
                        "#52CDFF",
                        "#81DADA"
                    ],
                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Total',
                    'Net',
                    'Gross',
                    'AVG',
                ]
            };
            var doughnutPieOptions = {
                cutoutPercentage: 50,
                animationEasing: "easeOutBounce",
                animateRotate: true,
                animateScale: false,
                responsive: true,
                maintainAspectRatio: true,
                showScale: true,
                legend: false,
                legendCallback: function(chart) {
                    var text = [];
                    text.push('<div class="chartjs-legend"><ul class="justify-content-center">');
                    for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                        text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
                        text.push('</span>');
                        if (chart.data.labels[i]) {
                            text.push(chart.data.labels[i]);
                        }
                        text.push('</li>');
                    }
                    text.push('</div></ul>');
                    return text.join("");
                },

                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function(tooltipItem, data) {
                            return data['labels'][tooltipItem[0]['index']];
                        },
                        label: function(tooltipItem, data) {
                            return data['datasets'][0]['data'][tooltipItem['index']];
                        }
                    },

                    backgroundColor: '#fff',
                    titleFontSize: 14,
                    titleFontColor: '#0B0F32',
                    bodyFontColor: '#737F8B',
                    bodyFontSize: 11,
                    displayColors: false
                }
            };
            var doughnutChart = new Chart(doughnutChartCanvas, {
                type: 'doughnut',
                data: doughnutPieData,
                options: doughnutPieOptions
            });
            document.getElementById('doughnut-chart-legend').innerHTML = doughnutChart.generateLegend();
        }
        if ($("#leaveReport").length) {
            var leaveReportChart = document.getElementById("leaveReport").getContext('2d');
            var leaveReportData = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [{
                    label: 'Last week',
                    data: [18, 25, 39, 11, 24],
                    backgroundColor: "#52CDFF",
                    borderColor: [
                        '#52CDFF',
                    ],
                    borderWidth: 0,
                    fill: true, // 3: no fill

                }]
            };

            var leaveReportOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: "rgba(255,255,255,.05)",
                            zeroLineColor: "rgba(255,255,255,.05)",
                        },
                        ticks: {
                            beginAtZero: true,
                            autoSkip: true,
                            maxTicksLimit: 5,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                    xAxes: [{
                        barPercentage: 0.5,
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: false,
                            autoSkip: true,
                            maxTicksLimit: 7,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                },
                legend: false,

                elements: {
                    line: {
                        tension: 0.4,
                    }
                },
                tooltips: {
                    backgroundColor: 'rgba(31, 59, 179, 1)',
                }
            }
            var leaveReport = new Chart(leaveReportChart, {
                type: 'bar',
                data: leaveReportData,
                options: leaveReportOptions
            });
        }
        if ($("#leaveReport-dark").length) {
            var leaveReportChartDark = document.getElementById("leaveReport-dark").getContext('2d');
            var leaveReportDataDark = {
                labels: ["JAN", "FEB", "MAR", "APR", "MAY"],
                datasets: [{
                    label: 'Last week',
                    data: [18, 25, 39, 11, 24],
                    backgroundColor: "#52CDFF",
                    borderColor: [
                        '#52CDFF',
                    ],
                    borderWidth: 0,
                    fill: true, // 3: no fill

                }]
            };

            var leaveReportOptionsDark = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: "#383e5d",
                            zeroLineColor: '#383e5d',
                        },
                        ticks: {
                            beginAtZero: true,
                            autoSkip: true,
                            maxTicksLimit: 5,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                    xAxes: [{
                        barPercentage: 0.5,
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: false,
                            autoSkip: true,
                            maxTicksLimit: 7,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                },
                legend: false,

                elements: {
                    line: {
                        tension: 0.4,
                    }
                },
                tooltips: {
                    backgroundColor: 'rgba(31, 59, 179, 1)',
                }
            }
            var leaveReportDark = new Chart(leaveReportChartDark, {
                type: 'bar',
                data: leaveReportDataDark,
                options: leaveReportOptionsDark
            });
        }

    });
})(jQuery);