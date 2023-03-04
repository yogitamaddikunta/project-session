const images = [ 
    'puppies/pupp1 (2).jpg',
    'puppies/pupp1 (4).jpg',
    'puppies/pupp1 (7).jpg',
    'puppies/pupp1 (8).jpg',
    'puppies/pupp1 (3).jpg',
    'puppies/pupp1 (1).jpg',
    'puppies/pupp1 (5).jpg',
    'puppies/pupp1 (6).jpg',
]


document.getElementById('generate').onclick = ()=>{

    const imageView = document.getElementById('image-view');
    const randIndex = Math.floor(Math.random() * images.length);
    imageView.src = images[randIndex];
}
