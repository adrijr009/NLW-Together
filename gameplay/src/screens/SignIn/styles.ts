import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
        fontSize: 37,
        fontFamily: theme.fonts.title700,
        lineHeight: 40,
    },
    
    subTitle: { 
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        paddingBottom: 10,
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
    },

  });
  
export default styles;