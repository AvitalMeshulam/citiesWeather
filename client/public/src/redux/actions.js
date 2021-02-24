import React from 'react';
function convertActionToType(actionName){
return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}
export const actions=new Proxy(
    {},//target
    {    get:function(target,prop){
        if(target[prop]==undefined)
        return function(args){
            return{
                type:convertActionToType(prop),
                payload:args
            }
        }
        return target[prop]
    }
    }
)