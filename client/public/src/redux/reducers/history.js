import React from 'react'
import {produce} from 'immer'
import createReducer from './reducerUtil'


const inisualState={
    history:[
    //    {date:new Date(Date.now()),city:"bney-braq",description:"sky...",temp:56.08,maxTemp:60.78,minTemp: 45.07,icon:"icon",userId:12345},
    //    {date:new Date(Date.now()),city:"sdfghj",description:"sky...",temp:56.08,maxTemp:60.78,minTemp: 45.07,icon:"icon",userId:12345},
    //    {date:new Date(Date.now()),city:"cvbn",description:"sky...",temp:56.08,maxTemp:60.78,minTemp: 45.07,icon:"icon",userId:12345},
    //    {date:new Date(Date.now()),city:"mmmmmmm",description:"sky...",temp:56.08,maxTemp:60.78,minTemp: 45.07,icon:"icon",userId:12345},
    //    {date:new Date(Date.now()),city:"kok",description:"sky...",temp:56.08,maxTemp:60.78,minTemp: 45.07,icon:"icon",userId:12345},
    //    {date:new Date(Date.now()),city:"jjjjjjjjj",description:"sky...",temp:56.08,maxTemp:60.78,minTemp: 45.07,icon:"icon",userId:12345},
    //    {date:new Date(Date.now()),city:"bney-braq",description:"sky...",temp:56.08,maxTemp:60.78,minTemp: 45.07,icon:"icon",userId:12345},
    //    {date:new Date(Date.now()),city:"bney-braq",description:"sky...",temp:56.08,maxTemp:60.78,minTemp: 45.07,icon:"icon",userId:12345},
    //    {date:new Date(Date.now()),city:"bney-braq",description:"sky...",temp:56.08,maxTemp:60.78,minTemp: 45.07,icon:"icon",userId:12345}
    ]
}

const histories={
    addNewHistory(state,action){
        state.history.push(action.payload)
    },
    deleteAllHistory(state,action){
       state.history=[]
    },
}

export default produce((state,action)=>createReducer(state,action,histories),inisualState)