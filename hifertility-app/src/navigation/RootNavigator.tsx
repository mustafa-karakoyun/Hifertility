import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

// Screens
import NotificationsScreen from '../screens/NotificationsScreen';
import HomeworkScreen from '../screens/HomeworkScreen';
import CounselingScreen from '../screens/CounselingScreen';
import RoadmapScreen from '../screens/RoadmapScreen';
import CoursesScreen from '../screens/CoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import BlogScreen from '../screens/BlogScreen';
import BlogDetailScreen from '../screens/BlogDetailScreen';
import SurveyScreen from '../screens/SurveyScreen';
import ForumScreen from '../screens/ForumScreen';
import NewTopicScreen from '../screens/NewTopicScreen';
import ContactScreen from '../screens/ContactScreen';
import AboutScreen from '../screens/AboutScreen';
import ConsentScreen from '../screens/ConsentScreen';
import QuickTipsScreen from '../screens/QuickTipsScreen';

// Custom Drawer
import CustomDrawerContent from '../components/CustomDrawerContent';

// Types
import type { DrawerParamList, RootStackParamList } from '../types/navigation';

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.textSecondary,
        drawerLabelStyle: {
          fontSize: 15,
          marginLeft: -16,
        },
      }}
    >
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Bildirimler',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Homework"
        component={HomeworkScreen}
        options={{
          title: 'Ev Ödevi',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="clipboard" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Counseling"
        component={CounselingScreen}
        options={{
          title: 'Danışmanlık',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Roadmap"
        component={RoadmapScreen}
        options={{
          title: 'Yol Haritası',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          title: 'Kurslar',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="school" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          title: 'Blog',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Survey"
        component={SurveyScreen}
        options={{
          title: 'Anket',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          title: 'Forum',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'İletişim',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="mail" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'Hakkında',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Consent"
        component={ConsentScreen}
        options={{
          title: 'Onay & Rıza',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="document-text" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="QuickTips"
        component={QuickTipsScreen}
        options={{
          title: 'Hızlı İpuçları',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bulb" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CourseDetail"
          component={CourseDetailScreen}
          options={({ route }: { route: any }) => ({
            title: route.params.courseTitle,
          })}
        />
        <Stack.Screen
          name="BlogDetail"
          component={BlogDetailScreen}
          options={{ title: 'Blog Detay' }}
        />
        <Stack.Screen
          name="NewTopic"
          component={NewTopicScreen}
          options={{ title: 'Yeni Konu Oluştur' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
