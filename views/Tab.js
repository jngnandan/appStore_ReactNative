
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Tab({tabsList, isActive, updateTab}) {

    const updateClick = () => {
        updateTab(tabsList.tabId)
    }

    const tabStyle = isActive ? styles.inactiveTab : styles.activeTab

  return (
    <TouchableOpacity onPress={updateClick}>
        <Text style={tabStyle}>{tabsList.displayText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    activeTab: {
        padding: 16, 
        fontSize: 16, 
        fontWeight: '700', 
        textAlign: 'center', 
        fontWeight: '600', 
        textDecorationLine: 'underline'
    },
    inactiveTab: {
        padding: 16, 
        fontSize: 16, 
        fontWeight: '700', 
        textAlign: 'center', 
        fontWeight: '600', 
        textDecorationLine: 'none'    }
})