<script lang="ts">
    import ProductCard from "$lib/productCard.svelte";
	import { get } from "svelte/store";
	import { Items } from "../../cart";
    import { user } from '../../stores/user';

    const products : Product[] = [
        {
            id: "price_1OTGDiANL4FDLiXakHhrwKrn",
            name: "Catfish",
            price: 5,
            info: "From the foothills of Doi Inthanon",
            photo_url: "/assets/catfish.png"
        },
        {
            id: "price_1OTGITANL4FDLiXa3jQyKfYt",
            name: "Sea Bass",
            price: 10,
            info: "Caught fresh from the seas of Pattaya",
            photo_url: "/assets/seabass.png"
        },
        {
            id: "price_1OTGJ6ANL4FDLiXaeZxPALEP",
            name: "Lobster",
            price: 50,
            info: "Rivals those of Maine",
            photo_url: "/assets/lobster.png"
        },
        {
            id: "price_1OTGMLANL4FDLiXatcYTl1GN",
            name: "King Shrimp",
            price: 5,
            info: "Fake lobster",
            photo_url: "/assets/shrimp.png"
        }
    ]

    async function checkout() {
        await fetch("api/stripe", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(
                { items: get(Items) }
            )
        }).then((data) => {
            return data.json();
        }).then((data) => {
            window.location.replace(data.url);
        })
    }

    let currentUser = { name: null, email: null, userId: null };

    // subscribe to the user store
    user.subscribe(value => {
        currentUser = value;
    });
</script>

{#if currentUser.name && currentUser.email && currentUser.userId}
    <div class="container justify-content-center" style="margin-top: 200px">

            {#each Array.from({ length: Math.ceil(products.length / 3) }) as _, i}
                <div class="row mb-3">
                    {#each Array.from({ length: 3 }) as _, j}
                        {#if products[i * 3 + j]}
                            <div class="col">
                                <ProductCard product={products[i * 3 + j]}/>
                            </div>
                        {/if}
                    {/each}
                </div>
            {/each}

            <div class="d-flex justify-content-center">
                <button class="btn btn-primary text-center mb-5" on:click={() => checkout()}>Checkout</button>
            </div>
    </div>
{:else}
    <div style="margin-top: 200px">
        <div class="container">
            <div class="row justify-content-center align-items-center m-5">
                <div class="col-md-6">
                    <div class="p-4 text-white bg-secondary rounded-md">
                        <p class="text-center">You are not logged in.</p>
                        <a href="/auth" class="d-block mt-2 text-center text-decoration-underline" style="color: white;">Click here to register or login.</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}