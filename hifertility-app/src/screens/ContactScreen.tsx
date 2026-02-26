import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
      return;
    }
    Alert.alert('Başarılı', 'Mesajınız iletildi. En kısa sürede dönüş yapılacaktır.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="mail" size={48} color={colors.primary} />
        <Text style={styles.headerTitle}>İletişim</Text>
        <Text style={styles.headerSubtitle}>
          Bizimle iletişime geçin
        </Text>
      </View>

      <View style={styles.contactInfo}>
        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => Linking.openURL('tel:+905551234567')}
        >
          <Ionicons name="call" size={24} color={colors.primary} />
          <Text style={styles.contactText}>+90 555 123 45 67</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => Linking.openURL('mailto:info@hifertility.com')}
        >
          <Ionicons name="mail" size={24} color={colors.primary} />
          <Text style={styles.contactText}>info@hifertility.com</Text>
        </TouchableOpacity>

        <View style={styles.contactItem}>
          <Ionicons name="location" size={24} color={colors.primary} />
          <Text style={styles.contactText}>
            İstanbul, Türkiye{'\n'}Örnek Mahallesi, No: 123
          </Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Mesaj Gönderin</Text>

        <TextInput
          style={styles.input}
          placeholder="Adınız Soyadınız"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="E-posta Adresiniz"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Mesajınız"
          value={message}
          onChangeText={setMessage}
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    backgroundColor: colors.white,
    padding: 32,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  contactInfo: {
    backgroundColor: colors.white,
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  contactText: {
    fontSize: 14,
    color: colors.text,
    marginLeft: 16,
    flex: 1,
  },
  formContainer: {
    backgroundColor: colors.white,
    margin: 16,
    marginTop: 0,
    padding: 16,
    borderRadius: 12,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 12,
    backgroundColor: colors.backgroundLight,
  },
  messageInput: {
    minHeight: 120,
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  submitText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
