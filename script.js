// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add animation when scrolling
function handleScroll() {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (isInViewport(product) && !product.classList.contains('animated')) {
            product.classList.add('animated');
            if (product.classList.contains('slide-right')) {
                product.style.animation = 'slideRight 1s ease forwards';
            } else if (product.classList.contains('slide-left')) {
                product.style.animation = 'slideLeft 1s ease forwards';
            }
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
// Trigger once on page load
handleScroll(); 