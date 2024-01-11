<template>
    <div>
      <Navigation/>
      <h1 id="heading">Contact</h1>
    </div>
   
       
    <div class="section1">
    <h2><i class="fas fa-envelope"></i> Mail</h2>
    <p>Email Address: unitydemas12@email.com</p>
    <h2><i class="fas fa-phone"></i> Phone</h2>
    <p>Phone Number: 0832673554</p>
    <div>
    <a href="https://www.linkedin.com/in/unity-demas-29a896227/" id="icon" target="_blank"><i class="fab fa-linkedin"></i> Linkedin</a>
  <!-- Add your LinkedIn link or information here -->
  <a href="https://github.com/Unity-JNR" target="_blank" id="icon"><i class="fab fa-github"></i>Github</a>
    </div>
  </div>


  <div class="section2">
    <form @submit.prevent="submitForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" v-model="formData.name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" v-model="formData.email" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" v-model="formData.message" required></textarea>

    <button type="submit">Submit</button>
  </form>
  </div>

  <footers/>

  </template>
 
  <script>
  // @ is an alias to /src
  import Navigation from '@/components/Navigation.vue'
  import footers from '@/components/footer.vue'
 
  export default {
    components: {
      Navigation,
      footers
    },
    data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted with data:', this.formData);
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    }
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
  .section1 {
      background-color: lawngreen;
      padding: 20px;
      color: white;
      font-weight: 600;
    }


    .section2 {
      background-color: white;
      padding: 20px;
    }


    h2 {
      margin-bottom: 10px;
    }


    form {
      max-width: 400px;
      margin: auto;
    }


    label {
      display: block;
      margin-bottom: 8px;
    }


    input, textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      box-sizing: border-box;
    }


    button {
      background-color: lawngreen;
      color: white;
      padding: 10px 15px;
      border: none;
      cursor: pointer;
    }
    div #icon {
    display: block;
    padding: 10px; /* Adjust the padding as needed */
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  div #icon:hover {
    background-color: #333; /* Change the background color on hover as desired */
  }
  </style>