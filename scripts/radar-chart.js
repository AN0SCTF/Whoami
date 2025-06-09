const ctxExpert = document.getElementById('skillsRadarExpert');

new Chart(ctxExpert, {
  type: 'radar',
  data: {
    labels: [
      'Penetration Testing',
      'Vulnerability Analysis',
      'Red Teaming',
      'Enumeration',
      'Social Engineering',
      'Privilege Escalation',
      'Active Directory Attacks',
      'Custom Payload Development'
    ],
    datasets: [{
      label: '',
      data: [4, 4, 2, 5, 4, 4, 4, 3],
      backgroundColor: 'rgba(255, 0, 0, 0.4)',
      borderColor: '#FF0000',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      r: {
        angleLines: {
          color: '#333'
        },
        grid: {
          color: '#444'
        },
        pointLabels: {
          color: '#f0f0f0',
          font: {
            size: 11
          }
        },
        ticks: {
          backdropColor: 'transparent',
          color: '#888',
          stepSize: 1,
          max: 5,
          min: 1
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,
    maintainAspectRatio: true
  }
});
