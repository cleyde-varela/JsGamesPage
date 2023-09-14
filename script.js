document.addEventListener('DOMContentLoaded', () => 
{
    // Return to homepage button
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
        window.history.back();
    });

    //Restart button
    const restartBtn = document.getElementById('restart-btn');
    restartBtn.addEventListener('click', function() {
        window.location.reload();
    });

})