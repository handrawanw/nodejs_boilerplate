let cache=Object.assign({},global.caches);

function cleanCaches(){
    for(let key of Object.keys(cache)){
        if(cache[key].ttl<Date.now()){
            delete cache[key];
        }
    }   
}

module.exports={

    getCaches:(key)=>{
        cleanCaches();
        if(cache&&cache.hasOwnProperty(key)){
            if(cache[key].ttl>Date.now()){
                return cache[key].value;
            }else{
                delete cache[key];
            }
        }
        return null;
    },

    setChaches:(key,value={},ttl=0)=>{
        cache[key]={
            value,
            ttl:Date.now()+ttl
        };
        return cache[key];
    },

    delCache:(key)=>{
        delete cache[key];
    }

};