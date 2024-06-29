const starList = document.querySelectorAll('.star');
const submitBtn = document.querySelector('.submit-btn');
const responseRating = document.querySelector('#response__rating');


const ratingCard = document.querySelector('#rating_card');
const responseCard = document.querySelector('#response');

let selectedValue;

starList.forEach((star, index) => {
    star.addEventListener('click', () => {
        // Remove active class from all starList
        starList.forEach(s => s.classList.remove('active'));

        // Add active class to clicked and preceding starList
        
            star.classList.add('active');
            selectedValue = star.ariaLabel;
            console.log(selectedValue)
        
    });
});

submitBtn.addEventListener('click',()=>{

    if(!selectedValue){
        alert('Select the Value.');
        return;
    }

    ratingCard.classList.add('hidden');

    responseRating.innerHTML = selectedValue;

    responseCard.classList.remove('hidden');

})