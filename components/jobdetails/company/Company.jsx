import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import {icons} from '../../../constants'
import {checkImageUrl} from '../../../utils'

const Company = ({companyLogo, jobTitle, companyName, Location}) => {
  return (
    <View style= {styles.container}>
      <View style = {styles.logoBox}>
        <Image style={styles.logoImage} source = {{uri: checkImageUrl(companyLogo) ? companyLogo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NNICW7_diNmGXJfMicpY9eXHKV4sq205H.jpg'}}
         />
      </View>
      <View>
        <Text style= {styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style = {styles.companyInfoBox}>
        <Text style = {styles.companyName}>
          {companyName} /
        </Text>
        <View style = {styles.locationBox}>
          <Image 
            source = {icons.location}
            resizeMode='contain'
            style = {styles.locationImage}
          />
          <Text style = {styles.locationName}>
            {Location}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Company