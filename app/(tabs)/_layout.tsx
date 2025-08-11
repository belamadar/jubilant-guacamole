import React from 'react'
import { Tabs, router } from 'expo-router'
import { Appbar, Menu, Tooltip } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Platform } from 'react-native'

export default function TabLayout() {
  const [menuVisible, setMenuVisible] = React.useState(false)

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#444',
        tabBarStyle: {
          backgroundColor: '#fff5ee',
          borderTopColor: '#eee',
          height: Platform.select({ ios: 80, default: 60 }),
          paddingBottom: Platform.select({ ios: 16, default: 8 }),
          paddingTop: 6,
        },
        header: ({ options, route }) => (
          <Appbar.Header
            mode="small"
            style={{ backgroundColor: '#fff5ee' }}
            statusBarHeight={Platform.select({ ios: 0, default: 0 })}
          >
            <Appbar.Content title={String(options.title ?? route.name)} />

            {/* Quick actions menu (like the template’s headerRight) */}
            <Tooltip title="More options">
              <Appbar.Action
                icon="dots-vertical"
                onPress={() => setMenuVisible(true)}
              />
            </Tooltip>
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisible(false)}
              anchor={{ x: 0, y: 0 }} // required on Android when anchored to an icon
              statusBarHeight={48}
            >
              <Menu.Item
                title="New Trip"
                leadingIcon="plus"
                onPress={() => {
                  setMenuVisible(false)
                  router.push('./new-trip')
                }}
              />
              <Menu.Item
                title="Calendar"
                leadingIcon="calendar"
                onPress={() => {
                  setMenuVisible(false)
                  router.push('./calendar')
                }}
              />
              <Menu.Item
                title="Settings"
                leadingIcon="cog"
                onPress={() => {
                  setMenuVisible(false)
                  router.push('./settings')
                }}
              />
            </Menu>
          </Appbar.Header>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'My Trips',
          tabBarLabel: 'My Trips',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              color={color}
              size={size ?? 24}
              name="format-list-bulleted" // no outline variant; same for focused/unfocused
            />
          ),
        }}
      />

      <Tabs.Screen
        name="new-trip"
        options={{
          title: 'New Trip',
          tabBarLabel: 'New Trip',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size ?? 24} name="plus" />
          ),
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              color={color}
              size={size ?? 24}
              name={focused ? 'calendar' : 'calendar-blank-outline'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              color={color}
              size={size ?? 24}
              name={focused ? 'cog' : 'cog-outline'}
            />
          ),
        }}
      />
    </Tabs>
  )
}
