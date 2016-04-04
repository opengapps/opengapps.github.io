---
layout: post
title:  "Reliable and Trusted GApps?"
date:   2015-09-09
author: mfonville
---
<div markdown='1'>
![Hackerz]({{ site.blogimg }}fsociety.png)
</div>
In normal 'educated' computing practice, no one in their sane mind would download a random executable-file from some unknown person on the internet, grant it all administrator rights to your system and happily keep using the device for banking and other confidential and trusted purposes.

#### ROMs
But still, this is what almost everybody with a Custom ROM does... First they download a ROM created by somebody on XDA and put it on their device. Then they download a GApps package, probably also from XDA, and again they just install it on their device. Then they set up their Google account, install their banking app etcetera. No one seems to worry about possible security vulnerabilities in that process, let alone possible malicious intents...

#### Source code
Luckily, for the ROM there are already relatively good solutions in place. Most ROM developers publicize their development work in a Git repository already. One can review their code, clone the repository and compile their own ROM from these sources. Creating their own safe-to-install version, that can be trusted not to have malicious content (only if you have the time to check all the code, though).

#### Proprietary GApps
With the GApps, that is more difficult. First of all, the GApps themselves are not open source, neither will they probably ever be. But at least most people have good faith in Google and trust them not put some malicious code within their applications. But still, how could one know that an app in a GApps package is really from Google?

#### System APK Verification
First the bad news: The Android platform itself will not help you in verifying an APK that is going to be installed on `/system/`. None of the applications that is installed on `/system/` will be verified for having a correct signature. That is why one should always be very careful when flashing any ZIP package from recovery.

#### Open Source GApps Packaging
So how could one generate a trusted GApps package? Well, key is that the generation process of the GApps package has to be open and reproducible, which is a key aspect of our project. Because only if you can perform (or fully check) all exact steps yourself, one can trust the outcome. We at Open GApps care about this and therefore trying to give you the tools to do so.
In the meantime, we also try to improve our own build process to have more safeguards for the integrity of our packages. We try to achieve this by integrating more automated checks for certificate and integrity checking of the APKs that are used in our source repositories and GApps packages.

#### Do-it-yourself!
As second the good news: a simple cookbook to a safe GApps Package:

* Download a trusted [Google Nexus Image](https://developers.google.com/android/nexus/images) and extract a Google APK from it, or download a trusted Google Application from the Google Play Store.
* Extract `META-INF/CERT.RSA` from the APK, extract the key that is used for this certificate (e.g. command: `openssl pkcs7 -inform DER -print_certs -text`) and store it in a keystore with the `keytool` command.
* Download the [Open GApps source from GitHub](https://github.com/opengapps/opengapps) and review the code. Also review the code that is used from third-party tools, like the SignApk.jar and if necessary compile them yourself or choose not to use them.
* Adapt the Open GApps build process to only let it use the keystore you created earlier.
* Check if the certificates of the APKs that will be used to build your GApps package all match the keystore you created earlier.
* Run the `make` command and create your own trusted GApps.

By completing these steps, you have your own trusted GApps package (as long as you trust Google).

#### Track progress
We are still busy trying to improve in this field, if you are interested, please take a look at our tracking [issue #92](https://github.com/opengapps/opengapps/issues/92﻿)
