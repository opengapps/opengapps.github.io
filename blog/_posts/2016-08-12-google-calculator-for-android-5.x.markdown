---
layout: post
title:  "Google Calculator for Lollipop"
date:   2016-08-12
author: mfonville
---
<div markdown='1'>
![Google Calculator]({{ site.blogimg }}googlecalculator.png)
</div>
Good news for those who are still using Android Lollipop and do like Google Calculator!

#### AOSP app replacements by Google
Google started in recent years to replace various apps that used to be completely in the AOSP project with their own proprietary spins on Nexus and Android One devices.
This started with Lollipop *(5.X)* for Google's WebView, Google Contacts, Google Dialer, Google Clock and Google's NFC Tag apps.
With Android Marshmallow *(6.0)* this was also extended to the Google Calculator app.

#### Google Calculator minimal API level
When the first spins of Google Calculator were released with the Nexus devices of 2015, the APK for Google Calculator were compiled to demand at minimum API level 23, that means *Android 6.0*.
So Open GApps could only offer to install the Google Calculator in the *6.0* packages.
Last week Google released an updated version of the APK in preparation for Android Nougat *(7.0)* and at the same time decided to lower the requirement to API level 21.
We don't know why they lowered the requirement, because in general compiling for a lower API level means that the code has to include more compatibility-hacks.
But we tested this [new APK](https://github.com/opengapps/all/tree/master/app/com.google.android.calculator/21/nodpi) on Android *(5.X)* devices and it works without problems. That is why you can now find Google Calculator also in the *(5.0)* and *(5.1)* Open GApps packages (*mini* and larger).
