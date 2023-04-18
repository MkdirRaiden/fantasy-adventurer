const text = document.getElementById('text');
const treeLeft = document.getElementById('tree-left');
const treeRight = document.getElementById('tree-right');
const gateLeft = document.getElementById('gate-left');
const gateRight = document.getElementById('gate-right');
const grass = document.getElementById('grass');
const myText = document.getElementById('my-text');
const myImage = document.getElementById('my-image');
const paraBox = document.getElementById('paraBox');
const aboutMe = document.querySelector('.about-me');
const variable = document.querySelector('.variale');

gsap.from('body', { duration: 1.5, y: '-100%', ease: 'bounce', delay: '0' })
gsap.from('#text', { duration: 3.5, y: '-300%', ease: 'elastic', delay: '1.5' })
gsap.from('i', { duration: 3.5, x: '-300%', ease: 'elastic', delay: '1.5' })

gateLeft.style.position = 'fixed';
gateRight.style.position = 'fixed';



window.addEventListener('scroll',() => {
    let value = window.scrollY; 

        text.style.marginTop = value * 2.5 + 'px';
        treeLeft.style.left = value * -1 + 'px';
        treeRight.style.left = value * 1 + 'px';
        gateLeft.style.left = value * 0.53 + 'px';
        gateRight.style.left = value * -0.53 + 'px'; 
        myText.style.left = value * 1.43 + 'px';
        paraBox.style.top = value * -.5 + 'px';
        myImage.style.right = value * 1.18 + 'px';
        grass.style.top = value * -.75 + 'px';
        aboutMe.style.top = value *-.75 + 'px';
        // variable.style.height = value * 0.5 + 'px';

    
})

