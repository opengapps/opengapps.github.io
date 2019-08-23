---
layout: post
title:  "Migration to SourceForge"
date:   2019-08-23
author: nezorflame
---
<div markdown='1'>
![SourceForge]({{ site.blogimg }}sourceforge.png)
</div>
Hello everyone! It's been a while.
You may have noticed that our website has undergone some changes. Today we'd like to share what has been going on with the hosting situation at GitHub and shed some light on our decision to transfer our releases to the [SourceForge].

### The problem

In the [previous post](https://opengapps.org/blog/post/2019/02/17/github-situation/) we've descibed the nature of problems with GitHub and how we had to move the APK repositories to our [Gitlab] instance.

This summer GitHub gave us a new restriction - we had to remove the ZIP packages from the releases, since they were taking up a lot of space and generated enormous amount of traffic. Having around 700,000 visitors per months is quite a load for the hosting.

We considered many options:

- selfhosting releases, like we do with our Gitlab instance ([Hetzner]);
- using some kind of S3-like storage ([Backblaze], [Wasabi]) under the CDN ([CloudFlare], [KeyCDN]);
- using a full hosting solution with mirrors (SourceForge).

### The solution

After the long discussion and testing within the group and the community we've decided to choose **SourceForge**.

This gives us a few benefits:

1. **Cost** - other options are very costy and we just can't afford them in the longterm;
2. **Speed** - SourceForge automatically mirrors your files, giving you the best mirror available for the download;
3. **Simple transition** - we were able to transfer most of our releases from the GitHub repos without any issues, lowering the amount of work;
4. **Release process** - SourceForge has a lot of options regarding the creation of the new releases, in our case we've picked `rsync`.

There was a drawback though. GitHub has a very rich [API](https://developer.github.com/v3/) which we (and many other people) were using, so we had to compensate for that by creating our own [package API](https://github.com/opengapps/package-api) written in Go - this allowed our website to continue operating in the same manner.

### The result

So far, most of the migration work has been finished. Our buildserver is already pushing the packages to our SourceForge [project], and we use it to host the releases from the main page.
Feel free to test this all out and let us know if there are any issues.

All our new releases can now be found at <https://sourceforge.net/projects/opengapps/files>. They are splitted by the architecture and the release date, somewhat alike to what we had on GitHub.
Older releases are mostly already there, we'll eventually fill in the missing packages.

Thanks again to the [SourceForge] - guys are doing amazing job, giving home for the massive amount of the opensource projects, and we're happy to become a part of that community too.

We are also thankful to GitHub for giving us the time and opportunity to move the releases, even though we had exceeded the deadline multiple times, and for still hosting our website and main repositories.

Consider making us a small donation @ PayPal - this will help us with the increased server costs and allow us to continue developing this project.

See you all in the next post!

[Gitlab]: https://gitlab.opengapps.org/opengapps
[SourceForge]: https://sourceforge.net
[Hetzner]: https://www.hetzner.com
[Backblaze]: https://www.backblaze.com/b2/cloud-storage.html
[Wasabi]: https://wasabi.com
[CloudFlare]: https://www.cloudflare.com
[KeyCDN]: https://www.keycdn.com
[project]: https://sourceforge.net/projects/opengapps/
