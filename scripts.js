// Minimal JS for demo navigation and form
document.addEventListener('DOMContentLoaded', ()=> {
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      alert('Demo: message captured. For submission use contest portal with hosted link & repo.');
      form.reset();
    });
  }
});
