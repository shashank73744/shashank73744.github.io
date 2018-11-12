App = {
  web3Provider: null,
  contracts: {},

  init: function() {
  	document.getElementById("from").value = '0x837e871F7b112D6F696d43FaF43705E08Bd1F48A';
  	document.getElementById("to").value = '0x4B619D34080b08d0421eac6934d549cDFdd7fb4b';
  	document.getElementById("tokens").value = 1000000000000000000 ;
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
  App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },
  initContract: function() {
  $.getJSON('checkcoin4.json', function(data) {
  var AdoptionArtifact = data;
  App.contracts.checkcoin4 = TruffleContract(AdoptionArtifact);
  App.contracts.checkcoin4.setProvider(App.web3Provider);
});

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-createDD', App.handleCreateDD);
    $(document).on('click', '.btn-pushDD', App.handlePushDD);
  },

  handleCreateDD: function(event) {
  	event.preventDefault();
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var tokens = document.getElementById("tokens").value ;
    App.contracts.checkcoin4.deployed().then(function(instance) {
  	return instance.getcurrentStatus(from,to,tokens);
	}).then(function(message){
     web3.eth.sign(web3.eth.accounts[0],message,function(err,_signature){
     var signature = _signature.substr(2); //remove 0x
     var _r = '0x' + signature.slice(0, 64)
     var _s = '0x' + signature.slice(64, 128)
     var _v = '0x' + signature.slice(128, 130)
     var _v_decimal = web3.toDecimal(_v);
     document.getElementById("v").value = _v_decimal;
     document.getElementById("r").value = _r;
     document.getElementById("s").value = _s;
    return})}).catch(function(err) {
  		console.log(err.message);
	})
},
handlePushDD : function(event){
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var tokens = document.getElementById("tokens").value ;
  var v = document.getElementById("v").value;
  var r = document.getElementById("r").value;
  var s = document.getElementById("s").value ;
  App.contracts.checkcoin4.deployed().then(function(instance) {
      return instance.cashingDraft(from,to,tokens,v,r,s)
  }).then(function(success){
    console.log(success);
  }
).catch(function(err) {
    console.log(err.message);
  })
}
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
