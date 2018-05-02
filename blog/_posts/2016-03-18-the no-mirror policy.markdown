---
layout: post
title:  "The no-mirror policy"
date:   2016-03-18
author: mfonville
---
<div markdown='1'>
![Question Mirror]({{ site.blogimg }}questionmirror.jpg)
</div>
We sometimes get questions asking about mirrors or people uploading the [OpenGApps.org](https://opengapps.org) pre-built packages to mirrors, which violates our license terms. In this post we will try to give some insight behind the rationale of the no-mirror policy of the OpenGApps.org pre-built packages:

#### Technical merit
The very first reason it technical: we want users to use the latest, greatest and most up-to-date version. The rationale behind the project was to be able to do automated builds to achieve this goal and it would be weird to forfeit this. To make this easy, we made it possible to [hotlink](https://github.com/opengapps/opengapps/wiki/Hotlinking-to-OpenGApps.org) and automatically download the latest versions for e.g. ROM devs their OPs on XDA.
This eliminates the need for mirrors which would be outdated within one day.

#### Support and educate users
The second reason is support and documentation. If just uploading the package to a filehost it isn't accompanied by any documentation or access to a support forum. If offered via OpenGApps.org there are direct links to the [Wiki](https://github.com/opengapps/opengapps/wiki), [XDA Forum](https://forum.xda-developers.com/android/software/Open-GApps-t3098071), the [source code](https://github.com/opengapps/opengapps) and existing bug reports. This helps users find their way and to benefit most from the various features offered by the package.

#### Fostering community
Another very import reason is fostering a community. Open source does not mean “just download and ignore where it comes from”. For open source projects it is critical that people are aware of where their software originates from, the rationale behind it, how to contribute and how to get involved. If users of the software can't get acquainted with the project, the project won't be able to attract new potential volunteers and would have a large chance to die. OpenGApps.org is a HUB for the users of Open GApps, that enables them to get acquainted with the project and support it.

#### Inclusive to all
Also this policy benefits the people who are using less popular architectures, apis and variants. The amount of *ARM 5.1* and *6.0* downloads each day is huge, but some people use less popular builds, like 4.4 x86, that only has a few downloads each day. To be able to compile builds every day for everyone instead of just the popular few packages, the buildbot compiles and uploads more than 20GiB of new packages every day. That is not without costs and the ads and donations on opengapps.org support us to do this. If you download an *ARM 6.0 pico* on our website and you see an advertisement, you are i.e. funding the *4.4 x86* users' download.

#### Acknowledge, credit and motivation
Another aspect of open source projects and voluntary work is that it is important to give credit where it is due and respecting people's efforts: volunteering projects can only strive because of the many people involved that contribute with their knowledge and skills. If filehosts offer the downloads without any reference to the context to the people who made it possible, it neglects this important aspect of keeping people motivated to put in the many hours they do. That is why direct access to the e.g. the source code commits is important.

#### Trust and security
Trustworthiness, the packages from OpenGApps.org are signed with a custom certificate, to ensure people that they were built by us. People can choose to trust OpenGApps.org's packages to be signed with this certificate had no changes compared to the GitHub source code and don't contain APKs that were tampered with.

#### What if downloads are slow?
Sometimes people experience slow downloads from OpenGApps.org. The OpenGApps.org packages are hosted on GitHub Releases, which is hosted on the Amazon Web Services Cloud. Most of the time and in most places of the world their service is good and reliable, but for some users it is sometimes slow. If it is slow, you can [write to GitHub](https://github.com/contact) to let them ask Amazon for a solution.

#### Compile; don't copy!
If you want to upload your own Open GApps variant, you are free to do so. The source code of Open GApps is freely available and everybody can compile and upload their own builds and variants, which you can distribute under various terms (as long as in compliance with the [Open GApps license](https://github.com/opengapps/opengapps/blob/master/LICENSE)). Please just don't use copy-paste the pre-built ones from OpenGApps.org.﻿
