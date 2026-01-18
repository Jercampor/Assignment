
let tooltips = document.querySelectorAll('.trigger-tooltip');
tooltips.forEach(btn => new bootstrap.Tooltip(btn));

let modalElement = document.getElementById('weaponModal');
if (modalElement) {
    const myPopup = new bootstrap.Modal(modalElement);
    let modalButtons = document.querySelectorAll('.trigger-modal');

    modalButtons.forEach(function(btn) {
        btn.onclick = function() {
            
            document.getElementById('modalTitle').innerText = btn.getAttribute('data-title');
            document.getElementById('modalImg').src = btn.getAttribute('data-img');
            document.getElementById('modalDesc').innerText = btn.getAttribute('data-desc');
            document.getElementById('modalStats').innerText = btn.getAttribute('data-stats');

            myPopup.show(); 
        };
    });
}

let searchBar = document.getElementById('enemySearch');
if (searchBar) {
    searchBar.onkeyup = function() {
        let userInput = searchBar.value.toLowerCase(); 
        let allItems = document.querySelectorAll('.enemy-report, .weapon-card');
        let visibleCount = 0; 

        allItems.forEach(function(item) {
            let content = item.textContent.toLowerCase();
        
            if (content.includes(userInput)) {
                item.classList.remove('hidden');
                visibleCount++;
            } 
            else {
                item.classList.add('hidden');
            }
        });

        let noResultsMsg = document.getElementById('noResults');
        if (noResultsMsg) {
            if (userInput === "") {
                noResultsMsg.style.display = "none";
            } 
            else if (visibleCount === 0) {
                noResultsMsg.style.display = "block";
            } 
            else {
                noResultsMsg.style.display = "none";
            }
        }
    }; 
}


  function validateForm(event) {
    event.preventDefault(); 

    const feedback = document.getElementById("feedback").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const email = document.getElementById("inputEmail").value;
    const fullName = document.getElementById("fullName").value;

    if (fullName === "" || email === "" || contactNumber === "" || feedback === "") {
        alert("Note: ALL inputs are Mandatory, please amend your entries and try again.");
    } 
    else {
        alert("Form submitted successfully! Opening your email client...");
        
        mailTo(feedback, contactNumber); 
    }
}

function mailTo(bodyText, subjectText) {
    window.location.href = "mailto:jlicp1006@gmail.com?subject=" + subjectText + "&body=" + bodyText;
}