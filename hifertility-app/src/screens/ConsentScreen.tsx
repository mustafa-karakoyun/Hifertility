import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function ConsentScreen() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const handleSave = () => {
    if (!acceptedTerms || !acceptedPrivacy) {
      Alert.alert('Uyarı', 'Lütfen tüm onayları işaretleyin.');
      return;
    }
    Alert.alert('Başarılı', 'Onaylarınız kaydedildi.');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="document-text" size={48} color={colors.primary} />
        <Text style={styles.headerTitle}>Onay ve Rıza</Text>
      </View>

      <View style={styles.contentCard}>
        <Text style={styles.sectionTitle}>Kullanım Koşulları</Text>
        <Text style={styles.paragraph}>
          Hifertility uygulamasını kullanarak aşağıdaki koşulları kabul etmiş
          olursunuz:
        </Text>
        <Text style={styles.listItem}>
          • Verdiğiniz bilgilerin doğru ve güncel olması gerekmektedir.
        </Text>
        <Text style={styles.listItem}>
          • Uygulama sağlık danışmanlığı sağlar ancak tıbbi teşhis koymaz.
        </Text>
        <Text style={styles.listItem}>
          • Ciddi sağlık sorunlarında mutlaka bir doktora başvurmalısınız.
        </Text>
        <Text style={styles.listItem}>
          • Kişisel bilgileriniz gizli tutulacaktır.
        </Text>

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setAcceptedTerms(!acceptedTerms)}
        >
          <View style={styles.checkbox}>
            {acceptedTerms && (
              <Ionicons name="checkmark" size={18} color={colors.primary} />
            )}
          </View>
          <Text style={styles.checkboxText}>
            Kullanım koşullarını okudum ve kabul ediyorum
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Gizlilik Politikası</Text>
        <Text style={styles.paragraph}>
          Kişisel verilerinizin korunması bizim için önemlidir:
        </Text>
        <Text style={styles.listItem}>
          • Verileriniz şifrelenerek saklanır.
        </Text>
        <Text style={styles.listItem}>
          • Bilgileriniz üçüncü şahıslarla paylaşılmaz.
        </Text>
        <Text style={styles.listItem}>
          • İstediğiniz zaman verilerinizi silebilirsiniz.
        </Text>
        <Text style={styles.listItem}>
          • KVKK ve GDPR uyumlu çalışıyoruz.
        </Text>

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setAcceptedPrivacy(!acceptedPrivacy)}
        >
          <View style={styles.checkbox}>
            {acceptedPrivacy && (
              <Ionicons name="checkmark" size={18} color={colors.primary} />
            )}
          </View>
          <Text style={styles.checkboxText}>
            Gizlilik politikasını okudum ve kabul ediyorum
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Sağlık Bilgisi Paylaşımı</Text>
        <Text style={styles.paragraph}>
          Sağlık bilgileriniz, size daha iyi hizmet verebilmek için uzman
          danışmanlarımızla paylaşılabilir. Bu bilgiler tamamen gizli tutulur ve
          sadece tedavi sürecinizde kullanılır.
        </Text>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Kaydet</Text>
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
  },
  contentCard: {
    backgroundColor: colors.white,
    margin: 16,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 16,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 12,
  },
  listItem: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 6,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  saveText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
