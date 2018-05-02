---
layout: post
title:  "Google Dialer for all!"
date:   2016-05-13
author: mfonville
---
<div markdown='1'>
![Google Dialer]({{ site.blogimg }}googledialer.png)
</div>
Google enabled now the Google Dialer for many more phones in the [Play Store](https://play.google.com/store/apps/details?id=com.google.android.dialer) so we will be abandon the whitelist that was mentioned in the [initial Google Dialer blogpost](https://opengapps.org/blog/post/2016/04/25/google-dialer). This means that from now on, Google Dialer framework will be installed by default on all phones. The Dialer can subsequently be installed from the Play Store, or it can directly be installed if using the *Stock*, *Super* or *Aroma* package.

You still need to set Google Dialer as the default Phone app manually, if you remove or disable the stock/AOSP dialer application, to prevent the phone from rebooting when making or receiving a phone call.

<iframe width="420" height="315" src="https://www.youtube.com/embed/BXg7k75sVc8" frameborder="0" allowfullscreen></iframe>

*Instructions how to set the Google Dialer as default phone app*

If you also want Google Dialer to be able to adjust your ringtone settings, you need to grant it access to your system settings. Otherwise you will receive a toast with a message it is not allowed to change those.

<iframe width="420" height="315" src="https://www.youtube.com/embed/KkmddbxbZ8U" frameborder="0" allowfullscreen></iframe>

*Instructions how to set grant Google Dialer permission to access system settings*

The advisory to regularly flash an updated GApps package to update `DialerFramework` remains intact. It can only receive security updates if you update your Open GApps installation and not via the Play Store. Make sure to update your Open GApps installation at least once a month, after Google’s monthly security updates are added to the Open GApps repository.
