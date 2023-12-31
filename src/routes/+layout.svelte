<nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/about_us">About Us</a>
          <a class="nav-link" href="/stories">Stories</a>
          <a class="nav-link" href="/market">Marketplace</a>
          <a class="nav-link" href="/data">Data</a>
        </div>
      </div>
    </div>
</nav>

<style>
    body {
      /* Set a white gradient background */
      background: linear-gradient(to bottom, #ffffff, transparent);
      margin: 0; /* Remove default body margin */
      padding-top: 56px; /* Adjusted based on the height of your fixed-top navbar */
    }
</style>

<slot />