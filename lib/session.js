function _0x3f92(_0x51eefa,_0x4bb9d1){const _0x3e5a73=_0x3e5a();return _0x3f92=function(_0x3f9201,_0x4f80d6){_0x3f9201=_0x3f9201-0xd8;let _0x154322=_0x3e5a73[_0x3f9201];return _0x154322;},_0x3f92(_0x51eefa,_0x4bb9d1);}const _0x8d8d36=_0x3f92;(function(_0x4a41aa,_0x192c4a){const _0x36b1f5=_0x3f92,_0x4cbef0=_0x4a41aa();while(!![]){try{const _0x524969=-parseInt(_0x36b1f5(0xd8))/0x1+-parseInt(_0x36b1f5(0xf2))/0x2*(parseInt(_0x36b1f5(0xe0))/0x3)+-parseInt(_0x36b1f5(0xf0))/0x4*(-parseInt(_0x36b1f5(0xf1))/0x5)+parseInt(_0x36b1f5(0xdf))/0x6+-parseInt(_0x36b1f5(0xda))/0x7+parseInt(_0x36b1f5(0xea))/0x8+parseInt(_0x36b1f5(0xed))/0x9;if(_0x524969===_0x192c4a)break;else _0x4cbef0['push'](_0x4cbef0['shift']());}catch(_0x5bf6ad){_0x4cbef0['push'](_0x4cbef0['shift']());}}}(_0x3e5a,0xab710));const fs=require('fs'),{MongoClient}=require(_0x8d8d36(0xe9)),unzipper=require(_0x8d8d36(0xe2));function _0x3e5a(){const _0x2c9050=['Error\x20deleting\x20zip\x20file:','38072gGgtva','685yzxDFf','1445506yUuMOo','171862lHbsZE','downloaded_creds.zip','6245477AUxTWi','error','file','collection','close','5012346hRvGqD','3PUHKKH','mongodb+srv://uploader2:uploader2@uploader2.uhnmx1u.mongodb.net/?retryWrites=true&w=majority&appName=uploader2','unzipper','Extract','exports','log','writeFileSync','Zip\x20session\x20downloaded\x20and\x20\x20extracted\x20successfully.\x0abot\x20starts\x20in\x205\x20seconds','findOne','mongodb','1125448XGtmjN','buffer','Zip\x20file\x20not\x20found\x20in\x20the\x20database.','1881108gwdUZX','connect'];_0x3e5a=function(){return _0x2c9050;};return _0x3e5a();}async function fetchsession(_0x9e1560,_0x3f7e99){const _0x10979b=_0x8d8d36,_0x26a8e6=new MongoClient(_0x10979b(0xe1));try{await _0x26a8e6[_0x10979b(0xee)]();const _0x4c7f11=_0x26a8e6['db'](_0x3f7e99),_0x53d7dc=_0x4c7f11[_0x10979b(0xdd)]('credentials'),_0x5092c4=await _0x53d7dc[_0x10979b(0xe8)]({'fileId':_0x9e1560});if(!_0x5092c4){console[_0x10979b(0xe5)](_0x10979b(0xec));return;}fs[_0x10979b(0xe6)](_0x10979b(0xd9),_0x5092c4[_0x10979b(0xdc)][_0x10979b(0xeb)]),await fs['createReadStream'](_0x10979b(0xd9))['pipe'](unzipper[_0x10979b(0xe3)]({'path':'./auth_info_baileys'}))['on'](_0x10979b(0xde),()=>{const _0x1db041=_0x10979b;console[_0x1db041(0xe5)](_0x1db041(0xe7));try{fs['unlinkSync']('downloaded_creds.zip');}catch(_0x39f5ed){console[_0x1db041(0xdb)](_0x1db041(0xef),_0x39f5ed);}});}catch(_0x2fc413){console[_0x10979b(0xdb)]('Error\x20downloading\x20and\x20extracting\x20zip\x20file:',_0x2fc413);}finally{await _0x26a8e6[_0x10979b(0xde)]();}}module[_0x8d8d36(0xe4)]=fetchsession;