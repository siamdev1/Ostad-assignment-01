document.addEventListener('DOMContentLoaded', function() {
    let roomCount = 1;
    let roomCount1 = 1;
    let pricePerRoom = 199;
    let pricePerRoom1 = 249;
    
    const roomCountSpan = document.querySelector('.room-count');
    const roomCountSpan1 = document.querySelector('.room-count1');
    const priceSpan = document.querySelector('.price');
    const priceSpan1 = document.querySelector('.price1');
    const plusButton = document.querySelector('.plus');
    const plusButton1 = document.querySelector('.plus1');
    const minusButton = document.querySelector('.minus');
    const minusButton1 = document.querySelector('.minus1');
    const signUpButton = document.querySelector('.sign-up');
    const signUpButton1 = document.querySelector('.sign-up1');
    const thankYouMessage = document.querySelector('.thank-you');
    const thankYouMessage1 = document.querySelector('.thank-you1');

    plusButton.addEventListener('click', function() {
        roomCount++;
        updatePackageDetails();
    });

    plusButton1.addEventListener('click', function() {
        roomCount1++;
        updatePackageDetails1();
    });

    minusButton.addEventListener('click', function() {
        if (roomCount > 1) {
            roomCount--;
            updatePackageDetails();
        }
    });

    minusButton1.addEventListener('click', function() {
        if (roomCount1 > 1) {
            roomCount1--;
            updatePackageDetails1();
        }
    });


    signUpButton.addEventListener('click', function() {
        thankYouMessage.textContent = `Thanks you for choosing ${roomCount} room${roomCount > 1 ? 's' : ''}`;
        thankYouMessage.style.display = 'block';
    });

    signUpButton1.addEventListener('click', function() {
        thankYouMessage1.textContent = `Thanks you for choosing ${roomCount1} room${roomCount1 > 1 ? 's' : ''}`;
        thankYouMessage1.style.display = 'block';
    });

    function updatePackageDetails() {
        roomCountSpan.textContent = `${roomCount} room${roomCount > 1 ? 's' : ''}`;
        priceSpan.textContent = `$${roomCount * pricePerRoom}`;
    }

    function updatePackageDetails1() {
        roomCountSpan1.textContent = `${roomCount1} room${roomCount1 > 1 ? 's' : ''}`;
        priceSpan1.textContent = `$${roomCount1 * pricePerRoom1}`;
    }

});
