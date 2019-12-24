import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector, } from "react-redux";
import { INCREMENT, DECREMENT } from '../actions/types';
import {fireDB,firestore, firebaseAuth} from "../helper";

const Home = () => {

  const counter = useSelector(state => state.counterSettings['counter']);
  const dispatch = useDispatch(); 
  
  const [destroyed, setDestroyed] = useState(false);
  
  const [selectedChar, setSelectedChar] = useState(1);

  const [chosenSide, setChosenSide] = useState('light');

  const [selectedData, setSelectedData] = useState({});

  // componentDidMount with empty array on second argument
  // useEffect(() => {
  //   console.log('it works')
  // }, []);

  useEffect(()=> {
    firebaseAuth.signInAnonymously()
  .then((user) => {
    console.log({"user": user.isAnonymous});
  }).catch(err => {
    console.log(err)
  }) ;
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.welcome}>Increment</Text>
      <Text style={styles.instructor}>{counter}</Text>

      <Button title="Increment" onPress={()=> dispatch({type: INCREMENT, payload: {'abc': 'abcnah'}})}/>
      <Button title="Decrement" onPress={()=> dispatch({type: DECREMENT})}/>

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



// import { connect } from 'react-redux';
// import { } from '../actions';

// const mapStateToProps = ({ userSettings, counterSettings}) => {
//   const { userData } = userSettings;
//   const {counter} = counterSettings;
//   return { userData, counter};
// }

// export default connect(mapStateToProps, {}, null, {forwardRef: true})(Home);
export default Home;

