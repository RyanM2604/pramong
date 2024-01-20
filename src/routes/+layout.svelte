<script>
  import { page } from '$app/stores';
  import { user } from '../stores/user';

  let currentUser = { name: null, email: null, userId: null};

  // subscribe to the user store
  user.subscribe(value => {
      currentUser = value;
  });

  /**
 * @type {string}
 */
  let path;
  $: path = $page.url.pathname;

  let activeClass = "text-primary rounded";
  let inactiveClass = "text-secondary rounded";

  let userName = ""
  let userEmail = ""
</script>

<nav class="navbar navbar-expand-lg fixed-top custom-navbar">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav mx-auto d-lg-flex align-items-center nav-fill w-100">
      <a class="nav-link mr-auto" aria-current="page" href="/about_us" style="color: #5A7383;">About Us</a>
      <a class="nav-link" href="/stories" style="color: #5A7383;">Stories</a>
      <a class="navbar-brand" href="/">
        <img src="/assets/logo.png" alt="Pramong" style="width: 100px">
      </a>
      <a class="nav-link" href="/market" style="color: #5A7383;">Marketplace</a>
      <a class="nav-link ml-auto" href="/data" style="color: #5A7383;">Data</a> 
      <div>
        {#if currentUser.name && currentUser.email && currentUser.userId}
            <p style="font-size: 15px;">Logged in as <strong>{currentUser.name}</strong></p>
        {:else}
            <p style="font-size: 15px;">Not logged in.</p>
        {/if}
            <a href="/auth" class={`${path === '/auth' ? activeClass : inactiveClass}`} style="font-size: 15px;">Manage Account</a>
    </div>
    </div>
  </div>
</div>
</nav>

<style>
  .custom-navbar {
    padding-top: 50px; /* Adjust the top padding to change the navbar height */
    padding-bottom: 50px; /* Adjust the bottom padding to change the navbar height */
    background:transparent;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }  

  .navbar{
    background:linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  }
</style>

<slot />