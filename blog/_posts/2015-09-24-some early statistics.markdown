---
layout: post
title:  "Some early statistics"
date:   2015-09-24
author: mfonville
---
OpenGApps is a relatively young project. If you check our domain information, you'll see we registered [opengapps.org](https://opengapps.org) at June 27<sup>th</sup> 2015, so that is only 3 months ago!
But the project has been received quite well by the community, and each day we keep attracting more people to our website, and more stargazers at GitHub.

Currently we have around 12.000 daily visitors at [opengapps.org](https://opengapps.org), in the weekends even more. Around 45% of those go directly to our website, so probably our loyal group of flashaholics who bookmarked the website :-)
The other visitors are referred to us from a varied set of Android related websites. As to be expected, XDA Forums is the largest, but also many non-English forums and various ROM hosting websites refer their visitors to Open GApps.

Our number of daily downloads is even a little bit higher than the amount of visitors on [opengapps.org](https://opengapps.org), because some users (e.g. those using Pushbullet) directly browse to our releases section on [GitHub](https://github.com/opengapps), without ever going through our website.

We gathered some download statistics over the period of 17<sup>th</sup> of July to the 23<sup>rd</sup> of September and created some graphs to give more insight into which packages are most popular.

First we can have a look at the most popular platforms. Unsurprisingly *ARM* is the most popular, taking around 91.3% market share. But is interesting to see that *ARM64* is already 6.1%, while the  amount of 64 bit devices is relatively limited. With the new set of high end Android devices to be announced this fall we expect this number to increase.

![architectures]({{ site.blogimg }}20150924architectures.png)

Another interesting graph is the set of Android versions that are chosen. *5.1* is clearly dominating, with most custom ROMs being based on the latest Lollipop release. What surprised us though, is the amount of *5.0* downloads. With 6.7% the market share is not large, but with Google itself having released *5.1* very quickly after *5.0*, to fix some serious issues, it is surprising to see that any ROM is still *5.0* based. Especially considering that CyanogenMod's 12 (=*5.0*) branch did also never really mature before switching to 12.1 (=*5.1*) and e.g. lacks important (security) fixes.

![apiversions]({{ site.blogimg }}20150924apiversions.png)

Our final graph is the set of variants chosen. The discontinued *fornexus* variant is left out of the graph since its functionality is now embedded into the other variants (and it had less than 1% anyway). As you can see the *stock* package is the most popular, probably helped by being the default choice when visiting [opengapps.org](https://opengapps.org) without any preset parameters. But all packages have quite some serious share, which shows that there is demand for all the flavours. Not shown in the graph, but important to notice, is that the variant preference varies by Android version. E.g. the devices with *Android 4.4* tend to have a small `/system/` partition, resulting in the smaller packages being more popular. While for *5.1* the larger packages like *stock* and *aroma* are popular choices.﻿

![variants]({{ site.blogimg }}20150924variants.png)
