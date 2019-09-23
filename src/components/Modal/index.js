import React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { Button } from '../index'
import { colors } from '../../utils';


const BModal = ({ isVisible, message, onPress }) => (
  <Modal
    visible={isVisible}
    transparent
    onRequestClose={onPress}
  >
  <View style={styles.modalWrapper}>
      <View style={styles.modalBox}>
        <Text style={styles.modalMess}>{message}</Text>
        <Button
          btnStyle={styles.modalBtn}
          txtStyle={{ color: colors.whitePrimary }}
          onPress={onPress}
        >
          OK
        </Button>
      </View>
  </View>

  </Modal>
)

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    backgroundColor: colors.darkTransPrimary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBox: {
    backgroundColor: colors.whitePrimary,
    width: '90%',
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  modalMess: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  },
  modalBtn: {
    backgroundColor: colors.redPrimary,
    width: '50%',
    marginTop: 20,
  }
})

export default BModal