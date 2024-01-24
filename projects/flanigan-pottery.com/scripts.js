const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img.section-work__img');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img);
    })
})

lightbox.addEventListener('click', e =>{
    if(e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
})

// var templateParams = {
//     name: document.getElementById("form-name").value,
//     email: document.getElementById("form-email").value,
//     message: document.getElementById("form-message").value
// };
 
// emailjs.send('default_service', 'template_tmayst4', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });
const btn = document.getElementById('button');

/*
document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_tmayst4';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Sent!';
      btn.disabled = true;
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

*/