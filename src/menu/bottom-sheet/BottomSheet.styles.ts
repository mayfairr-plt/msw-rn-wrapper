import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },

  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    fontWeight: 'bold',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },

  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },

  buttonText: {
    fontWeight: 'bold',
  },
});
