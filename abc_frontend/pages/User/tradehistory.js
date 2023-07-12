import MyLayout from "./component/layout"
// import Header from "./component/header"
export default function TradeHistory() {
    return (
      <>
      <section class="text-white-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h3 class="title-font font-medium text-xl mb-2 text-white-900">Trade History</h3>
        <div class="leading-relaxed"></div>
      </div>
      <div class="p-5 sm:w-1/2 lg:w-1/4 w-1/2">
        <h3 class="title-font font-medium text-3xl text-white-900">15</h3>
        <p class="leading-relaxed">Buying Amount in bitcoin</p>
      </div>
      <div class="p-5 sm:w-1/2 lg:w-1/4 w-1/2">
        <h3 class="title-font font-medium text-3xl text-white-900">6</h3>
        <p class="leading-relaxed">Selling Amount in bitcoin</p>
     </div>
      
      
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src="https://www.investopedia.com/thmb/76XgaQ6J1dH9T_fCW4aGcPchVAM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Most-important-cryptocurrencies-other-than-bitcoin-V12-ca31e1f4bd844b7fb1924809af625ecb.png" alt="stats"/>
    </div>
  </div>
</section>
      {/* <MyLayout title="tradehistory"/> */}

      <br></br>  
      <h1>All transactions</h1>
      </>
    )
  }