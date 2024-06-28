function sendmessage(){
    var sender_name = document.getElementById("name").value;
    var sender_email = document.getElementById("email").value;
    var sender_message = document.getElementById("message").value;

    if(sender_email === '' || sender_name === '' || sender_email === ''){
        alert("Please Answer the form")
    }
    else{
        alert(`Thank you ${sender_name} for commissioning, I will send the project to your email ${sender_email}. I will inform you for when I finished the "${sender_message}" `);
        alert("The commision will be processed immediately, Thank You!")
    }

    
}
//
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryControls = ['previous', 'next'];

    class Carousel {

        constructor(container, items, controls) {
            this.carouselContainer = container;
            this.carouselControls = controls;
            this.carouselArray = [...items];
            this.currentSlide = 0; // Track current slide index
            this.totalSlides = this.carouselArray.length; // Total number of slides
        }

        updateGallery() {
            this.carouselArray.forEach((el, index) => {
                // Remove all existing gallery-item-N classes
                for (let i = 1; i <= this.totalSlides; i++) {
                    el.classList.remove(`gallery-item-${i}`);
                }
        
                // Calculate the new position for each item
                const newPosition = (index - this.currentSlide + this.totalSlides) % this.totalSlides;
                el.classList.add(`gallery-item-${newPosition === 0 ? this.totalSlides : newPosition}`);
            });
        }

        setCurrentState(direction) {
            if (direction === 'previous') {
                this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
            } else {
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
            }
            this.updateGallery();
        }

        setControls() {
            this.carouselControls.forEach(control => {
                const button = document.createElement('button');
                button.className = `gallery-controls-${control}`;
                button.innerText = control;
                galleryControlsContainer.appendChild(button); // Append button to .gallery-controls
            });
        }

        useControls() {
            const triggers = galleryControlsContainer.querySelectorAll('button');
            triggers.forEach(control => {
                control.addEventListener('click', e => {
                    e.preventDefault();
                    const direction = control.classList.contains('gallery-controls-previous') ? 'previous' : 'next';
                    this.setCurrentState(direction);
                });
            });
        }
    }

    const carousel = new Carousel(galleryContainer, galleryItems, galleryControls);
    carousel.setControls();
    carousel.useControls();
});


let index = 0;

const images = [
                    "mahoraga.jpeg",
                    "afo&ofa.jpeg",
                    "shadow.jpeg",
                    "bankai.jpeg",
                    "shinra.jpeg",
                    "aot.jpeg",
                    "gohan.jpeg",
                    "obito.jpeg",
                    "kawaii.jpeg",
                    "kaneki.jpeg",
                    "yuji.jpeg",
                ]


function updateImg(){
    document.getElementById('slide').src = images[index];
}

function next(){
    index = (index + 1) % images.length;
    updateImg();
}

function prev(){
    index = (index - 1 + images.length) % images.length;
    updateImg();
}