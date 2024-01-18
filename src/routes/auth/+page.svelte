<script>
    import { user } from '../../stores/user.js';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    
    let name = "";
    let email = "";
    let password = "";
    let userType = "";
    let error = "";

    let isRegistering = false;

    let currentUser = { name: null, email: null, userId: null };

    // Subscribe to the user store
    user.subscribe(value => {
        currentUser = value;
    });

    const register = async () => {
        if (!name || !email || !password || !userType) {
            error = "Please fill in all fields.";
            return;
        }

        const response = await fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, password: password, userType: userType })
        });

        if (response.ok) {
            // Registration successful
            const { user } = await response.json();
            // console.log('User registered: ' + user);
        } else {
            // Registration failed
            const { error: signUpError } = await response.json();
            error = signUpError;
        }

        // Clear the form and error message
        name = "";
        email = "";
        password = "";
        userType = "";

        isRegistering = false;
    };

    const login = async () => {
        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        console.log(res);

        if (res.ok) {
            // Login successful
            const { user: loggedInUser } = await res.json();
            console.log('User logged in:', loggedInUser);

            // store in svelte store
            if (loggedInUser != null) {
                user.set({
                name: loggedInUser.user_metadata.name,
                email: loggedInUser.email,
                userId: loggedInUser.id
                });
            }
            else {
                error = "Wrong password or email";
                return
            }
        } else {
            // Login failed
            const { error: loginError } = await res.json();
            error = loginError;
        }

        // Clear the form and error message
        email = "";
        password = "";

        // Redirect to home page
        goto('/');
    };

    const logout = async () => {
    // Clear the user store
    user.set({ name: null, email: null, userId: null });

    // Clear localStorage
    if (browser) {
        localStorage.removeItem('user');
    }

    // Logout from Supabase
    const res = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
    };
</script>

<div style="margin-top: 200px;">
    <div class="container mt-5">
        <div class="card my-5 p-4 max-w-md w-auto d-flex flex-column align-items-center">
            {#if currentUser && currentUser.name && currentUser.email}
                <button on:click={logout} class="btn btn-danger">
                    Logout
                </button>
            {:else}
                <h2 class="m-1 text-xl font-bold text-dark">{isRegistering ? 'Register' : 'Login'}</h2>
                <form on:submit|preventDefault={isRegistering ? register : login} class="w-100">
                    {#if isRegistering}
                        <div class="mb-3 w-100">
                            <input type="text" bind:value={name} placeholder="Full name" class="form-control" required />
                        </div>
                    {/if}
                    <div class="mb-3 w-100">
                        <input type="email" bind:value={email} placeholder="Email" class="form-control" required />
                    </div>
                    <div class="mb-3 w-100">
                        <input type="password" bind:value={password} placeholder="Password" class="form-control" required minlength="6" title="Password must be at least 6 characters long" />
                    </div>
                    {#if isRegistering}
                    <div class="mb-3 w-100">
                        <label class="form-label">I am a:</label>
                        <div class="form-check">
                            <input type="radio" id="fisherman" bind:group={userType} value="fisherman" class="form-check-input" required />
                            <label for="fisherman" class="form-check-label">Fisherman</label>
                        </div>
                        <div class="form-check">
                            <input type="radio" id="buyer" bind:group={userType} value="buyer" class="form-check-input" required />
                            <label for="buyer" class="form-check-label">Buyer</label>
                        </div>
                    </div>
                    {/if}
                    <button type="submit" class="btn btn-warning w-100">
                        {isRegistering ? 'Register' : 'Login'}
                    </button>
                </form>
                <button on:click={() => isRegistering = !isRegistering} class="btn btn-link text-primary">
                    {isRegistering ? 'Already have an account?' : 'Don\'t have an account?'}
                </button>
                {#if error}
                    <p class="text-danger">{error}</p>
                {/if}
            {/if}
        </div>
    </div>    
</div>
