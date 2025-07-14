import { StyleSheet, View } from "react-native";

export default function Icons() {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }
  });

  return (
    <View style={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path d="M62 30V34M38 30V34" stroke="#141B34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M49.991 52H50.009M49.991 60H50.009M57.9821 52H58M42 52H42.0179M42 60H42.0179" stroke="#141B34" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M33 42H67" stroke="#141B34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 50.4865C31 41.7719 31 37.4146 33.5042 34.7073C36.0085 32 40.039 32 48.1 32H51.9C59.961 32 63.9915 32 66.4958 34.7073C69 37.4146 69 41.7719 69 50.4865V51.5135C69 60.2281 69 64.5854 66.4958 67.2927C63.9915 70 59.961 70 51.9 70H48.1C40.039 70 36.0085 70 33.5042 67.2927C31 64.5854 31 60.2281 31 51.5135V50.4865Z" stroke="#141B34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 42H68" stroke="#141B34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 226 225" fill="none">
        <g filter="url(#filter0_i_4_5675)">
          <path d="M105.823 89.6445C105.823 85.7749 108.96 82.6379 112.829 82.6379C116.699 82.6379 119.836 85.7749 119.836 89.6445C119.836 93.5142 116.699 96.6512 112.829 96.6512C108.96 96.6512 105.823 93.5142 105.823 89.6445Z" fill="black" />
          <path d="M105.823 112.066C105.823 108.196 108.96 105.059 112.829 105.059C116.699 105.059 119.836 108.196 119.836 112.066C119.836 115.935 116.699 119.072 112.829 119.072C108.96 119.072 105.823 115.935 105.823 112.066Z" fill="black" />
          <path d="M105.823 134.487C105.823 130.617 108.96 127.48 112.829 127.48C116.699 127.48 119.836 130.617 119.836 134.487C119.836 138.356 116.699 141.493 112.829 141.493C108.96 141.493 105.823 138.356 105.823 134.487Z" fill="black" />
        </g>
      </svg>
    </View>
  );
}