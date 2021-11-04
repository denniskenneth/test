import React, { useContext } from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import HomeScreen from '../../screens/HomeScreen';
import { UserContext } from '../../context/UserContext';

const Drawer = createDrawerNavigator();

export const HomeDrawer = () => (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
)

function CustomDrawerContent(props) {
    const { logOut } = useContext(UserContext)

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={() => logOut()}
            />
        </DrawerContentScrollView>
    );
}