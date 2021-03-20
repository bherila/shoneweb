import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import theme from "./../../utils/colors";
import styles from "./styles";
import { Card, CardItem, Body, Item, Icon, Input, Button } from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Text from "./../../components/Text";
import { Dimensions } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { TextInputMask } from 'react-native-masked-text';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Login(props) {
  const [mobile, setMobile] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);


  useEffect(() => {
    setFormattedValue(mobile.replaceAll("-",""));
    console.log("formatted", formattedValue);
    
    if (mobile.length === 12) {
      setFormattedValue(mobile.replaceAll("-",""));
    console.log("formatted", formattedValue);
      // props.navigation.navigate("ConfirmSms");
    }
  }, [mobile])



  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container} >
      <View style={{ flex: 1 }}>
        <View style={styles._logView}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles._logo}
          />
        </View>
        <View style={[styles._bodyView, theme.bg]}>
          <View style={{ flex: 1 }}>
            <Card style={styles._card}>
              <CardItem>
                <Body>
                  <Text style={styles._login_desc}>
                    For fast and easy login, we'll need your digits. Don't
``
                    worry about remembering your password for later.
                    </Text>
                </Body>
              </CardItem>
              <Item style={[styles._inputFiled, theme.borderColor]}>
                <Icon active name="call" style={theme.iconColor} />
                <Text style={{ fontWeight: "bold", fontSize: 18, color: "grey" }}>+1 </Text>

                <TextInputMask

                  style={styles._input}
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',//for international set it -&amp;nbsp;INTERNATIONAL type masking
                    withDDD: true,
                    dddMask: '999-999-9999'//this is a your define formatting you use according to your requirment
                  }}

                  maxLength={12}//set length according to your input requirment
                  onChangeText={text => { setMobile(text) }}
                  value={mobile}
                  placeholder={'###-###-####'}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  keyboardType={'number-pad'}
                />
                {/* <TextInputMask
                  onChangeText={(formatted, extracted) => {
                    console.log(formatted) // +1 (123) 456-78-90
                    console.log(extracted) // 1234567890
                  }}
                  mask={"+1 ([000]) [000] [00] [00]"}
                /> */}

              </Item>
              <Button
                style={[styles._continue_btn, theme.bg]}
                onPress={() => props.navigation.navigate("ConfirmSms")}
              >
                <Text style={styles._btn_text}>Continue</Text>
              </Button>
            </Card>
            <View style={{ flex: 1 }}>
              <Text style={styles._footer_text}>Or sign in with</Text>

              <View style={styles._fotter_row}>
                <TouchableOpacity style={styles._fb_btn}>
                  <EvilIcons name="sc-facebook" size={50} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles._apple_btn}>
                  <FontAwesome name="apple" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles._footerBox}>
              <Text style={styles._box_text}>
                By clicking send, you accept our terms of service and privacy
                policy.
                </Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>

  );
}
