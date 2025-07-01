button.addEventListener('click', function(event) {
  console.log('Button clicked!');
});

// Event delegation
document.addEventListener('click', function(event) {
  if (event.target.matches('.item')) {
    console.log('Item clicked:', event.target);
  }
});

// Prevent default behavior
link.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Link click intercepted');
});
 