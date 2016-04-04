---
layout: post
title:  "Marshmallow Camera"
date:   2016-01-29
author: mfonville
---
<div markdown='1'>
![Google Camera]({{ site.blogimg }}googlecamera.png)
</div>
With Android Marshmallow Google released a new version “3” of their Google Camera app. This version of camera comes pre-bundled with most of their stock Marshmallow ROMs.

#### Marshmallow
The updated application APK states that it requires SDK level 23 (which means Marshmallow *6.0*) as minimal android level for installation. This result in the Open GApps package-building scripts to automatically pick the v3 of the Google Camera when creating installable zips for *6.0*. Because the APK is deemed compatible.

#### Incompatibilities
Unfortunately many people did experience issues with Google Camera v3 on Marshmallow when recording video. Apparently with the introduction of the new Google Camera v3 it assumes certain device and firmware capabilities that many devices and ROMs cannot offer.
This posed a problem for the Open GApps packages. E.g. if we would bundle the v2 version on Marshmallow (which would need an override in the package-building scripts), the people with a v3 compatible device would directly get an (unexpected) update from the Play store offered. But if we bundled v3, many people would experience video recording problems.

We did need to find a solution for this problem, that would provide Google Camera v2 for devices that were not v3-compatible, and v3 for the compatible ones.

#### Determining compatibility indicator(s)
First challenge is: which devices are actually v3-compatible? We looked at the Android Source code and Android Camera documentation, but any version information seems to be only available within the OS itself. E.g. the Google Play Services is able to assess and communicate the device's information and capabilities to the Play Store. Based on that information it can decide to offer the device the Google Camera v3 update or not.
But we, from the device's recovery, have no access to this information (yet). We looked at the camera libraries in the ROM and the symbols it exposes, but we have not found any reliable indicator. So we are forced to work with a white-list with v3 compatible devices. If you know your device is compatible, but it isn't on the white-list yet, please let us know or create a pull request with the devicename added.

#### Including new and legacy Google Camera
The second challenge: how to include both the v2 and v3 Google Camera and let only the compatible version be installed. For this we added functionality to the inc.buildhelper.sh that allows to set a maximum SDK level when looking for an APK to package. After that we created an extra entry in the `inc.buildtarget.sh` script called `cameragooglelegacy` with a maximum SDK level of 22.
Next step was to add “cameragooglelegacy” as extra package-building rule for the *6.0 stock* and *super* packages. In the update-binary installer script there are some logic checks that decides if “cameragoogle” should be installed or not (based on keywords used and your device's prerequisites). An extra piece of logic was added, that if `cameragoogle` is going to be installed, but your device is not on the white-list, it will use `cameragooglelegacy` instead.

Adding the extra Camera Google v2 to the *6.0* packages takes around 20MiB extra. So the download is a bit larger than before. Let's hope that when Android N is released this situation to be improved, so that this trick won't be necessary anymore.

If you do have any ideas how to figure out if a device is Google Camera v3 compatible from the recovery without using a white-list, please let us know in the comments or on the XDA forum!﻿
