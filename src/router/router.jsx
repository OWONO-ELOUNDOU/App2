import React from "react";
import homeScreen from "../screens/home";
import historyScreen from "../screens/history";
import accountScreen from "../screens/account"
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { COLORS } from "../constants/theme";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from "react-navigation-stack";

/*
const homeStack = createNavigationStack({
    home: {
        screen: homeScreen,
    }
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: COLORS.primary
        },
        headerTitle: 'Dishes',
        headerTitleStyle: {
            color: COLORS.white,
            fontWeight: '800'
        }
    }
})
*/

const bottomStack = createBottomTabNavigator({
    account: {
        screen: accountScreen,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: ({tintColor, focused}) => <Icon name='account-outline' size={focused ? 30: 20} color={tintColor} />
        }
    },
    home: {
        screen: homeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor, focused}) => <Icon name='home-outline' size={focused ? 30: 20} color={tintColor} />
        }
    },
    dish: {
        screen: historyScreen,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({tintColor, focused}) => <Icon name='history' size={focused ? 30: 20} color={tintColor} />
        }
    }
},{
    initialRouteName: 'home',
    tabBarOptions: {
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.grey,
        labelStyle: {
            fontWeight: 'bold'
        },
        tabStyle: {
            paddingTop: 5,
            height: 60,
        }
    }
})

/*
const mainStack = createSwitchNavigator({
    auth: {
        screen: authStack,
        navigationOptions: {
            headerShow: false,
        }
    },
    main: {
        screen: bottomStack
    }
})
*/

const Router = createAppContainer(bottomStack);

export default Router;