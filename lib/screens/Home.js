import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from "react-redux";


const Home = props => {
  const [destroyed, setDestroyed] = useState(false);
  
  const [selectedChar, setSelectedChar] = useState(1);

  const [chosenSide, setChosenSide] = useState('light');

  // componentDidMount with empty array on second argument
  // useEffect(() => {
  //   console.log('it works')
  // }, []);

  useEffect(()=> {

  }, [props.selectedCharacter])
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.welcome}>Increment</Text>
      <Text style={styles.instructor}>{destroyed ? props.userData.abc : 'no destroy eyes'}</Text>

      <Button title="destroyed" onPress={()=> setDestroyed(true)}/>

    </View>
  );

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    color: "#eeeeee",
    
    alignItems: 'center',
    justifyContent: 'center'
  },
  instructor: {
    fontSize: 20,

    justifyContent: 'center',
    color: '#eee'
  }
}) 



import { connect } from 'react-redux';
import { } from '../actions';

const mapStateToProps = ({ userSettings }) => {
  const { userData } = userSettings;
  return { userData };
}

export default connect(mapStateToProps, {}, null, {forwardRef: true})(Home);

