(self["webpackChunk"]=self["webpackChunk"]||[]).push([[792],{24435:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;__webpack_require__(31603);__webpack_require__(51341);var _WalletConnectRemixClient=__webpack_require__(42018);var _walletConnectUI=__webpack_require__(94307);var _jsxRuntime=__webpack_require__(95867);var remix=new _WalletConnectRemixClient.WalletConnectRemixClient;remix.initClient();function App(){return(0,_jsxRuntime.jsxs)("div",{className:"App",children:[(0,_jsxRuntime.jsx)("h4",{className:"mt-1",children:"WalletConnect"}),(0,_jsxRuntime.jsx)(_walletConnectUI.WalletConnectUI,{})]})}var _default=App;exports["default"]=_default},94307:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.WalletConnectUI=WalletConnectUI;var _jsxRuntime=__webpack_require__(95867);function WalletConnectUI(){return(0,_jsxRuntime.jsx)("div",{style:{display:"inline-block"},children:(0,_jsxRuntime.jsx)("w3m-button",{})})}},85747:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(86903);var _react=_interopRequireDefault(__webpack_require__(4491));var _client=__webpack_require__(4447);var _app=_interopRequireDefault(__webpack_require__(24435));var _jsxRuntime=__webpack_require__(95867);var container=document.getElementById("root");if(container){(0,_client.createRoot)(container).render((0,_jsxRuntime.jsx)(_app["default"],{}))}},42018:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(86903);Object.defineProperty(exports,"__esModule",{value:true});exports.WalletConnectRemixClient=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(49482));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(3282));var _classCallCheck2=_interopRequireDefault(__webpack_require__(3368));var _createClass2=_interopRequireDefault(__webpack_require__(57270));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(51922));var _inherits2=_interopRequireDefault(__webpack_require__(70800));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(84919));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(7539));var _defineProperty2=_interopRequireDefault(__webpack_require__(3218));var _plugin=__webpack_require__(75497);var _pluginWebview=__webpack_require__(58519);var _react=__webpack_require__(26878);var _constants=__webpack_require__(32061);var _events=_interopRequireDefault(__webpack_require__(23100));var _constant=__webpack_require__(17071);function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return(0,_possibleConstructorReturn2["default"])(this,result)}}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}var WalletConnectRemixClient=function(_PluginClient){(0,_inherits2["default"])(WalletConnectRemixClient,_PluginClient);var _super=_createSuper(WalletConnectRemixClient);function WalletConnectRemixClient(){var _this;(0,_classCallCheck2["default"])(this,WalletConnectRemixClient);_this=_super.call(this);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"web3modal",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"ethersConfig",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"chains",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"currentChain",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"internalEvents",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"currentAccount",void 0);(0,_pluginWebview.createClient)((0,_assertThisInitialized2["default"])(_this));_this.internalEvents=new _events["default"];_this.methods=["sendAsync","init","deactivate"];_this.onload();return _this}(0,_createClass2["default"])(WalletConnectRemixClient,[{key:"onActivation",value:function onActivation(){var _this2=this;this.subscribeToEvents();this.call("theme","currentTheme").then((function(theme){_this2.internalEvents.emit("themeChanged",theme.quality.toLowerCase())}))}},{key:"init",value:function init(){console.log("initializing walletconnect plugin...")}},{key:"initClient",value:function initClient(){try{var ethersConfig=(0,_react.defaultConfig)({metadata:_constant.METADATA,rpcUrl:"https://cloudflare-eth.com"});this.web3modal=(0,_react.createWeb3Modal)({projectId:_constant.PROJECT_ID,chains:_constants.constants.chains,metadata:_constant.METADATA,ethersConfig});this.ethersConfig=ethersConfig;this.chains=_constants.constants.chains}catch(e){return console.error("Could not get a wallet connection",e)}}},{key:"subscribeToEvents",value:function subscribeToEvents(){var _this3=this;this.web3modal.subscribeProvider((function(_ref){var address=_ref.address,isConnected=_ref.isConnected,chainId=_ref.chainId;if(isConnected){if(address!==_this3.currentAccount){_this3.currentAccount=address;_this3.emit("accountsChanged",[address])}if(_this3.currentChain!==chainId){_this3.currentChain=chainId;_this3.emit("chainChanged",chainId)}}else{_this3.emit("accountsChanged",[]);_this3.currentAccount="";_this3.emit("chainChanged",0);_this3.currentChain=0}}));this.on("theme","themeChanged",(function(theme){_this3.web3modal.setThemeMode(theme.quality)}))}},{key:"sendAsync",value:function(){var _sendAsync=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark((function _callee(data){var address,provider,message,err;return _regenerator["default"].wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:address=this.web3modal.getAddress();provider=this.web3modal.getWalletProvider();if(!(address&&provider)){_context.next=23;break}if(!(data.method==="eth_accounts")){_context.next=7;break}return _context.abrupt("return",{jsonrpc:"2.0",result:[address],id:data.id});case 7:if(!(provider.isMetamask&&provider.sendAsync)){_context.next=11;break}return _context.abrupt("return",new Promise((function(resolve){provider.sendAsync(data,(function(error,response){if(error){if(error.data&&error.data.originalError&&error.data.originalError.data){resolve({jsonrpc:"2.0",error:error.data.originalError,id:data.id})}else if(error.data&&error.data.message){resolve({jsonrpc:"2.0",error:error.data&&error.data,id:data.id})}else{resolve({jsonrpc:"2.0",error,id:data.id})}}return resolve(response)}))})));case 11:_context.prev=11;_context.next=14;return provider.request(data);case 14:message=_context.sent;return _context.abrupt("return",{jsonrpc:"2.0",result:message,id:data.id});case 18:_context.prev=18;_context.t0=_context["catch"](11);return _context.abrupt("return",{jsonrpc:"2.0",error:{message:_context.t0.message,code:-32603},id:data.id});case 21:_context.next=26;break;case 23:err="Cannot make ".concat(data.method," request. Remix client is not connected to walletconnect client");console.error(err);return _context.abrupt("return",{jsonrpc:"2.0",error:{message:err,code:-32603},id:data.id});case 26:case"end":return _context.stop()}}}),_callee,this,[[11,18]])})));function sendAsync(_x){return _sendAsync.apply(this,arguments)}return sendAsync}()},{key:"deactivate",value:function(){var _deactivate=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark((function _callee2(){return _regenerator["default"].wrap((function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:console.log("deactivating walletconnect plugin...");_context2.next=3;return this.web3modal.disconnect();case 3:case"end":return _context2.stop()}}}),_callee2,this)})));function deactivate(){return _deactivate.apply(this,arguments)}return deactivate}()}]);return WalletConnectRemixClient}(_plugin.PluginClient);exports.WalletConnectRemixClient=WalletConnectRemixClient},17071:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.PROJECT_ID=exports.METADATA=void 0;var PROJECT_ID="a4ba105e642ae64cdb5b9a86debc0a66";exports.PROJECT_ID=PROJECT_ID;var METADATA={name:"Remix IDE",description:"The Native IDE for Web3 Development.",url:"https://remix.ethereum.org/",icons:["https://remix.ethereum.org/favicon.ico"]};exports.METADATA=METADATA},32024:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.zora=exports.zkSync=exports.sepolia=exports.saigon=exports.ronin=exports.polygonMumbai=exports.polygon=exports.optimismGoerli=exports.optimism=exports.mainnet=exports.goerli=exports.gnosis=exports.celo=exports.bsc=exports.base=exports.avalanche=exports.aurora=exports.arbitrumGoerli=exports.arbitrum=void 0;var mainnet={chainId:1,name:"Ethereum",currency:"ETH",explorerUrl:"https://etherscan.io",rpcUrl:"https://cloudflare-eth.com"};exports.mainnet=mainnet;var sepolia={chainId:11155111,name:"Sepolia",currency:"ETH",explorerUrl:"https://sepolia.etherscan.io",rpcUrl:"https://rpc.sepolia.org"};exports.sepolia=sepolia;var goerli={chainId:5,name:"Goerli",currency:"ETH",explorerUrl:"https://goerli.etherscan.io",rpcUrl:"https://rpc.ankr.com/eth_goerli"};exports.goerli=goerli;var arbitrum={chainId:42161,name:"Arbitrum",currency:"ETH",explorerUrl:"https://arbiscan.io",rpcUrl:"https://arb1.arbitrum.io/rpc"};exports.arbitrum=arbitrum;var arbitrumGoerli={chainId:421613,name:"Arbitrum Goerli",currency:"ETH",explorerUrl:"https://goerli.arbiscan.io",rpcUrl:"https://goerli-rollup.arbitrum.io/rpc"};exports.arbitrumGoerli=arbitrumGoerli;var avalanche={chainId:43114,name:"Avalanche",currency:"AVAX",explorerUrl:"https://snowtrace.io",rpcUrl:"https://api.avax.network/ext/bc/C/rpc"};exports.avalanche=avalanche;var bsc={chainId:56,name:"Binance Smart Chain",currency:"BNB",explorerUrl:"https://bscscan.com",rpcUrl:"https://rpc.ankr.com/bsc"};exports.bsc=bsc;var optimism={chainId:10,name:"Optimism",currency:"ETH",explorerUrl:"https://optimistic.etherscan.io",rpcUrl:"https://mainnet.optimism.io"};exports.optimism=optimism;var optimismGoerli={chainId:420,name:"Optimism Goerli",currency:"ETH",explorerUrl:"https://goerli-optimism.etherscan.io",rpcUrl:"https://goerli.optimism.io"};exports.optimismGoerli=optimismGoerli;var polygon={chainId:137,name:"Polygon",currency:"MATIC",explorerUrl:"https://polygonscan.com",rpcUrl:"https://polygon-rpc.com"};exports.polygon=polygon;var polygonMumbai={chainId:80001,name:"Polygon Mumbai",currency:"MATIC",explorerUrl:"https://mumbai.polygonscan.com",rpcUrl:"https://rpc.ankr.com/polygon_mumbai"};exports.polygonMumbai=polygonMumbai;var gnosis={chainId:100,name:"Gnosis",currency:"xDAI",explorerUrl:"https://gnosis.blockscout.com",rpcUrl:"https://rpc.gnosischain.com"};exports.gnosis=gnosis;var zkSync={chainId:324,name:"ZkSync",currency:"ETH",explorerUrl:"https://explorer.zksync.io",rpcUrl:"https://mainnet.era.zksync.io"};exports.zkSync=zkSync;var zora={chainId:7777777,name:"Zora",currency:"ETH",explorerUrl:"https://explorer.zora.energy",rpcUrl:"https://rpc.zora.energy"};exports.zora=zora;var celo={chainId:42220,name:"Celo",currency:"CELO",explorerUrl:"https://explorer.celo.org/mainnet",rpcUrl:"https://forno.celo.org"};exports.celo=celo;var base={chainId:8453,name:"Base",currency:"BASE",explorerUrl:"https://basescan.org",rpcUrl:"https://mainnet.base.org"};exports.base=base;var aurora={chainId:1313161554,name:"Aurora",currency:"ETH",explorerUrl:"https://explorer.aurora.dev",rpcUrl:"https://mainnet.aurora.dev"};exports.aurora=aurora;var ronin={chainId:2020,name:"Ronin",currency:"RON",explorerUrl:"https://app.roninchain.com",rpcUrl:"https://api.roninchain.com/rpc"};exports.ronin=ronin;var saigon={chainId:2021,name:"Saigon Testnet",currency:"RON",explorerUrl:"https://saigon-explorer.roninchain.com",rpcUrl:"https://saigon-testnet.roninchain.com/rpc"};exports.saigon=saigon},32061:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.constants=void 0;var _chains=__webpack_require__(32024);var constants={chains:[_chains.arbitrum,_chains.arbitrumGoerli,_chains.mainnet,_chains.polygon,_chains.polygonMumbai,_chains.optimism,_chains.optimismGoerli,_chains.goerli,_chains.sepolia,_chains.ronin,_chains.saigon,_chains.aurora,_chains.avalanche,_chains.base,_chains.bsc,_chains.celo,_chains.gnosis,_chains.zkSync,_chains.zora]};exports.constants=constants},31603:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__)},42132:()=>{},3170:()=>{},48928:()=>{},77273:()=>{},45423:()=>{},93553:()=>{},52661:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[502],(()=>__webpack_exec__(85747)));var __webpack_exports__=__webpack_require__.O()}]);