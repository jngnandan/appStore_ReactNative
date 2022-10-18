
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Tab({tabsList, isActive}) {
  return (
    <TouchableOpacity>
        <Text style={{padding: 16, fontSize: 16, fontWeight: '700', textAlign: 'center', fontWeight: '600'}}>{tabsList.displayText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})