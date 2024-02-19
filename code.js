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
        src: 'images/iBelongInNature_11.png',
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

document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    galleryImages.forEach((image, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
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

        const fromTop = index % 2 === 0;
        const initialY = fromTop ? -100 : 100;

        /*  INSERT GSAP ANIMATIONS HERE   */

        


    });
    loadLikedImages();
});

function updatedLikedImagesList(title, isActive) {
    const existingItem = Array.from(likedImageList.children).find(li => li.textContent === title);

    if (isActive && !existingItem) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        like.href = `#img-${title.replace(/\s+/g, '-')}`;
        link.textContent = title;
        listItem.appendChild(link);
        likedImageList.appendChild(listItem);
    } else if (!isActive && existingItem) {
        likedImageList.removeChild(existingItem);
    };

    toggleLikedImagesContainerVisibility();
    saveLikesToLocalStorage();
};

function saveLikesToLocalStorage() {
    const likedIndices = galleryImages.map((img, index) => {
        return document.querySelector(`[data-title="${img.title}"]`).classList.contains ('active') ? index : null;
    }).filter(index => index !== null);

    localStorage.setItem('likedImages', JSON.stringify(likedIndices));
};

function loadLikedImages() {
    const savedLikedIndices = JSON.parse(localStorage.getItem('likedImages')) || [];
    savedLikedIndices.forEach(index => {
        const image = galleryImages[index];
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        like.href = `#img-${title.replace(/\s+/g, '-')}`;
        link.textContent = image.title;
        listItem.appendChild(link);
        likedImageList.appendChild(listItem);

        const likeBtn = document.querySelector(`[data-title="${image.title}"]`);
        if (likeBtn) {
            likeBtn.classList.add('active');
        };
    });
    toggleLikedImagesContainerVisibility();
};

const toggleLikedImagesContainerVisibility = () => {
    const likedImageListContainer = document.getElementById('likedImagesListContainer');
    if (likedImageList.children.length > 0) {
        likedImageListContainer.classList.add('active');
    } else {
        likedImageListContainer.classList.remove('active');
    }
}