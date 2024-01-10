<template> 
    <div>
      <Navigation/>
      <h1 id="heading">Contact</h1>
  
      <!-- Lawngreen background section -->
      <div class="section lawngreen-section">
        <h2>Contact Us</h2>
        <div class="content">
          <p>Feel free to reach out to us for any inquiries.</p>
        </div>
      </div>
  
      <!-- Icon section -->
      <div class="section">
        <div class="content">
          <h3>Our Location</h3>
          <p><i class="icon">📍</i> 123 Street, Cityville</p>
          
          <h3>Email Us</h3>
          <p><i class="icon">✉️</i> info@example.com</p>
          
          <h3>Call Us</h3>
          <p><i class="icon">📞</i> +123 456 7890</p>
        </div>
      </div>
  
      <!-- Form section -->
      <div class="section">
        <h2>Get In Touch</h2>
        <div class="content contact-form">
          <form action="#" method="post">
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required>
  
            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required>
  
            <label for="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
  
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navigation from '@/components/Navigation.vue'
  
  export default {
    components: {
      Navigation
    }
  }
  </script>
  
  <style>
  #heading {
    color: white;
  }
  
  #heading::first-letter {
    color: lawngreen;
  }
  
  /* Section styling */
  .section {
    padding: 50px;
  }
  
  /* First section with lawngreen background */
  .lawngreen-section {
    background-color: lawngreen;
  }
  
  .content{
    display: flex;
   
  }
  /* Icon styling */
  .icon {
    font-size: 40px;
    margin-right: 10px;
  }
  
  /* Form styling */
  .contact-form {
    max-width: 400px;
    margin: auto;
  }
  
  /* Responsive styling */
  @media (max-width: 768px) {
    .section {
      padding: 30px;
    }
  }
  </style>
  