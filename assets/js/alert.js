function showAlert() {
    const alertElement = document.getElementById('alert');
    alertElement.style.display = "flex"
    let rightValue = -250;

    const moveAlert = setInterval(function () {
        rightValue += 10;
        alertElement.style.right = rightValue + 'px';

        if (rightValue >= 0) {
            clearInterval(moveAlert);
            setTimeout(function () {

                const backMove = setInterval(() => {
                    rightValue -= 10;
                    alertElement.style.right = rightValue + 'px';

                    if (rightValue == -250) {
                        alertElement.style.display = "none"
                        clearInterval(backMove);
                    }

                }, 10)

            }, 3000);
        }
    }, 10);
}