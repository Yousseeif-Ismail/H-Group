const ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['الطلبات', 'الزيارات', 'المبيعات', 'هدف الشهر'],
        datasets: [{
            data: [2125, 10354, 48998, 50000],
            borderWidth: 3,
            backgroundColor: ['white'],
            label: "اخفاء",
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['الطلبات', 'الزيارات', 'المبيعات', 'هدف الشهر'],
        datasets: [{
            data: [4829, 50430, 103566, 100000],
            borderWidth: 3,
            backgroundColor: ['white'],
            label: "اخفاء",
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['الطلبات', 'الزيارات', 'المبيعات', 'هدف الشهر'],
        datasets: [{
            data: [1225, 20354, 65998, 50000],
            borderWidth: 3,
            backgroundColor: ['white'],
            label: "اخفاء",
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});