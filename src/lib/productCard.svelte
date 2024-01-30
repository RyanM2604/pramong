<script lang="ts">
  import { get } from "svelte/store";
  export let product : Product = {id: "", name: "", price: 0, info: ""};
  import { Items, addToCart, deleteFromCart } from "../cart";
  let cartItems = get(Items);

  let cartItemIdx = cartItems.findIndex((item) => {return item.id === product.id});
  console.log(cartItemIdx)
  let cartProduct = cartItems[cartItemIdx];
  Items.subscribe((newCartValue) => {
    cartItems = newCartValue;
    cartItemIdx = cartItems.findIndex((item) => {return item.id === product.id});
    cartProduct = cartItems[cartItemIdx];
  })
  console.log(cartItems);
</script>

<div class="card" style="width: 18rem;">
    <img src={product.photo_url} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{product.name}</h5>
      <h6 class="card-title">{product.price}</h6>
      <p class="card-text">{product.info}</p>
      {#if cartProduct !== undefined}
        <h6 class="card-title">{cartProduct.quantity}</h6>
      {/if}
      <div class="card-footer">
        <button on:click={() => addToCart(product.id)} class="btn btn-primary">Add</button>
        <button on:click={() => deleteFromCart(product.id)} class="btn btn-danger">Remove</button>
      </div>
    </div>
</div>