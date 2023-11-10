import react from "react";
import { TouchableOpacity,Image,View,Animated } from "react-native";
import { useRef,useState } from "react";



const Floatingmenu=() =>{
    const animation = useRef(new Animated.Value(0)).current;
    const [isButtonClicked, setIsButtonClicked]= useState(false);

    const toggleButton=()=>{
        let toValue=isButtonClicked?0:1
        Animated.spring(animation,{
            toValue,
            fraction:5,
            useNativeDriver: true,
        }). start();
        setIsButtonClicked(!isButtonClicked);
    };
    const rotation={transform:[
       { rotate:animation.interpolate({
            inputRange:[0,1],
            outputRange:["0deg","45deg"]
        }),
    }
    ],
};
 
const style1={
    transform:[
        {scale:animation},
        {
            translateY:animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,-80]
        }),
    },
    ],
};
const style2={
    transform:[
        {scale:animation},
        {
            translateY:animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,-130]
        }),
    },
    ],
};
const style3={
    transform:[
        {scale:animation},
        {
            translateY:animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,-180]
        }),
    },
    ],
};
const style4={
    transform:[
        {scale:animation},
        {
            translateY:animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,-230]
        }),
    },
    ],
};
const style5={
    transform:[
        {scale:animation},
        {
            translateY:animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,-280]
        }),
    },
    ],
};
const style6={
    transform:[
        {scale:animation},
        {
            translateY:animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,-330]
        }),
    },
    ],
};
    return (
    <View style={{flex:1}}>
        <View style={{
            position:'absolute',
            bottom:30,
            alignself:'center',
            justifyContent:'center',
            alignitems:'center'
        }}>

        <TouchableOpacity style={{bottom:0,marginBottom:-30}}>
        <Animated.View style={[{width:50,height:50,borderRadius:30,backgroundColor:"#BDFA3C",justifyContent:'center',alignitems:'center',padding:10},style6,]}>
        <Image style={{width:30,height:30}} source={require('./images/settings.png')}></Image>
        </Animated.View>
        </TouchableOpacity>
         <TouchableOpacity style={{bottom:0,marginBottom:-30}}>
        <Animated.View style={[{width:50,height:50,borderRadius:30,backgroundColor:"#BDFA3C",justifyContent:'center',alignitems:'center',padding:15},style5,]}>
        <Image style={{width:20,height:25}} source={require('./images/account.png')}></Image>
        </Animated.View>
    </TouchableOpacity>
        <TouchableOpacity style={{bottom:0,marginBottom:-30}}>
        <Animated.View style={[{width:50,height:50,borderRadius:30,backgroundColor:"#BDFA3C",justifyContent:'center',alignitems:'center',padding:6},style4,]}>
        <Image style={{width:40,height:40,top:3}} source={require('./images/reel.png')}></Image>
        </Animated.View>
    </TouchableOpacity>
        <TouchableOpacity style={{bottom:0,marginBottom:-30}}>
        <Animated.View style={[{width:50,height:50,borderRadius:30,backgroundColor:"#BDFA3C",justifyContent:'center',alignitems:'center',padding:10},style3,]}>
        <Image style={{width:30,height:30}} source={require('./images/Search.png')}></Image>
        </Animated.View>
    </TouchableOpacity>
        <TouchableOpacity style={{bottom:0,marginBottom:-30}}>
        <Animated.View style={[{width:50,height:50,borderRadius:30,backgroundColor:"#BDFA3C",justifyContent:'center',alignitems:'center',padding:10},style2,]}>
        <Image style={{width:30,height:30}} source={require('./images/Chat.png')}></Image>
        </Animated.View>
    </TouchableOpacity>
        <TouchableOpacity style={{bottom:0,marginBottom:-50}}>
        <Animated.View style={[{width:50,height:50,borderRadius:30,backgroundColor:"#BDFA3C",justifyContent:'center',alignitems:'center',padding:10},style1,]}>
        <Image style={{width:30,height:30}} source={require('./images/Home.png')}></Image>
        </Animated.View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity= {1} style={{bottom:0,marginBottom:10}} onPress={() => {toggleButton();}}>
        <Animated.View style={{width:60,height:60,borderRadius:30,backgroundColor:"white",justifyContent:'center',alignitems:'center',padding:15}}>
        <Image style={{width:30,height:30}} source={isButtonClicked?require('./images/cross.png'):require('./images/menu.png')}></Image>
        </Animated.View>
    </TouchableOpacity>
    </View>
    </View>
)
    };

export {Floatingmenu}