import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1621',
    paddingTop: 35,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  avatar: {
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    color: 'white',
  },
  email: {
    fontSize: 14,
    color: 'white',
  },
  drawerButtons: {
    alignItems: 'center',

    width: 250,
  },
  planet: {
    width: '90%',
    backgroundColor: "#4268B1",
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  planetName: {
    color: '#FFFAFA',
    fontSize: 18,
    marginLeft: 10,
  }
});


