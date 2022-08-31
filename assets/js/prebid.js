// Adblock detector
// https://stackoverflow.com/questions/4869154/how-to-detect-adblock-on-my-website?page=1&tab=scoredesc#tab-top

function FuncHelmiAmirudinRunPrebid() {
	var VarHelmiAmirudinRunPrebid = true;
}

function detectAdblock(){const adblockTests={uBlockOrigin:{url:"https://incolumitas.com/data/pp34.js?sv=",id:"837jlaBksSjd9jh"},adblockPlus:{url:"https://incolumitas.com/data/neutral.js?&ad_height=",id:"hfuBadsf3hFAk"}};function canLoadRemoteScript(obj){return new Promise(function(resolve,reject){var script=document.createElement("script");script.onload=function(){if(document.getElementById(obj.id)){resolve(false)}else{resolve(true)}};script.onerror=function(){resolve(true)};script.src=obj.url;document.body.appendChild(script)})}return new Promise(function(resolve,reject){let promises=[canLoadRemoteScript(adblockTests.uBlockOrigin),canLoadRemoteScript(adblockTests.adblockPlus)];Promise.all(promises).then(results=>{resolve({uBlockOrigin:results[0],adblockPlus:results[1]})}).catch(err=>{reject(err)})})}