import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Alert,Image,TextInput} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
     
        <Text style={styles.text1}>문의하기{"\n"}
          {"\n"}</Text>
        
        <Text style={styles.text2}> 제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
        <TextInput
            style={styles.qnaTitle}
            onChangeText={(text) => {this.setState({inputText: text})}}
            placeholder="문의 제목을 입력하세요"
         
          />
        <Text style={styles.text2}> 문의내용&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
        <TextInput
            style={styles.qnaMiddle}
            onChangeText={(text) => {this.setState({inputText: text})}}
            placeholder="PW 입력"
         
          />
        <Button style={styles.button}
           title='ID/PW 찾기'
         color="black"
         
           onPress={() =>Alert.alert('고객센터 점검 시간입니다.')}
           />

      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueView : {
      flex : 1,
      backgroundColor:"blue",
   },
  yellowView : {
      flex : 1,
      backgroundColor:"yellow",
      
   },
  text : {
     color: "black"
  },
  text1 : {
     color: "black",
     fontSize:30
  },
  text2 : {
     color: "black",
     fontSize:20,
     alignItems: 'center',
     justifyContent: 'center',
  },
   
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
   qnaTitle: {
    fontSize:20,
    width: '90%',
    backgroundColor: '#cecece',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
	qnaMiddle: {
    fontSize:15,
    width: '90%',
    backgroundColor: '#cecece',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 300,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
   button:{
      fontSize:10
   }
   
});