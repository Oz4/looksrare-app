import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LRButton = ({
  title,
  onPress = () => { },
  backgroundColor = '#2DE370',
  borderRadius = 4,
  fontSize = 16,
  color = '#ffffff',
  fontWeight = '600',
  borderColor = '#2DE370',
  width = 150,
  height = 55,
  mr = 0,
  ml = 0,
  mt = 0,
  mb = 0,
  padding = 16,
}) => {

  return <TouchableOpacity onPress={onPress}>
    <View style={{
      padding: padding,
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: borderColor,
      borderWidth: 1,
      borderStyle: 'solid',
      width: width,
      height: height,
      marginRight: mr,
      marginLeft: ml,
      marginTop: mt,
      marginBottom: mb,
    }}>
      <Text style={{
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
}

export default LRButton

