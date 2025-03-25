# Kotlin and Compose Compatibility Issue

## Introduction
This project encountered compatibility issues between Kotlin versions and Jetpack Compose Compiler. Specifically, the Compose Compiler (version 1.5.10) requires Kotlin version 1.9.22, but the current project is using Kotlin version 1.9.25, causing compilation errors during Android build.

## Prerequisites
- Node.js
- Yarn
- React Native
- Android Studio
- Xcode (for iOS development)

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/maxwellwachira/kotlinissue.git
cd kotlinissue
```

### 2. Install Dependencies
```bash
yarn install
```

### 3. Environment Configuration
Rename the `.env.example` file to `.env`:
```bash
cp .env.example .env
```
Fill in the respective licenses and configuration details in the `.env` file.

### 4. img.ly Dashboard Configuration
- Navigate to the img.ly dashboard
- Add your application's package ID (bundle identifier). 
- Edit the package ID and bundle identifier in app.json
- This is crucial for SDK authorization and functionality

### 5. Generate Native Project Files
```bash
npx expo prebuild
```
This command will generate Android and iOS project files.

### 6. Android Development Build
```bash
yarn android
```

## Troubleshooting

### Android Build Issues
At this stage, you will encounter Kotlin version compatibility errors:
- Refer to the [Compose-Kotlin Compatibility Map](https://developer.android.com/jetpack/androidx/releases/compose-kotlin)

### Note
- iOS builds are working correctly
- Android builds may require additional version adjustments
