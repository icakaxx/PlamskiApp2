# 🎨 NaidenovART Portfolio - Mobile App

Professional art portfolio showcasing vehicle art, street posters, and creative projects, now available as a native mobile app using Capacitor.

## 📱 Mobile App Features

- **Native Performance**: Smooth scrolling and animations
- **Offline Viewing**: Browse artwork without internet connection
- **Native Sharing**: Share artwork using device's native sharing
- **Full-Screen Experience**: Immersive art viewing
- **Bilingual Support**: English/Bulgarian language toggle

## 🛠 Development Setup

### Prerequisites
- Node.js (v16 or higher)
- Android Studio (for Android development)
- Xcode (for iOS development - macOS only)

### Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build for Mobile**
   ```bash
   # Windows
   .\build.bat
   
   # Or manually
   npm run build
   npx cap sync
   ```

3. **Open in Android Studio**
   ```bash
   npx cap open android
   ```

## 📁 Project Structure

```
NaidenovART/
├── 📂 dist/              # Built app for mobile
├── 📂 android/           # Android native project
├── 📂 Poetry/           # Street poster images
├── 📂 Vehicle/          # Car, motor, helmet art
├── 📂 Aseam/            # ASEA-M project images
├── 📂 ProjectAlfa/      # Alfa Romeo project
├── 📂 Awards/           # Awards and certificates
├── 📱 index.html        # Main web app
├── 🎨 styles.css        # Responsive styling
├── ⚡ script.js         # Interactive features
└── 📱 capacitor.config.json # Mobile app config
```

## 🔧 Available Scripts

- `npm run build` - Build web assets for mobile
- `npm run dev` - Start development server
- `npm run cap:build` - Build and sync with Capacitor
- `npm run cap:android` - Build and open Android Studio
- `.\build.bat` - Windows build script

## 📱 Platform Support

### ✅ Android
- Minimum SDK: 24 (Android 7.0)
- Target SDK: Latest
- Architecture: arm64-v8a, armeabi-v7a

### 🍎 iOS (Coming Soon)
- Minimum iOS: 13.0
- Architecture: arm64

## 🎨 App Configuration

The mobile app includes:
- **App Name**: NaidenovART Portfolio
- **Bundle ID**: com.naidenovart.portfolio
- **Theme Color**: #667eea (Purple-blue gradient)
- **Orientation**: Portrait optimized
- **Splash Screen**: Custom branding

## 🚀 Deployment

### Android Play Store
1. Build signed APK in Android Studio
2. Upload to Google Play Console
3. Complete store listing with screenshots

### iOS App Store (Future)
1. Archive in Xcode
2. Upload to App Store Connect
3. Submit for review

## 📸 Screenshots

The app showcases:
- **Hero Section**: Animated logo and call-to-action
- **About Section**: Artist story with statistics
- **Project Galleries**: Alfa Romeo, ASEA-M, PizzaStop
- **Portfolio Categories**: Cars, Motors, Helmets
- **Street Posters**: Poetry and community art
- **Awards**: Professional recognition

## 🌐 Web Version

The portfolio is also available as a responsive web app with the same features and content.

## 📞 Contact

- **Instagram**: [@naidenov_art](https://www.instagram.com/naidenov_art/)
- **Facebook**: [NaidenovART Profile](https://www.facebook.com/profile.php?id=61573373319939)

---

**Built with ❤️ using Capacitor + VanillaJS** 