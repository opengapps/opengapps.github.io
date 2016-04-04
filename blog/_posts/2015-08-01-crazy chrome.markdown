---
layout: post
title:  "Crazy Chrome"
date:   2015-08-01
author: mfonville
---
<div markdown='1'>
![Crazy Chrome!]({{ site.blogimg }}crazychrome.png)
</div>
Last week was quite a hectic one for the packagers and developers of Open GApps. Google released a new stable branch of Chrome into the Play Store using their own forked 'Crazy Linker'.
At first this was unknown, so when the new [Chrome got committed to the repository](https://github.com/opengapps/arm/commit/b8f9df7778896e3310a1100fdca1f73a4166f333) suddenly different errors started to appear.

So, what happened and what went wrong? An application like Chrome is stored in an APK, which is a kind of ZIP-file.
Normally, when preparing an APK to be included on the `/system/` partition of your device, all files that are part of the lib-folder within this APK are extracted and stored separately in a `/lib/`-folder next to the APK. The APK itself is stripped from this lib-folder.

But when Chrome started to use this special linker application, this has changed. Suddenly we should not extract everything from `/lib/`, but exclude `crazy.libchrome.align` and `crazy.libchrome.so` from extraction. They have to be kept within the APK in a special non-compressed manner.

So this had to be implemented in the code of the Open GApps scripts, which was done in a [quick (and dirty) code fix](https://github.com/opengapps/opengapps/commit/feeda41357d830d2ef6d3f97614c8bd477860351) that had to be ready within a few hours, so that everything would be in place for next day's release.

In the end, everything worked out, and you as user might not have noticed anything. But for us it were some hectic hours, trying to find the source of the errors and fixing it!﻿
