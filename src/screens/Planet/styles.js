import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    color: '#FFFAFA',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'absolute',
    top: 21,
    left: 120,
  },
  planet: {
    resizeMode: 'cover',
    width: 220,
    height: 220,
  },
  information: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statu: {
    flexDirection: 'row',
  },
  statuText: {
    color: '#FFFAFA',
    marginLeft: 5,
  },
  description: {
    marginTop: 20,
    color: '#FFFAFA',
  },
  button: {
    marginTop: 40,
    backgroundColor: '#FFFAFA',
    padding: 10,
    alignSelf: 'stretch',
    borderRadius: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
