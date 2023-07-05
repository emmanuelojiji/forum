import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.forum.app',
  appName: 'forum',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
