/*================CODE NUMBER 1==================/
// Active variables
let barberActive = document.getElementById('active-1');
let serviceActive = document.getElementById('active-2');
let dateActive = document.getElementById('active-3');
let informationActive = document.getElementById('active-4');
let confirmationActive = document.getElementById('active-5');

// Initialize variables for selections
let selectedBarber = null;
let selectedService = null;
let selectedDateTime = null;

//Function to update active indicators 
function updateActiveIndicators(activeStep) {
    // Hide all indicators first
    const indicators = [barberActive, serviceActive, dateActive, informationActive, confirmationActive];
    indicators.forEach(indicator => {
        if (indicator) {
            indicator.classList.add('hidden');
            indicator.classList.remove('active');
        }
    });

    // Show and activate indicators up to the current step
    for (let i = 1; i <= activeStep; i++) {
        const indicator = document.getElementById(`active-${i}`);
        if (indicator) {
            indicator.classList.remove('hidden');
            if (i === activeStep) {
                indicator.classList.add('active');
            }
        }
    }
}

/* ======================FUNCTIONS=========================/
// Function to handle step transitions
function goToNextStep(currentStepId, nextStepId, activeStep) {
    const currentStep = document.getElementById(currentStepId);
    const nextStep = document.getElementById(nextStepId);
  
    if (currentStep && nextStep) {
        currentStep.classList.add("hidden");
        nextStep.classList.remove("hidden");
        updateActiveIndicators(activeStep);
    } else {
        console.error("Steps IDs not found:", nextStep, currentStep);
    }
}

// Function to handle going back to the previous step
function goToPreviousStep(previousStepId, currentStepId, activeStep) {
    const currentStep = document.getElementById(currentStepId);
    const previousStep = document.getElementById(previousStepId);

    if (currentStep && previousStep) {
        currentStep.classList.add("hidden");
        previousStep.classList.remove("hidden");
        updateActiveIndicators(activeStep);
    } else {
        console.error("Steps IDs not found:", previousStep, currentStep);
    }
}

/*=================EVENT HANDLERS============================/

// Add event listeners to barber cards
const barberCards = document.querySelectorAll(".barber-card");
barberCards.forEach((card) => {
    card.addEventListener("click", () => {
        selectedBarber = card.getAttribute("data-barber");
        if (selectedBarber) {
            goToNextStep("select-barber", "select-service", 2);
        } else {
            console.error("No data-barber attribute found on the clicked card.");
        }
    });
});

// Add event listeners to service cards
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
        selectedService = card.getAttribute("data-service");
        if (selectedService) {
            goToNextStep("select-service", "select-date", 3);
        } else {
            console.error("No data-service attribute found on the clicked card.");
        }
    });
});

// Add event listeners to date and time options
const dateTimeOptions = document.querySelectorAll(".date-time-option");
dateTimeOptions.forEach((option) => {
    option.addEventListener("click", () => {
        selectedDateTime = option.getAttribute("data-datetime");
        if(selectedDateTime) {
            goToNextStep("select-date", "input-information", 4);
        } else {
            console.error("No data-datetime attribute found on the clicked option");
        }
    });
});

// Add event listener to the back buttons
const backButtons = document.querySelectorAll(".back-button");
backButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const currentStep = button.closest(".step-content");
        const currentStepId = currentStep.id;
        let previousStepId;
        let activeStep;

        switch (currentStepId) {
            case "select-service":
                previousStepId = "select-barber";
                activeStep = 1;
                break;
            case "select-date":
                previousStepId = "select-service";
                activeStep = 2;
                break;
            case "input-information":
                previousStepId = "select-date";
                activeStep = 3;
                break;
            case "confirmation":
                previousStepId = "input-information";
                activeStep = 4;
                break;
        }

        if (previousStepId) {
            goToPreviousStep(previousStepId, currentStepId, activeStep);
        }
    });
});

// Add event listener to the Next button in the Information Section
const nextButton = document.getElementById("information-next");
nextButton.addEventListener("click", () => {
    const nameInput = document.getElementById("user-name");
    const emailInput = document.getElementById("user-email");
    const phoneInput = document.getElementById("user-phone");

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '') {
        alert("Please fill in all the required fields.");
        return;
    }
    
    const confirmationDetails = document.getElementById("confirmation-details");
    confirmationDetails.innerHTML = `
        <p><strong>Selected Barber:</strong> ${selectedBarber || "None"}</p>
        <p><strong>Selected Service:</strong> ${selectedService || "None"}</p>
        <p><strong>Selected Date & Time:</strong> ${selectedDateTime || "None"}</p>
        <p><strong>Your Name:</strong> ${nameInput.value || "None"}</p>
        <p><strong>Your Email:</strong> ${emailInput.value || "None"}</p>
        <p><strong>Your Phone:</strong> ${phoneInput.value || "None"}</p>
    `;

    goToNextStep("input-information", "confirmation", 5);
});

// Initialize the first active indicator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateActiveIndicators(1);
});

// Add an event listener for the final confirmation button
document.getElementById("confirm-booking").addEventListener("click", () => {
    const thankYouMessage = document.createElement("div");
    thankYouMessage.textContent = "Thank you for booking with us!";
    thankYouMessage.style.position = "fixed";
    thankYouMessage.style.top = "50%";
    thankYouMessage.style.left = "50%";
    thankYouMessage.style.transform = "translate(-50%, -50%)";
    thankYouMessage.style.backgroundColor = "#4caf50";
    thankYouMessage.style.color = "#fff";
    thankYouMessage.style.padding = "20px";
    thankYouMessage.style.borderRadius = "10px";
    thankYouMessage.style.textAlign = "center";
    thankYouMessage.style.zIndex = "1000";
  
    document.body.appendChild(thankYouMessage);
  
    setTimeout(() => {
        thankYouMessage.remove();
        window.location.href = "home.html";
    }, 5000);
});
*/

/*========================DEMO CODE==================*/
// Barber specialties mapping
const barberSpecialties = {
    'Booker T': ['adult-haircut', 'haircut-facial', 'shape-up'],
    'TrapBwoy': ['design-pattern', 'dye-shape', 'shape-up'],
    'Rasta': ['kids-haircut', 'adult-haircut', 'haircut-facial']
};

// Barber details for dynamic card creation
const barberDetails = {
    'Booker T': {
        image: './Images/barber-1.jpeg',
        specialties: ['Adult Haircuts', 'Facial Hair Grooming', 'Shape Ups']
    },
    'TrapBwoy': {
        image: './Images/barber-2.jpeg',
        specialties: ['Hair Designs', 'Hair Dye', 'Shape Ups']
    },
    'Rasta': {
        image: './Images/barber-3.jpeg',
        specialties: ['Kids Haircuts', 'Adult Haircuts', 'Facial Hair']
    }
};

// Initialize variables for selections
let selectedService = null;
let selectedBarber = null;
let selectedDate = null;
let selectedTime = null;

// Function to get qualified barbers for a service
function getQualifiedBarbers(service) {
    return Object.entries(barberSpecialties)
        .filter(([barber, services]) => services.includes(service))
        .map(([barber]) => barber);
}

// Function to create barber cards
function createBarberCards(qualifiedBarbers) {
    const barberCardsContainer = document.querySelector('.barber-cards');
    barberCardsContainer.innerHTML = ''; // Clear existing cards

    qualifiedBarbers.forEach(barber => {
        const barberCard = document.createElement('div');
        barberCard.className = 'barber-card';
        barberCard.setAttribute('data-barber', barber);
        
        barberCard.innerHTML = `
            <img src="${barberDetails[barber].image}" alt="${barber}">
            <p>${barber}</p>
            <div class="specialties">
                <small>Specializes in:</small><br>
                ${barberDetails[barber].specialties.join(', ')}
            </div>
        `;
        
        barberCardsContainer.appendChild(barberCard);
    });

    // Add click events to new barber cards
    document.querySelectorAll('.barber-card').forEach(card => {
        card.addEventListener('click', () => {
            selectedBarber = card.getAttribute('data-barber');
            if (selectedBarber) {
                goToNextStep('select-barber', 'select-date', 3);
            }
        });
    });
}

// Add event listeners to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        selectedService = card.getAttribute('data-service');
        if (selectedService) {
            const qualifiedBarbers = getQualifiedBarbers(selectedService);
            createBarberCards(qualifiedBarbers);
            goToNextStep('select-service', 'select-barber', 2);
        }
    });
});

// Function to update active indicators
function updateActiveIndicators(activeStep) {
    const indicators = Array.from({length: 5}, (_, i) => document.getElementById(`active-${i + 1}`));
    indicators.forEach((indicator, index) => {
        if (indicator) {
            indicator.classList.toggle('hidden', true);
            indicator.classList.toggle('active', false);
            if (index < activeStep) {
                indicator.classList.toggle('hidden', false);
            }
            if (index === activeStep - 1) {
                indicator.classList.toggle('active', true);
            }
        }
    });
}

// Step navigation functions
function goToNextStep(currentStepId, nextStepId, activeStep) {
    const currentStep = document.getElementById(currentStepId);
    const nextStep = document.getElementById(nextStepId);
    
    if (currentStep && nextStep) {
        currentStep.classList.add('hidden');
        nextStep.classList.remove('hidden');
        updateActiveIndicators(activeStep);
    }
}

function goToPreviousStep(previousStepId, currentStepId, activeStep) {
    const currentStep = document.getElementById(currentStepId);
    const previousStep = document.getElementById(previousStepId);
    
    if (currentStep && previousStep) {
        currentStep.classList.add('hidden');
        previousStep.classList.remove('hidden');
        updateActiveIndicators(activeStep);
    }
}

// Add event listeners to date and time options
const dateTimeOptions = document.querySelectorAll(".date-time-option");
dateTimeOptions.forEach((option) => {
    option.addEventListener("click", () => {
        selectedDateTime = option.getAttribute("data-datetime");
        if(selectedDateTime) {
            goToNextStep("select-date", "input-information", 4);
        } else {
            console.error("No data-datetime attribute found on the clicked option");
        }
    });
});

// Add event listener to the back buttons
const backButtons = document.querySelectorAll(".back-button");
backButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const currentStep = button.closest(".step-content");
        const currentStepId = currentStep.id;
        let previousStepId;
        let activeStep;

        switch (currentStepId) {
            case "select-service":
                previousStepId = "select-barber";
                activeStep = 1;
                break;
            case "select-barber":
                previousStepId = "select-service";
                activeStep = 1;
                break;
            case "select-date":
                previousStepId = "select-service";
                activeStep = 1;
                break;
            case "input-information":
                previousStepId = "select-date";
                activeStep = 3;
                break;
            case "confirmation":
                previousStepId = "input-information";
                activeStep = 4;
                break;
        }

        if (previousStepId) {
            goToPreviousStep(previousStepId, currentStepId, activeStep);
        }
    });
});

// Add event listener to the Next button in the Information Section
const nextButton = document.getElementById("information-next");
nextButton.addEventListener("click", () => {
    const nameInput = document.getElementById("user-name");
    const emailInput = document.getElementById("user-email");
    const phoneInput = document.getElementById("user-phone");

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '') {
        alert("Please fill in all the required fields.");
        return;
    }

    // Combine selected date and time into a single string
    const selectedDateTime = selectedDate && selectedTime ? `${selectedDate} at ${selectedTime}` : "None";
    
    const confirmationDetails = document.getElementById("confirmation-details");
    confirmationDetails.innerHTML = `
        <div class = "confirm-info">
            <div class = "icon">
                <span class="material-icons-sharp info-section">person</span>
                <small><strong>Selected Barber</strong></small>
                <p>${selectedBarber || "None"}</p>
            </div>
        </div>
        <div class = "confirm-info">
            <div class = "icon">
                <span class="material-icons-sharp info-section">content_cut</span>
                <small><strong>Selected Service</strong></small>
                <p>${selectedService || "None"}</p>
            </div>
        </div>
        <div class = "confirm-info">
            <div class = "icon">
                <span class="material-icons-sharp info-section">calendar_month</span>
                <small><strong>Selected Date & Time</strong></small>
                <p>${selectedDateTime || "None"}</p>
            </div>
        </div>
        <div class = "confirm-info">
            <div class = "icon">
                <span class="material-icons-sharp info-section">person</span>
                <small><strong>Your Name</strong></small>
                <p>${nameInput.value || "None"}</p>
            </div>
        </div>
        <div class = "confirm-info">
            <div class = "icon">
                <span class="material-icons-sharp info-section">email</span>
                <small><strong>Your Email</strong></small>
                <p>${emailInput.value || "None"}</p>
            </div>
        </div>
        <div class = "confirm-info">
            <div class = "icon">
                <span class="material-icons-sharp info-section">phone</span>
                <small><strong>Your Number</strong></small>
                <p>${phoneInput.value || "None"}</p>
            </div>
        </div>`;

    goToNextStep("input-information", "confirmation", 5);
});

// Initialize the first active indicator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateActiveIndicators(1);
});

// Add an event listener for the final confirmation button
document.getElementById("confirm-booking").addEventListener("click", () => {
    const thankYouMessage = document.createElement("div");
    thankYouMessage.textContent = "Thank you for booking with us!";
    thankYouMessage.style.position = "fixed";
    thankYouMessage.style.top = "50%";
    thankYouMessage.style.left = "50%";
    thankYouMessage.style.transform = "translate(-50%, -50%)";
    thankYouMessage.style.backgroundColor = "#4caf50";
    thankYouMessage.style.color = "#fff";
    thankYouMessage.style.padding = "20px";
    thankYouMessage.style.borderRadius = "10px";
    thankYouMessage.style.textAlign = "center";
    thankYouMessage.style.zIndex = "1000";
  
    document.body.appendChild(thankYouMessage);
  
    setTimeout(() => {
        thankYouMessage.remove();
        window.location.href = "home.html";
    }, 5000);
});

// Initialize the first active indicator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateActiveIndicators(1);
});




/*==============NEW LINES OF CODES==============*/
document.addEventListener('DOMContentLoaded', function() {
    const datePicker = flatpickr("#date-picker", {
        minDate: "today",
        enableTime: false, // Disable time selection
        
        dateFormat: "Y-m-d", // date format
        disable: [
            function(date) {
                // Disable specific days (e.g., Sundays)
                return (date.getDay() === 0);
            }
        ],
        onChange: function(selectedDates, dateStr, instance) {
            //store the selected date
            selectedDate = dateStr;

            // Enable time slot selection
            document.getElementById('time-slot').disabled = false;
            
            // Fetch available time slots for the selected date
            fetchAvailableTimeSlots(dateStr);
        }
    });

    const timeSlotSelect = document.getElementById('time-slot');
    const nextButton = document.getElementById('date-next');

    timeSlotSelect.addEventListener('change', function() {
        // store the selected time
        selectedTime = this.value;

        // Enable the "Next" button if a valid time is selected
        if (selectedDate && selectedTime) {
            nextButton.disabled = false;
        } else {
            nextButton.disabled = true;
        }

        // Store the selected date and time in a variable or send it to the server
        console.log(`Selected Date: ${selectedDate}, Selected Time: ${selectedTime}`);
    });

    nextButton.addEventListener('click', function() {
        // Navigate to the next section (Information section)
        goToNextStep('select-date', 'input-information', 4);
        
    });

    function fetchAvailableTimeSlots(date) {
        // Simulate fetching available time slots from the server
        const availableTimeSlots = [
            "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
        ];

        const timeSlotSelect = document.getElementById('time-slot');
        timeSlotSelect.innerHTML = '<option value="">Select Time</option>';

        availableTimeSlots.forEach(slot => {
            const option = document.createElement('option');
            option.value = slot;
            option.textContent = slot;
            timeSlotSelect.appendChild(option);
        });
    }


});

function fetchAvailableTimeSlots(date) {
    // Fetch available time slots from the server
    fetch(`/api/available-slots?date=${date}`)
        .then(response => response.json())
        .then(data => {
            const timeSlotSelect = document.getElementById('time-slot');
            timeSlotSelect.innerHTML = '<option value="">Select Time</option>';

            data.availableSlots.forEach(slot => {
                const option = document.createElement('option');
                option.value = slot;
                option.textContent = slot;
                timeSlotSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching available slots:', error));
}

const express = require('express');
const app = express();
const bookedSlots = {};

app.get('/api/available-slots', (req, res) => {
    const date = req.query.date;
    const allSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
    const availableSlots = allSlots.filter(slot => !bookedSlots[date] || !bookedSlots[date].includes(slot));

    res.json({ availableSlots });
});

app.post('/api/book-slot', (req, res) => {
    const { date, time } = req.body;
    if (!bookedSlots[date]) {
        bookedSlots[date] = [];
    }
    bookedSlots[date].push(time);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

document.getElementById('confirm-booking').addEventListener('click', function() {
    const selectedDate = document.getElementById('date-picker').value;
    const selectedTime = document.getElementById('time-slot').value;

    fetch('/api/book-slot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: selectedDate, time: selectedTime }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Booking confirmed!');
            // Proceed to the next step or show a confirmation message
        } else {
            alert('Booking failed. Please try again.');
        }
    })
    .catch(error => console.error('Error confirming booking:', error));
});


