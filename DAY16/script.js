document.addEventListener("DOMContentLoaded", function() {
    var countdownElement = document.getElementById('countdown');

    function displayMessage(message, callback) {
        setTimeout(function() {
            countdownElement.innerHTML = message;
            callback();
        }, 1000);
    }

    displayMessage('10', function() {
        displayMessage('9', function() {
            displayMessage('8', function() {
                displayMessage('7', function() {
                    displayMessage('6', function() {
                        displayMessage('5', function() {
                            displayMessage('4', function() {
                                displayMessage('3', function() {
                                    displayMessage('2', function() {
                                        displayMessage('1', function() {
                                            displayMessage('Happy Independence Day!', function() {
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
