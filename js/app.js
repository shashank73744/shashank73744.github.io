var dataJson = {
  "contractName": "checkCoin4",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenOwner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balanace",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "fromm",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "getcurrentStatus",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        },
        {
          "name": "_v",
          "type": "uint8"
        },
        {
          "name": "_r",
          "type": "bytes32"
        },
        {
          "name": "_s",
          "type": "bytes32"
        }
      ],
      "name": "cashingDraft",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_message",
          "type": "bytes32"
        },
        {
          "name": "_v",
          "type": "uint8"
        },
        {
          "name": "_r",
          "type": "bytes32"
        },
        {
          "name": "_s",
          "type": "bytes32"
        }
      ],
      "name": "verifier",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0x0172369c1ab35b2ed0118d0a3ab2d9b84202e237",
      "transactionHash": "0x97351bd19c2cdb3e85d7be64be78667c56fe090344b020372039d74fdaa13f63"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-11-08T13:44:48.978Z"
}

App = {
  web3Provider: null,
  contracts: {},

  const Web3 = require("web3");
  const ethEnabled = async () => {  if (window.ethereum) {    
  	await window.ethereum.send('eth_requestAccounts');    
  	window.web3 = new Web3(window.ethereum);    
  	return true;  }  
  return false;}

  init: function() {
  	document.getElementById("from").value = '0x837e871F7b112D6F696d43FaF43705E08Bd1F48A';
  	document.getElementById("to").value = '0x4B619D34080b08d0421eac6934d549cDFdd7fb4b';
  	document.getElementById("tokens").value = 1000000000000000000 ;
    return App.initWeb3();
  },

  initWeb3: function() {
  	if (window.ethereum) {    
  		await window.ethereum.send('eth_requestAccounts');   
  		window.web3 = new Web3(window.ethereum);    
  		return true;  
  	}
    else if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
  	 App.web3Provider = new Web3.providers.HttpProvider('https://shashank73744.github.io/');
    }
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },
  initContract: function() {
  //$.getJSON('checkcoin4.json', function(data) {
  var AdoptionArtifact = dataJson;
  App.contracts.checkcoin4 = TruffleContract(AdoptionArtifact);
  App.contracts.checkcoin4.setProvider(App.web3Provider);
//});

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-createDD', App.handleCreateDD);
    $(document).on('click', '.btn-pushDD', App.handlePushDD);
  },

  handleCreateDD: function(event) {
    if($('#titleCryptoCurrency').hasClass('animated jello')){
      $('#titleCryptoCurrency').removeClass('animated jello');
    }
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
     $('#titleCryptoCurrency').addClass('animated jello');
    return})}).catch(function(err) {
  		console.log(err.message);
	})
},
handlePushDD : function(event){
  $('#titleCryptoCurrency').addClass('animated jello');
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
