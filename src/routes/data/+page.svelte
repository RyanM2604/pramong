<script>
  import { user } from "../../stores/user";

  let currentUser = { name: null, email: null, userId: null };

  // subscribe to the user store
  user.subscribe(value => {
      currentUser = value;
  });
</script>

{#if currentUser.name && currentUser.email && currentUser.userId}
<div>
    <div class="page-container">
      <div class="page-data">
        <img
          src="/assets/grey-header.png"
          alt="Marketplace1693"
          class="page-marketplace"
        />
        <span class="page-text"><span>Dataview</span></span>
        <img
          src="/assets/shrimp-header.png"
          alt="image321683"
          class="page-image32"
        />
        <img
          src="/assets/shrimp-header.png"
          alt="image341685"
          class="page-image34"
        />
        <img
          src="/assets/shrimp-header.png"
          alt="image361688"
          class="page-image36"
        />
        <img
          src="/assets/shrimp-header.png"
          alt="image381691"
          class="page-image38"
        />
        <span class="page-text12">
          <span>Mass Seafood Formalin Testing Record</span>
        </span>
        <span class="page-text14"><span>Merchant Audit Record</span></span>
        <span class="page-text16">
          <span>Merchant Certification Record</span>
        </span>
        <span class="page-text18"><span>Merchant Directory</span></span>
      </div>
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

<style>
    .page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page-data {
  width: 100%;
  height: 2376px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 1);
}
.page-marketplace {
  top: 0px;
  left: 1px;
  width: 1440px;
  height: 380px;
  position: absolute;
}
.page-text {
  top: 129px;
  left: 293px;
  color: rgba(90, 115, 131, 1);
  width: 855px;
  height: auto;
  position: absolute;
  font-size: 128px;
  font-style: Regular;
  text-align: center;
  font-family: Lora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text02 {
  top: 59px;
  left: 221px;
  color: rgba(90, 115, 131, 1);
  width: 119px;
  height: auto;
  position: absolute;
  font-size: 24px;
  font-style: Light;
  text-align: center;
  font-family: Inter;
  font-weight: 300;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text04 {
  top: 59px;
  left: 415px;
  color: rgba(90, 115, 131, 1);
  width: 90px;
  height: auto;
  position: absolute;
  font-size: 24px;
  font-style: Light;
  text-align: center;
  font-family: Inter;
  font-weight: 300;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text06 {
  top: 37px;
  left: 616px;
  color: rgba(90, 115, 131, 1);
  height: auto;
  position: absolute;
  font-size: 48px;
  font-style: Bold;
  text-align: center;
  font-family: Lora;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text08 {
  top: 59px;
  left: 955px;
  color: rgba(90, 115, 131, 1);
  width: 138px;
  height: auto;
  opacity: 0.90;
  position: absolute;
  font-size: 24px;
  font-style: Light;
  text-align: center;
  font-family: Inter;
  font-weight: 300;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text10 {
  top: 59px;
  left: 1193px;
  color: rgba(90, 115, 131, 1);
  width: 51px;
  height: auto;
  position: absolute;
  font-size: 24px;
  font-style: Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-image32 {
  top: 1860px;
  left: 0px;
  width: 1440px;
  height: 215px;
  position: absolute;
}
.page-image34 {
  top: 1362px;
  left: 0px;
  width: 1440px;
  height: 215px;
  position: absolute;
}
.page-image36 {
  top: 865px;
  left: 0px;
  width: 1440px;
  height: 215px;
  position: absolute;
}
.page-image38 {
  top: 380px;
  left: 0px;
  width: 1440px;
  height: 215px;
  position: absolute;
}
.page-text12 {
  top: 1947px;
  left: 422px;
  color: rgba(90, 115, 131, 1);
  width: 599px;
  height: auto;
  position: absolute;
  font-size: 32px;
  font-style: Bold;
  text-align: center;
  font-family: Lora;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text14 {
  top: 1449px;
  left: 422px;
  color: rgba(90, 115, 131, 1);
  width: 599px;
  height: auto;
  position: absolute;
  font-size: 32px;
  font-style: Bold;
  text-align: center;
  font-family: Lora;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text16 {
  top: 952px;
  left: 420px;
  color: rgba(90, 115, 131, 1);
  width: 599px;
  height: auto;
  position: absolute;
  font-size: 32px;
  font-style: Bold;
  text-align: center;
  font-family: Lora;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text18 {
  top: 467px;
  left: 422px;
  color: rgba(90, 115, 131, 1);
  width: 599px;
  height: auto;
  position: absolute;
  font-size: 32px;
  font-style: Bold;
  text-align: center;
  font-family: Lora;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
</style>