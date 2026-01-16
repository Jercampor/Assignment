/* document.getElementById('enemySearch').addEventListener('keyup', function(){
  
    let filter = this.ariaValueMax.toLowerCase();

    let reports = document.querySelectorAll('.enemy-report');

    reports.forEach(report => {

        let name = report.querySelector('.enemy-name').textContent.toLowerCase();

        if (name.includes(filter)) {
            report.style.display = "flex";
        }
        else {
            report.style.display = "none";
        }
    })
}) */ // 20 mins wasted on this :D

document.getElementById('enemySearch').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let reports = document.querySelectorAll('.enemy-report');

    reports.forEach(report => {
        let details = report.querySelector('.enemy-details');
        
        if (details) {
            let reportContent = details.textContent.toLowerCase();

            if (reportContent.includes(filter)) {
                report.style.display = "flex"; 
            } else {
                report.style.display = "none"; 
            }
        }
    });

    let visibleReports = document.querySelectorAll('.enemy-report[style*="display: flex"]');
    let message = document.getElementById('noResults');

    if (message) {
        if (visibleReports.length === 0 && filter !== "") {
            message.style.display = "block";     
    } 
    else {
        message.style.display = "none";
    }

    }
});

/* thank GOD this works */

//Bump up time wasted to 30 mins