
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Section({appsList}) {
  // console.log(appsList.imageUrl)
  return (
    <TouchableOpacity id={appsList.appId} style={{width: 150, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', marginVertical: 6, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.2,
shadowRadius: 2,

elevation: 6,
backgroundColor: 'white',
height: 150, paddingTop: 8,
margin: 10}}>
      <Image source={{uri: appsList.imageUrl}} style={{width: 80, height: 80}}/>
      <Text style={{textAlign:'center', fontSize: 16, paddingVertical: 6}}>{appsList.appName}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

// Object {
//   "appId": 38,
//   "appName": "Mercato",
//   "category": "FOOD",
//   "imageUrl": "https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png",
// }