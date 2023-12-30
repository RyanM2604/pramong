<script lang="ts">
    import ProductCard from "$lib/productCard.svelte";

    const products : Product[] = [
        {
            id: "1",
            name: "Coffee",
            price: 5,
            info: "Brewed from the foothills of Doi Inthanon"
        },
        {
            id: "2",
            name: "Fish",
            price: 10,
            info: "Caught fresh from the seas of Pattaya"
        },
        {
            id: "3",
            name: "Lobster",
            price: 50,
            info: "Rivals those of Maine"
        },
        {
            id: "4",
            name: "Shrimp",
            price: 20,
            info: "Fake lobster"
        }
    ]
</script>

<div class="container justify-content-center">
    {#each Array.from({ length: Math.ceil(products.length / 3) }) as _, i}
    <div class="row">
        {#each {length : 3} as _, j}
        <div class="col">
          <ProductCard product = {products[i*3+j]}/>
        </div>
        {/each}
    </div>
    {/each}
</div>