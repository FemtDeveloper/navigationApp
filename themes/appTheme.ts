import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  btnContainer: {flexDirection: 'row', marginTop: 10},

  btnPersona: {
    height: 50,
    width: 100,
    backgroundColor: 'red',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnPersonaTexto: {
    color: 'white',
    fontWeight: '600',
  },
  avatarContainer: {marginTop: 10, alignItems: 'center'},
  avatar: {width: 100, height: 100, borderRadius: 50},
  menuContainer: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  menuBtn: {marginVertical: 10},
  menuText: {
    fontSize: 20,
  },
});
