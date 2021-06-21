import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },

    image: { 
        width: '100%',
        height: 360,
    },

    content: { 
        marginTop: -40,
        paddingHorizontal: 50, 
    },

    title: { 
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
    },
    
    subTitle: { 
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        paddingBottom: 10
    },

  });
  
export default styles;