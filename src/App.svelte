<script lang="ts">
import './app.css';
import Navbar from './lib/components/ui/navbar/Navbar.svelte';
import Footer from './lib/components/ui/footer/Footer.svelte';
import FullName from './lib/FullName.svelte';
import AltName from './lib/AltName.svelte';

</script>

<main class="flex flex-col items-center justify-center min-h-screen">
  <Navbar />
 
  <form class="mt-15 absolute top-0 px-7 pb-15">
  <!-- <form class="bg-blue-50 mt-15 absolute top-0 px-7 pb-15"> -->

      <FullName />

      <br>

      <AltName />

      <br>

      <p>If you are happy with the name versions you entered above,
        please hit the ‘Next” button to see them together and take
        a screenshot</p>
      
      <br>

  </form>
        
  <Footer />

</main>

<style>
</style>
