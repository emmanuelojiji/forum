import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.whisperapp.app",
  appName: "forum",
  webDir: "build",
  /*server: {
    androidScheme: 'https'
    "url": "http://192.168.1.133:3000",
    "cleartext": true
  },*/

  server: {
    url: "http://192.168.1.133:3000",
    cleartext: true,
  },
};

export default config;
