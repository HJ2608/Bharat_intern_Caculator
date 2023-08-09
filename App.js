import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function App() {
  const [result, setResult] = useState("0");
  const [bracket, setBracket] = useState(false);

  class Stack {
    constructor() {
      this.items = [];
    }

    push(element) {
      // push element into the items
      this.items.push(element);
    }

    pop() {
      // return top most element in the stack
      // and removes it from the stack
      // Underflow if stack is empty
      if (this.items.length === 0) return "Underflow";
      return this.items.pop();
    }

    peek() {
      // return the top most element from the stack
      // but does'nt delete it.
      return this.items[this.items.length - 1];
    }
  }

  const onPress = (title) => {
    if (title === "AC") {
      setResult("0");
    } else if (title === "%") {
      setResult(result / 100);
    } else if (title === "DL") {
      setResult(result.substring(0, result.length - 1));
    } else if (title === "()") {
      if(result==="0"){
        setResult("(")
        setBracket(true)
      }
      
      else if (result.slice(-1) == "+" || result.slice(-1) == "-" || result.slice(-1) == "*" || result.slice(-1) == "/" || result.slice(-1) == "."){
        setResult(result+"(")
        setBracket(true)
      }

      else
      {
        if(bracket === false){
          setResult(result+"(");
          setBracket(true);
        }
        else {
          setResult(result+")");
          setBracket(false);
        }
      }
    } else if (title === "=") {
      setResult(eval(result));
      let stack = new Stack();
      stack.push("z");
      for (let i = 0; i < result.length; i++) {
        stack.push(result[i]);
        // right console.log(result[i]);
      }

      let str1,
        str2,
        str3,
        str4 = "";
      // undefined console.log(str1);

      for (let i = 0; i < 1000; i++) {
        //console.log(typeof stack.peek());
        if (
          stack.peek() === "0" ||
          stack.peek() === "1" ||
          stack.peek() === "2" ||
          stack.peek() === "3" ||
          stack.peek() === "4" ||
          stack.peek() === "5" ||
          stack.peek() === "6" ||
          stack.peek() === "7" ||
          stack.peek() === "8" ||
          stack.peek() === "9" ||
          stack.peek() === "."
        ) {
          //console.log("hi");
          if (str2 === "") {
            str1 = stack.peek();
            stack.pop();
            console.log(str1);
          } else {
            str3 = str3 + stack.peek();
            stack.pop();
            //console.log(str3);
          }
        } else if (
          stack.peek() === "+" ||
          stack.peek() === "-" ||
          stack.peek() === "*" ||
          stack.peek() === "/" ||
          stack.peek() === "z"
        ) {
          if (str2 === "") {
            str2 = stack.peek();
            //console.log(str2);
          } else {
            if (str2 === "+") {
              str4 = str1 + str3;
              if (stack.peek() === "z") {
                //console.log(str4);
                break;
              }
              for (let j = 0; j < str4.length; j++) {
                stack.push(str4[j]);
                //console.log(str4[j]);
              }
              str1 = str2 = str3 = str4 = "";
            } else if (str2 === "-") {
              str4 = str3 - str1;
              if (stack.peek() === "z") {
                //console.log(str4);
                break;
              }
              for (let j = 0; j < str4.length; j++) {
                stack.push(str4[j]);
                //console.log(str4[j]);
              }
              str1 = str2 = str3 = str4 = "";
            } else if (str2 === "*") {
              str4 = str1 * str3;
              if (stack.peek() === "z") {
                //console.log(str4);
                break;
              }
              for (let j = 0; j < str4.length; j++) {
                stack.push(str4[j]);
                //console.log(str4[j]);
              }
              str1 = str2 = str3 = str4 = "";
            } else if (str2 === "/") {
              str4 = str3 / str1;
              if (stack.peek() === "z") {
                //console.log(str4);
                break;
              }
              for (let j = 0; j < str4.length; j++) {
                stack.push(str4[j]);
                //console.log(str4[j]);
              }
              str1 = str2 = str3 = str4 = "";
            }
          }
        }
      }
    } else {
      if (result == "0") {
        if (isNaN(title)) {
          setResult(result + title);
        }
        else {
          setResult(title)
        }
      }

      else if (isNaN(title)) {
        if (result.slice(-1) == "+" || result.slice(-1) == "-" || result.slice(-1) == "*" || result.slice(-1) == "/" || result.slice(-1) == ".") {
          setResult(result.slice(0, -1) + title)
        }

        else {
          setResult(result + title)
        }
      }

      else {
        setResult(result + title);
      }
    }
  };

  const Btn1 = ({ title }) => (
    <TouchableOpacity style={styles.buttonLightGrey}>
      <Text style={{ fontSize: 30 }} onPress={() => onPress(title)}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const Btn2 = ({ title }) => (
    <TouchableOpacity style={styles.buttonOrange}>
      <Text
        style={{ color: "#FFFFFF", fontSize: 30 }}
        onPress={() => onPress(title)}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const Btn3 = ({ title }) => (
    <TouchableOpacity style={styles.buttonGrey}>
      <Text
        style={{ color: "#FFFFFF", fontSize: 30 }}
        onPress={() => onPress(title)}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const Btn4 = ({ title }) => (
    <TouchableOpacity style={styles.buttonZero}>
      <Text
        style={{ color: "#FFFFFF", fontSize: 30 }}
        onPress={() => onPress(title)}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const Btn5 = ({ title }) => (
    <TouchableOpacity style={styles.buttonLightGrey}>
      <Text
        style={{ fontSize: 30 }}
        onPress={() => onPress("DL")}
        onLongPress={() => onPress("AC")}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={{ fontSize: 60, color: "#FFFFFF" }}>{result}</Text>
        </View>

        <View style={styles.input}>
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            <Btn5 title="AC" />
            <Btn1 title="()" />
            <Btn1 title="%" />
            <Btn2 title="/" />
            <Btn3 title="7" />
            <Btn3 title="8" />
            <Btn3 title="9" />
            <Btn2 title="*" />
            <Btn3 title="4" />
            <Btn3 title="5" />
            <Btn3 title="6" />
            <Btn2 title="-" />
            <Btn3 title="1" />
            <Btn3 title="2" />
            <Btn3 title="3" />
            <Btn2 title="+" />
            <Btn4 title="0" />
            <Btn3 title="." />
            <Btn2 title="=" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifycontent: "center",
    alignSelf: "center",
    backgroundColor: "#040404"
  },
  display: {
    height: "35%",
    backgroundColor: "#1f1e1e",
    alignItems: "flex-end",
    paddingTop: "18%"
  },
  input: {
    backgroundColor: "#1f1e1e",
    height: "65%",
  },
  buttonLightGrey: {
    height: "18.5%",
    width: "20%",
    borderRadius: 50,
    backgroundColor: "#bfbfbf",
    justifyContent: "center",
    marginTop: "4.5%",
    marginLeft: "3.5%",
    alignItems: "center"
  },
  buttonGrey: {
    height: "18.5%",
    width: "20%",
    borderRadius: 50,
    backgroundColor: "#575757",
    justifyContent: "center",
    marginTop: "4.5%",
    marginLeft: "3.5%",
    alignItems: "center"
  },
  buttonOrange: {
    height: "18.5%",
    width: "20%",
    borderRadius: 50,
    backgroundColor: "#FFA500",
    justifyContent: "center",
    marginTop: "4.5%",
    marginLeft: "3.5%",
    alignItems: "center"
  },
  buttonZero: {
    height: "18.5%",
    width: "43%",
    borderRadius: 45,
    backgroundColor: "#575757",
    justifyContent: "center",
    marginTop: "4.5%",
    marginLeft: "3.5%",
    alignItems: "center"
  }
});

export default App;
