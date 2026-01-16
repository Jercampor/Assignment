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
       
        let reportContent = report.querySelector('.enemy-details').textContent.toLowerCase();

        
        if (nameElement) {
            let nameText = nameElement.textContent.toLowerCase();

            if (reportContent.includes(filter)) {
                report.style.display = "flex"; 
            } else {
                report.style.display = "none"; 
            }
        }
    });
});

/* thank GOD this works */