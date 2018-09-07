import _ from './lodash.ili.js';

var rqs=function(urlMethod,success,paramSettings,handle1050){
    var handle1050=handle1050 || function(){
        window.location.href='http://localhost:40450/login';
    };
    var token=window.localStorage.token;
    var settings={
      objSendData:{},
      isLoginRqs:false,
      fnHandleNOTjsonResult:function(error){console.log('rqsNOTjson',error);},
      fail:function(rps){
        console.log('rqsFail',rps);
      },
      urlParam:false,
      reviver:false
    };
  
    if(typeof(urlMethod)!=='string'){
      return false;
    }
    var url=urlMethod.split('__')[0];
    /**
    *注解：/faultType/{id}__4
    */
  
    var method=window.parseInt(urlMethod.split('__')[1]); //1,2,3,4
    if(method===1){
      method='GET';
    }
    if(method===2){
      method='POSTjson';
    }
    if(method===3){
      method='POSTform';
    }
    if(method===4){
      method='PUT';
    }
    success=success || function(objRps){console.log('rqsSuccess',objRps);};
  
    //=================settings is the target, will be overcover by param
    Object.assign(settings,paramSettings);
  
    if(settings.urlParam){
      var iReplace=-1;
      url=url.replace(/{\w+}/,function(){
        iReplace++;
        return (settings.urlParam[iReplace]);
      });
    }
  
    if(!token && !settings.isLoginRqs){
      handle1050();
      return false;
    }
  
    //================xmlhttp start
    var xmlhttp;
    if(window.XMLHttpRequest){
      xmlhttp=new XMLHttpRequest();
    }else{
      xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
    }
  
    xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState===4){
        if(xmlhttp.status===200){
          try{
            var objRps;
  
            objRps=JSON.parse(xmlhttp.responseText,function(k,v){
              //real default reviver
              if(typeof v==='string' && !window.isNaN(v) && v.length<15 && v && v.charAt(0)!=='0' && !v.match(/[exbo]/i)){
                //string to number
                v=window.Number(v);
              }
              if(typeof(settings.reviver)==='function' && settings.reviver(k,v)!==undefined){
                v=settings.reviver(k,v);
              }
              if(v===''){
                //empty string
                v='─';
              }
              return v;
            });
  
            if(settings.isLoginRqs){
              //make login rqs
              success(objRps);
            }else{
              //normal rqs
              //code...
              switch(objRps.code){
  
              case 1050:  //need login
                handle1050();
                break;
  
              case 1000:
                success(objRps);
                break;
              default:  //fail
                settings.fail(objRps);
              //end switch
              }
            }
          //end try
          }catch(error){
            //when JSON.parse throw error
            settings.fnHandleNOTjsonResult(error);
          }
        //end if 200
        }else{
          //status is not 200
          settings.fail(xmlhttp.status);
        }
      }
    };
  
    var ContentType,data2send='';
    if(!settings.isLoginRqs && window.localStorage.agentphone && !settings.objSendData.phone){
      settings.objSendData.phone=window.localStorage.agentphone;
    }
    if(method==='GET'){
      for(var k in settings.objSendData){
        // console.log(settings.objSendData[k]);
        if(settings.objSendData[k]===null){
          settings.objSendData[k]='';
        }
      }
      // console.log(settings.objSendData);
      url=url+'?now='+(new Date().getTime())+'&'+_.serialize2querystring(settings.objSendData);
      ContentType='application/x-www-form-urlencoded';
    }
    if(method==='POSTform'){
      method='POST';
      data2send=_.serialize2querystring(settings.objSendData);
      ContentType='application/x-www-form-urlencoded';
    }
    if(method==='POSTjson'){
      method='POST';
      data2send=JSON.stringify(settings.objSendData);
      ContentType='application/json';
    }
    if(method==='PUT'){
      data2send=JSON.stringify(settings.objSendData);
      ContentType='application/json';
    }
  
  
    xmlhttp.open(method,url,true);
    xmlhttp.setRequestHeader('Content-type',ContentType);
    xmlhttp.setRequestHeader('AccessToken',token);
    xmlhttp.withCredentials=true;
    xmlhttp.send(data2send);
  };

  export default rqs;