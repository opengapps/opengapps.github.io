---
layout: post
title:  "The Github situation"
date:   2019-02-17
author: nezorflame
---
<div markdown='1'>
![Pie]({{ site.blogimg }}pie_logo.png)
</div>
Hello everyone!

My name is Ilya Danilkin aka [@nezorflame]. You may know me from my work on the unofficial Oreo/Pie OpenGApps builds at XDA and the support group in Telegram.

On the behalf of the OpenGApps team I'd like to explain the recent problems with our website being unable to serve downloads and the takedown of our application repos at Github.

## The project structure

To understand the problem, first we should take a look at how the OpenGApps are structured and built.
We have multiple repos hosted on Github at <https://github.com/opengapps> which are being used by the buildserver to automatically produce the builds.

The current structure consists of two parts: script repository and the APK repositories.

### Script repository ([/opengapps])

This is the main repo with all the scripts needed to compile an OpenGApps flashable package.
At the [/sources](https://github.com/opengapps/opengapps/tree/master/sources) folder we have 5 subrepos which are being pulled before the build, thus downloading the necessary APKs for the preferred architecture (let's call those subrepos as **APK repos**).
E.g. to build an ARM64 package, we'd need [/all], [/arm] and [/arm64] repos as some of the apps don't have 64-bit version yet.

### APK repositories ([/all], [/arm], [/arm64], [/x86] and [/x86_64])

These are the repositories which are holding all the required APKs. They are being automatically extracted from the Google Pixel [factory images](https://developers.google.com/android/ota) every time they get updated.

These repos are huge in size:

- **all**   :   4.99 GB
- **arm**   : 147.47 GB
- **arm64** :  93.81 GB
- **x86**   :  67.17 GB
- **x86_64**:  26.61 GB

## The problem

Last week (starting February 10th) Github has closed all our APK repos on the account of breaking the [ToS](https://help.github.com/articles/github-terms-of-service/). Namely, the paragraph *C. Acceptable Use* at *4. Services Usage Limits* part. Turns out, they weren't happy with us storing all these big APK files inside of the repositories.

To put it simply:

- it's OK to have a lot of big files at the [Releases] section so that you can host stuff;
- but it's not OK to have big files stored at the repository itself, since Git has poor performance and other issues when the repo gets big.

After [@mfonville] and [@nicholasbuse] had some discussion with the Github support, the result was as follows:

- we shouldn't use these repos to store the APKs the way we did anymore;
- we should shrink the size of the repos, including the commit history;
- the fate of the APK repos isn't solved yet (whether they'll be removed or not) - discussion is still open about that;
- we still can store the OpenGApps builds in the [Releases] section of our repos (not in the APK repos though since it's not yet clear whether they'll be removed or not);
- the access will be restored for a week to enable us to do maintenance and to solve the problem once and for all.

It was pretty clear that we had to act in order to solve the problem and to restore out infrastructure to continue the builds.

We had multiple options to choose from, including, but not limited to:

- moving to some other public Git hosting, like [GitLab](https://gitlab.com/) or [Bitbucket](https://bitbucket.org/) (this may solve the issue for now, but no one can guarantee that a new hoster wouldn't have a same rule in the future forcing us to move again);
- hosting the Git repos ourselves (saves us from the ToS nonsense, but leaves us with the hosting problem and the increased costs);
- restructuring the whole APK repository system, like extracting all the APKs to their own subrepos (this may still happen in the future, but it requires a lot of work which we currently don't have the time for).

## The solution

For now we've decided to pick the second option, as in to self-host our APK repos with [GitLab Community Edition](https://about.gitlab.com/is-it-any-good/).

This gives us three main benefits:

1. It allows to use the same infrastructure for the buildserver, which will only require to redirect the scripts in the [/opengapps] repo to the new Git remotes, hence saving the time;
2. We can have better control over the content overall;
3. We can restructure the project later on our terms, with possibly moving away from Github completely and using some filestorage solution to host the releases (e.g. [Amazon AWS S3](https://aws.amazon.com/s3/) / [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces/) to speed up the traffic and ease the load).

Thanks to the hosting which we're now using (btw, big shoutout for [Hetzner](https://www.hetzner.com/), they have really good servers with decent pricing and support), we were able us to accomplish this task without any serious issues.

Here's the current situation:

- APK repos are now hosted at <https://gitlab.nezorfla.me/opengapps> which is a public repository group with full Read access.
- You can't register here as of yet (I've disabled the registration for now to ease the load on the server, may re-enable it in the future), so the editing of these repos for now is limited to the main project contributors.
- Since the repos are public yet only in Read mode, you can't make merge requests (since you have to register to submit a MR). So, in case you have a merge request and we deem it important enough to integrate into our APK repos, you can get in contact with me or one of our [maintainers](https://gitlab.nezorfla.me/groups/opengapps/-/group_members) so that we could sort it out.
- These repos are here to stay, at least until we decide how the future infrastructure will look like (e.g. would we use the repository-per-APK method or something else).
- Our main [/opengapps] repo will still be hosted at Github since we've confirmed that it's not a problem to have it there, and we'll update it very soon to use the new addresses for our APK repos.
- All OpenGApps releases will still be hosted at Github [Releases] page, at least until [@mfonville] will be able to upgrade the buildserver and the website to use something else for the filestorage (and we have an actual filestorage to begin with). We know that it's slow and sometimes problematic, but we ask you to bear with us for now.

## Epilogue

So, this concludes the story of how Github decided to close our repositories.
I'd like to mention that even though our main project maintainers have a very little time to contribute to it right now, we're still positive on the future of the OpenGApps.
With the help of the public contributors (like [@SpasilliumNexus], [@osm0sis] and many others, including myself), we look forward to the future release of the Android Q, hoping to face it stronger than ever with the improved infrastructure and timely updates to these Google Apps you're all craving for :)
I hope that this was the last serious issue and we won't face anything like this for a long time.
Consider making us a small donation @ PayPal - this will help us with the increased server costs and motivate us even further to continue developing this amazing project.

See you all in the next post!

[/opengapps]: https://github.com/opengapps/opengapps
[Releases]: https://github.com/opengapps/opengapps/releases
[/all]: https://github.com/opengapps/all
[/arm]: https://github.com/opengapps/arm
[/arm64]: https://github.com/opengapps/arm64
[/x86]: https://github.com/opengapps/x86
[/x86_64]: https://github.com/opengapps/x86_64
[@mfonville]: https://github.com/mfonville
[@nicholasbuse]: https://github.com/NicholasBuse
[@SpasilliumNexus]: https://github.com/SpasilliumNexus
[@osm0sis]: https://github.com/osm0sis
[@nezorflame]: https://github.com/nezorflame
