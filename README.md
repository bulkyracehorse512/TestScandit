### MINIMAL SCANNER APP

clone repo, run `npm install` and `react-native link`.

after deploying to device via xcode or `react-native run-android` with device connected, scan and hit the **go back to scanner** or **back** button 5-20 times.  eventually on iPhone scanner black screens or on android scanner freezes.


******** **before running make sure to go into** `app/scanner.js` **and replace** `ScanditModule.setAppKey('USE APP KEY');` **with actual Scandit App Key.**
