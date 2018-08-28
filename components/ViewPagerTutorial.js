import React, {
  Component
} from 'react';

import {
  View,
  ViewPagerAndroid,
  Text
} from 'react-native';

export default class ViewPagerTutorial extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
      <ViewPagerAndroid style={styles.viewPager}
      initialPage={0}>
        <View style={styles.pageStyle} key="1">
        <Text>First page</Text>
      </View>
      <View style={styles.pageStyle} key="2">
        <Text>Second page</Text>
      </View>
      </ViewPagerAndroid>
      </View>
    );
  }
}

var styles = {
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
}