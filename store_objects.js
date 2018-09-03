    var defaults={
      "selectedStores":["walmart","homedepot","amazon"],
      "selectedLocalStores":{
        "walmart":["commack"],
        "homedepot":["bellport","bayshore"],
        "amazon":[]
      }
    };



    var store_objs=[
    {
      storeName:"homedepot",
      basicUrl:"http://www.homedepot.com",
      url_findMoreLocalStores:"https://www.homedepot.com/l/search/1258/full/?lat=40.52497517207139&lng=-72.87931266015623&radius=50",
      url_localStores:["https://www.homedepot.com/b/Pick-Up-Today/N-5yc1vZ1z175a5/Ntk-semanticsearch/Ntt-","___searchTerm","?NCNI-5&browsestoreoption=1&storeSelection=","___selectedLocalStoreText"
      ],
      multiplePages:true,
      url_local_stores_breaker:"",
      local_stores:[
        {name:"patchogue",url_text_to_add:"1258"},
        {name:"bayshore",url_text_to_add:"1211"},
        {name:"bellport",url_text_to_add:"8958"}
      ]

    },{
      storeName:"walmart",
      basicUrl:"http://ww.walmart.com",
      url_findMoreLocalStores:"",
      url_localStores:["https://www.walmart.com/search/?cat_id=0&facet=pickup_and_delivery%3AFREE+Pickup+Today&query=","___searchTerm","&stores=","___selectedLocalStoreText"],
      multiplePages:false,
      url_local_stores_breaker:"%2C",
      local_stores:[
        {name:"islandia",url_text_to_add:"2917"},
        {name:"commack",url_text_to_add:"5202"},
        {name:"centerreach",url_text_to_add:"2286"}
        ]
    },{
      storeName:"kmart",
      basicUrl:"http://ww.kmart.com",
      url_findMoreLocalStores:"https://www.kmart.com/stores.html",
      url_localStores:["https://www.kmart.com/search=","___searchTerm","?","___selectedLocalStoreText"],
      multiplePages:true,
      url_local_stores_breaker:"",
      local_stores:[
        {name:"bohemia",url_text_to_add:"unitNo=3862"},
        {name:"farmingville",url_text_to_add:"unitNo=4871"}
      ]
    },{
      storeName:"amazon",
      basicUrl:"http://ww.amazon.com",
      url_findMoreLocalStores:"",
      url_localStores:["https://www.amazon.com/s?url=search-alias%3Daps&field-keywords=","___searchTerm"],
      multiplePages:true,
      url_local_stores_breaker:"",
      local_stores:[]
    },{
      storeName:"ebay",
      basicUrl:"http://ww.ebay.com",
      url_findMoreLocalStores:"",
      url_localStores:["https://www.ebay.com/sch/i.html?_from=R40&_nkw=","___searchTerm","&LH_BIN=1&_sop=15&_oac=1"],
      multiplePages:true,
      url_local_stores_breaker:"",
      local_stores:[]
    }
    ];
