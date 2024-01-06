<script lang="ts">
    import ProductCard from "$lib/productCard.svelte";
	import { get } from "svelte/store";
	import { Items } from "../../cart";

    const products : Product[] = [
        {
            id: "price_1OTGDiANL4FDLiXakHhrwKrn",
            name: "Coffee",
            price: 5,
            info: "Brewed from the foothills of Doi Inthanon"
        },
        {
            id: "price_1OTGITANL4FDLiXa3jQyKfYt",
            name: "Fish",
            price: 10,
            info: "Caught fresh from the seas of Pattaya"
        },
        {
            id: "price_1OTGJ6ANL4FDLiXaeZxPALEP",
            name: "Lobster",
            price: 50,
            info: "Rivals those of Maine"
        },
        {
            id: "price_1OTGMLANL4FDLiXatcYTl1GN",
            name: "Shrimp",
            price: 5,
            info: "Fake lobster"
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
</script>

<div class="container justify-content-center" style="margin-top: 200px">
    {#each Array.from({ length: Math.ceil(products.length / 3) }) as _, i}
    <div class="row">
        {#each {length : 3} as _, j}
        <div class="col">
          <ProductCard product = {products[i*3+j]}/>
        </div>
        {/each}
    </div>
    {/each}
    <button class="btn btn-primary" on:click={() => checkout()}>Checkout</button>
</div>