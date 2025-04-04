import React from 'react'
import {Text, View} from 'react-native'

const Tv = () => {
  return(
    <View style={{flex: 1}}>
      <View style={{flex: 3, flexDirection: "row"}}>
        <View style={{flex: 1, backgroundColor: "white"}}></View>
        <View style={{flex: 1, backgroundColor: "yellow"}}></View>
        <View style={{flex: 1, backgroundColor: "cyan"}}></View>
        <View style={{flex: 1, backgroundColor: "green"}}></View>
        <View style={{flex: 1, backgroundColor: "hotpink"}}></View>
        <View style={{flex: 1, backgroundColor: "red"}}></View>
        <View style={{flex: 1, backgroundColor: "blue"}}></View>
      </View>
      <View style={{flex: 1, flexDirection: "row"}}>
        <View style={{flex: 1, backgroundColor: "darkblue"}}></View>
        <View style={{flex: 1, backgroundColor: "white"}}></View>
        <View style={{flex: 1, backgroundColor: "purple"}}></View>
        <View style={{flex: 3, backgroundColor: "black"}}></View>
      </View>
    </View>
  )
}

export default Tv;