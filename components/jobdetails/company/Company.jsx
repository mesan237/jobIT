import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";

const Company = ({ CompanyLogo, jobTitle, CompanyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{ uri: CompanyLogo }} style={styles.logoImage} />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{CompanyName} /</Text>
        <View style={styles.locationBox}>
          <Image
            style={styles.locationImage}
            source={icons.location}
            resizeMode="contain"
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
