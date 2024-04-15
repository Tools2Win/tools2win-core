
import { createStackNavigator } from '@react-navigation/stack';
import colors from 'tools2win-core/src/themes/colors';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { useSubscriptions } from 'tools2win-core/src/hooks/useSubscriptions';
import { Text } from '@rneui/themed';

const theme = createTheme({
    lightColors: {
        primary: colors.primary.main,
        secondary: colors.secondary.main,
        background: colors.background.default,
    },
    mode: 'light',
    components: {
        Text: {
            style: {
                textAlign: 'center',
                marginBottom: 30,
                color: colors.text.primary
            },
            h4Style: {
                marginBottom: 10,
                fontWeight: 'bold'
            }
        },
        Image: {
            resizeMode: 'contain',
            containerStyle: {
                alignSelf: 'center',
            },
            style: {
                width: 250,
                height: 250,
            }
        },
        Input: {
            leftIcon: {
                size: 20
            }
        },
        Button: {
            style: {
                marginBottom: 20
            }
        }
    }
})

const SubscriptionManager = ({ children, subscriptionId }) => {
    const { subscriptions, loading } = useSubscriptions();

    if (loading) return null;

    const subscribed = subscriptions.some(sub => sub.subscriptionID === subscriptionId && sub.status === 'active');

    if (!subscribed) return <ThemeProvider theme={theme}><Text>Not Subscribed</Text></ThemeProvider>;

    return children;
};

export default SubscriptionManager;