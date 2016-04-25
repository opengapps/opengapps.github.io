---
layout: post
title:  "Google Dialer"
date:   2016-04-25
author: mfonville
---
<div markdown='1'>
![Google Dialer]({{ site.blogimg }}googledialer.png)
</div>
Since [November 2015](https://github.com/opengapps/all/commits/master/priv-app/com.google.android.dialer/23/nodpi) Google updates their *Google Dialer* application via the [Play Store](https://play.google.com/store/apps/details?id=com.google.android.dialer). The Open GApps scripts already supported the inclusion of Google Dialer as a package already before that, in [October 2015](https://github.com/opengapps/opengapps/commit/403c8c46eec77c89f37ad65e75f28a12dff6de98). But the *Google Dialer* app faced many problematic issues at the time. I.e. before Google released their Play Store version, installing the Google Dialer would not work on any custom ROM. Because of these issues *Google Dialer* was not included in the regular Open GApps packages.

In [March 2016](https://github.com/opengapps/opengapps/commit/a68ca5c42ff8e8938bf91735be369311b8caedeb) we finally enabled, after some testing with the Play Store version, the Google Dialer as an optional extra. Using the `DialerGoogle` keyword users could install with the dialer to experiment on their device. The feedback from users was that on Nexus devices it worked, but on almost all non-Nexus devices there were problems. But even on Nexus devices, it was obligatory to manually set Google Dialer as the default Phone app, otherwise the device would reboot when making or receiving a phone call.

<iframe width="420" height="315" src="https://www.youtube.com/embed/BXg7k75sVc8" frameborder="0" allowfullscreen></iframe>

*Instructions how to set the Google Dialer as default phone app*

Fast forward to [April 2016](https://github.com/opengapps/opengapps/commit/cf5a2b32c1baa739600e6131cfe70fee131e986c), and more changes have been applied to `DialerGoogle`. It ain't a special keyword anymore, but now acts as a regular [include/exclude keyword](https://github.com/opengapps/opengapps/wiki/Advanced-Features-and-Options#include-and-exclude-google-applications). Also `DialerGoogle` has been split into a supporting `DialerFramework` package, that includes the Framework-files.  While `DialerGoogle` is only in *stock* and larger, these Framework-files are included in all package variants. The Framework-files are required to be able to install Google Dialer from the Play Store, without them any device is deemed incompatible. The `DialerFramework` is obligatory if you want to install the `DialerGoogle` package (if you are using a `gapps-config`).

`DialerFramework` is only installed on white-listed devices, currently this white-list only includes Nexus Devices. You can override the white-list using the [`forcedialer` keyword](https://github.com/opengapps/opengapps/wiki/Advanced-Features-and-Options#force-dialer).

It is important to note, that the `DialerFramework` only receives any security updates if you update your Open GApps installation and not via the Play Store. So make sure to update your Open GApps installation at least once a month, after Google’s monthly security updates are added to the Open GApps repository.
