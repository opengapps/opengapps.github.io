---
layout: post
title:  "Nougat WebView"
date:   2016-10-06
author: mfonville
---
<div markdown='1'>
![WebView]({{ site.blogimg }}webview.png)
</div>
Android Nougat *7.0* brings a lot of cool new features. One of them is extra flexibility of WebViewProviders.

#### More WebViewProviders
Besides AOSP WebView and Google WebView, Nougat offers the possibility to use Google Chrome (and its Beta and Dev variants) as WebView provider too. Users have the possibility to select their WebView provider from the Android Settings. This feature is available in stock ROMs, but not yet in custom ROMs without a patch, because AOSP code assumes only AOSP WebView is available.

#### ROM Patch
For ROM developers it is a necessity to include a list of valid WebView Providers in the framework config to expose all possible WebView Providers. On Google's Nexus devices [this list](https://pastebin.com/NHB3Reuk) consists of Google Chrome variants and Google WebView. In the [upstream](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/xml/config_webview_packages.xml) AOSP code only AOSP WebView is defined by default.

**ROM developers should apply [this initial patch](https://github.com/AOSPA/android_frameworks_base/commit/d36582165d4694da101cc65755af0841d443c80e) and [this incremental fix patch](https://github.com/AOSPA/android_frameworks_base/commit/b70f5994464cf6b3b29cedcc4efdd73807a27b0f) to their source tree** to add Google WebView and Google Chrome (plus its variants) as valid WebView providers and achieve functional equivalence with stock ROMs.

Users that want optimal WebView experience, please notify your ROM developer of this patch by members of the Open GApps team and ask them to include it in their ROM. In the near future the Open GApps scripts will be adapted to assume the ROM knows about all these valid WebView providers (just like with *5.1* and *6.0* that did work with Google WebView).

#### Updated Patch
30 October 2016 an update for the initial patch has been released, blogpost updated to include it too.
