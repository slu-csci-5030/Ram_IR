document.addEventListener('DOMContentLoaded', function() {
    var weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12"];
    var tasks = ["CI/CD Pipeline", "Testing basic component", "Personas", "Admin UI", "Main Page UI", "Backend(API)", "Database Integration", "Continuous Testing", "Deploying"];
    var totalWork = 50;
    var workRemaining = [50, 48, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0];

    var ctx = document.getElementById('burnDownChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: weeks,
            datasets: [{
                label: 'Work Remaining',
                data: workRemaining,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Current Sprint Progress',
                    font: {
                        size: 14
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var index = context.dataIndex;
                            if (index < tasks.length) {
                                return weeks[index] + ': ' + tasks[index];
                            } else {
                                return weeks[index] + ': TBD';
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Work Remaining'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Weeks'
                    }
                }
            }
        }
    });
});