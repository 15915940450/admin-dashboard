import _ from './lodash.ili.js';

var api={
    commerceInfo:'/statistics/commerceInfo__1'
};

var hostname='console.immotor.com';
_.forEach(api,function(v,k){
    api[k]='http://'+hostname+'/ecadmin'+v;
  });

export default api;