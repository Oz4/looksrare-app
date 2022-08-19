import { View, Text, Dimensions, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { LRText } from 'src/components/common'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Items from './Items';

const ItemsRoute = () => (
    <Items/>
);


const ActivityRoute = () => (
    <View className='-bg-[#673ab7] flex-1' >
        <LRText>ActivityRoute</LRText>
    </View>
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
    items: ItemsRoute,
    activity: ActivityRoute,
});

const Tabs = () => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'items', title: 'Items' },
        { key: 'activity', title: 'Activity' },
    ]);


    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#2DE370' }}
            style={{ backgroundColor: '#121619' }}
            renderLabel={({ route, focused, color }) => (
                <LRText style={{
                    color: focused ? '#2DE370' : color,
                }}
                    weight='SemiBold'
                >
                    {route.title}
                </LRText>
            )}
        />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{ backgroundColor: '#121619' }}
            renderTabBar={renderTabBar}
        />
    )
}

export default Tabs