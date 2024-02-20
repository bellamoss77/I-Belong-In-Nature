const galleryImages = [
    {
        src: 'images/iBelongInNature_1.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 1'
    }, {
        src: 'images/iBelongInNature_2.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 2'
    }, {
        src: 'images/iBelongInNature_3.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 3'
    }, {
        src: 'images/iBelongInNature_4.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 4'
    }, {
        src: 'images/iBelongInNature_5.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 5'
    }, {
        src: 'images/iBelongInNature_6.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 6'
    }, {
        src: 'images/iBelongInNature_7.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 7'
    }, {
        src: 'images/iBelongInNature_8.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 8'
    }, {
        src: 'images/iBelongInNature_9.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 9'
    }, {
        src: 'images/iBelongInNature_10.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 10'
    }, {
        src: 'images/iBelongInNature_11_.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 11'
    }, {
        src: 'images/iBelongInNature_12.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 12'
    }, {
        src: 'images/iBelongInNature_13.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 13'
    }, {
        src: 'images/iBelongInNature_14.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 14'
    }, {
        src: 'images/iBelongInNature_15.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 15'
    }, {
        src: 'images/iBelongInNature_16.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 16'
    }, {
        src: 'images/iBelongInNature_17.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 17'
    }, {
        src: 'images/iBelongInNature_18.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 18'
    }, {
        src: 'images/iBelongInNature_19.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 19'
    }, {
        src: 'images/iBelongInNature_20.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 20'
    }, {
        src: 'images/iBelongInNature_21.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 21'
    }, {
        src: 'images/iBelongInNature_22.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 22'
    }, {
        src: 'images/iBelongInNature_23.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 23'
    }, {
        src: 'images/iBelongInNature_2.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 2'
    }, {
        src: 'images/iBelongInNature_24.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 24'
    }, {
        src: 'images/iBelongInNature_25.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 25'
    }, {
        src: 'images/iBelongInNature_26.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 26'
    }, {
        src: 'images/iBelongInNature_27.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 27'
    }, {
        src: 'images/iBelongInNature_28.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 28'
    }, {
        src: 'images/iBelongInNature_29.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 29'
    }, 
    {
        src: 'images/iBelongInNature_30.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 30'
    }, 
    {
        src: 'images/iBelongInNature_31.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 31'
    }, 
    {
        src: 'images/iBelongInNature_32.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 32'
    }, 
    {
        src: 'images/iBelongInNature_33.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 33'
    }, {
        src: 'images/iBelongInNature_34.png',
        alt: 'Dogs in the woods',
        title: 'I Belong... 34'
    },   
]

const imageGalleryContainer = document.getElementById('imageGalleryContainer');
const likedImagesListContainer = document.getElementById('likedImageListContainer');
const likedImageList = likedImagesListContainer.querySelector('ol');

function setupListToggle() {
    const angleDownIcon = document.querySelector('.fa-angle-down');
    const popOutList = document.querySelector('.pop-out-list');

    console.log('Initial likedImageList children count: ', likedImageList.children.length)

    angleDownIcon.addEventListener('click', () => {
        console.log('Angle down icon clicked.');
        console.log('current visibility before toggle: ', popOutList.style.visibility);

            const isVisible = popOutList.style.visibility === 'visible';
            popOutList.style.visibility = isVisible ? 'hidden' : 'visible';
            angleDownIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
    });
    updateListContainerVisibility();  
}; 

function updateListContainerVisibility() {
    const containerIcon = document.querySelector('.container-icon');
    const heartIcon = containerIcon.querySelector('.fa-heart');
    const angleDownIcon = document.querySelector('.fa-angle-down');
    const popOutList = document.querySelector('.pop-out-list');
    const hasLikedImages = likedImageList.children.length > 0;

    containerIcon.classList.toggle('active', hasLikedImages);
    heartIcon.classList.toggle('active', hasLikedImages);
    angleDownIcon.style.visibility = hasLikedImages ? 'visible' : 'hidden';
    popOutList.style.visibility = hasLikedImages ? 'hidden' : 'hidden';
    angleDownIcon.style.transform = hasLikedImages ? 'rotate(180deg)' : 'rotate(0deg)';
}

 
setupListToggle();



document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    renderGallery();
    loadLikedImages();
    setupListToggle();

    function renderGallery() {

        galleryImages.forEach((image, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container', 'panel');
            imgContainer.id = `img-${image.title.replace(/\s+/g, '-')}`;

            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.title = image.title;

            const imgCaption = document.createElement('h4');
            imgCaption.classList.add('img-caption');
            imgCaption.textContent = image.title;

            const likeBtn = document.createElement('span');
            likeBtn.classList.add('like-btn');
            likeBtn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
            likeBtn.setAttribute('data-title', image.title);

            likeBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                updatedLikedImagesList(image.title, this.classList.contains('active'));

                saveLikesToLocalStorage();
            });

        imgContainer.appendChild(img);
        imgContainer.appendChild(imgCaption);
        imgContainer.appendChild(likeBtn);
        imageGalleryContainer.appendChild(imgContainer);

        setupAnimationForImage(imgContainer, index);

        
        });

        loadLikedImages();
        setupListToggle();

    }
    function setupAnimationForImage(imgContainer, index) {
        gsap.from(imgContainer, {
         autoAlpha: 0,
         y: 50,
         duration: 1,
         ease: 'elastic',
         ScrollTrigger: {
             trigger: imgContainer,
             start: 'top 80%',
             toggleActions: 'play reverse play reverse',
         }
        });
     
     }

    
    

});



function updatedLikedImagesList(title, isActive) {
    const existingItem = Array.from(likedImageList.children).find(li => li.textContent === title);

    if (isActive && !existingItem) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#img-${title.replace(/\s+/g, '-')}`;
        link.textContent = title;
        listItem.appendChild(link);
        likedImageList.appendChild(listItem);
    } else if (!isActive && existingItem) {
        likedImageList.removeChild(existingItem);
    };
    updateListContainerVisibility();

    /*angleDownIcon.style.visibility = likedImageList.children.length > 0 ? 'visible' : 'hidden';

    toggleLikedImagesContainerVisibility();
    saveLikesToLocalStorage();*/
};



function saveLikesToLocalStorage() {
    const likeBtn = document.createElement('span');
    likeBtn.classList.add('like-btn');
    likeBtn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    likeBtn.setAttribute('data-title', image.title);
    const likedIndices = galleryImages.map((img, index) => {
        return likeBtn && likeBtn.classList.contains ('active') ? index : null;
    }).filter(index => index !== null);

    localStorage.setItem('likedImages', JSON.stringify(likedIndices));
};

function loadLikedImages() {
    const savedLikedIndices = JSON.parse(localStorage.getItem('likedImages')) || [];
    console.log('saved liked indices: ', savedLikedIndices);
    savedLikedIndices.forEach(index => {
        const image = galleryImages[index];
        const likeBtn = document.querySelector(`[data-title="${image.title}"]`);
        if (likeBtn) {
            likeBtn.classList.add('active');
            updatedLikedImagesList(image.title, true);
        };


        
    });
    toggleLikedImagesContainerVisibility();
};

const toggleLikedImagesContainerVisibility = () => {
    const containerIcon = document.querySelector('.container-icon');
    const heartIcon = containerIcon.querySelector('.fa-heart');
    const popOutList = document.querySelector('.pop-out-list');

    if (likedImageList.children.length > 0) {
        containerIcon.classList.add('active');
        heartIcon.classList.add('active');
        popOutList.style.visibility = 'hidden';
    } else {
        containerIcon.classList.remove('active');
        heartIcon.classList.remove('active');
        popOutList.style.visibility = 'hidden';
    }
}