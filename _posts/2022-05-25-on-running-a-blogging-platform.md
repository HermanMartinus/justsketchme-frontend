---
title: On running a blogging platform
date: 2022-05-24 22:00:00 +0000
permalink: micbrologging-platforms-herman-martinus
description: 'Our co-founder and director dishes on microblogging, warts and all. '
image: blob:https://imgur.com/788e92ad-507f-45a0-b857-16039ecb6bbd
icon: blob:https://imgur.com/788e92ad-507f-45a0-b857-16039ecb6bbd
author: Herman Martinus

---
![](/uploads/social-media.png)

Recently I wrote a short [TellHN piece](https://news.ycombinator.com/item?id=31233600) on my experience running a minimal blogging platform. It got a decent number of views and questions and I thought it a good idea to write a longer post expanding on it.

Here goes!

### git init

I started [Bear](https://bearblog.dev/) almost by accident as I was creating a personal blog for myself (again). That's a bit of a longer story which I've written about [here](https://herman.bearblog.dev/the-hacker-news-hug/). In a nutshell, I really wanted a simple blog that focused on speed, accessibility, and legibility. This was a weekend project which just happened to explode on HackerNews (and got hugged to death on its first week).

The initial spurt of signups from HackerNews got the ball rolling and I found myself inundated with emails, bug reports, and a few cheeky hackers trying to penetrate the system. This growth was pretty inspiring and I put a decent amount of time into growing and stabilising the platform over the proceeding months.

### git commit

I worked on-and-off on Bear as I was (and still am) running [another company](https://justsketch.me/) which is responsible for my salary. Yet over time, I managed to squash most bugs and vulnerabilities, as well as add a few more useful features.

The ability to add custom domains and custom styles was catalytic for another spurt of signups. People could now express themselves more creatively on the platform.

The difficult part of growing out the features of Bear was holding back on all the ideas I had. The main selling point of the platform is simplicity and I was worried that if I added too much it would lose what makes the platform awesome. This was compounded by many feature requests from users for everything from infinite scroll to functional rich text editors. I had to get really good at saying no.

### git branch -d spam-control

As it grew (mostly from people reading my personal blog) it ran into the growing pains that all semi-successful content platforms inevitably run into: spam.

This can be pretty bad for a platform if not handled quickly as the spam accounts can poison the domain for search engines, ruining the discoverability of legitimate content.

It started out with me watching new blogs for spam content and removing them as they came. It was a slow and arduous process which required me to be on the ball the entire time.

Another potential solution I considered would be to allow other users to flag spam. But this would still allow spam accounts to slip through unnoticed until Google blacklisted the domain.

I tried automating spam filtering, but this had the potential to turn into an arms race between me and the spammers. It's important to note that these were not bots setting up accounts. They were real people in backlink farms, selling backlinks to customers on Fiverr.

The solution I settled on (which I still use to this day) is quick and elegant; as well as super accurate. All the blogs start out as non-discoverable by search engines and do not show up on the Bear feed until they have been vetted by yours truly. I then set up a Tinder-esque review screen where I can easily approve or block a new blog (as well as blacklist that email address).

This little system cut down my review time to about 15-20 minutes per week. I wrote about it in a bit more depth [here](https://herman.bearblog.dev/5-hours-to-15-minutes/).

### git checkout server-fees

"But Herman, what's in it for you? How do you make money from this?" you ask.

From the beginning, I intended for Bear to be open-source, free, and privacy-respecting. I also wanted it for myself as it solves my problems perfectly. The server costs are low due to the text-only nature of the platform. However, low is not zero.

There are currently around \~5,500 blogs running on Bear. This is manageable right now but I had to start paying for a few services which could scale expensively.

About a year ago I opened up the option for sponsors to support the project and was surprised when people hopped on board. It was quite refreshing to feel the tangible appreciation of some users.

The unfortunate fact of the matter, though, is that 99.9% of people will not contribute to anything they can receive for free. I was also getting a bit inundated with support requests, pretty much entirely from people who needed help setting up their DNS records. I wrote and improved [the documentation](https://github.com/HermanMartinus/bearblog/wiki/Custom-domains), but despite this, I still kept receiving many emails for support. It's shocking how few people can follow documentation and will send off an email instead.

This was roughly the same time the idea of [Sponsorware](https://github.com/sponsorware/docs) was brought to my attention (thanks [Caleb Porzio](https://calebporzio.com/i-just-hit-dollar-100000yr-on-github-sponsors-heres-how-i-did-it)!). This is where I started offering custom domains (and beta features) to sponsors of the project (grandfathering people with existing custom domains, of course). This lead to a pretty sharp uptick in sponsors for the project. Marginally enough to justify me helping people figure out the mystical arts of DNS management.

### git blame

This entire project has been a mixed bag for me. I've had days where I am excited to work on something that I was thinking about in the shower, only to have that snuffed out by an email from someone treating me like a customer service agent.

There have been periods of time where I find myself deep in the code-base experimenting and building. Then there are other times when I don't touch the project for weeks except to review the new blogs.

### git status

So what now?

As with all software, there is no such thing as "done". There are more bugs to be squashed, more features to be refined, and more Herokus to migrate off of (I'm looking at [Fly.io](https://fly.io/) for Bear's next home).

I have a roadmap set up [here](https://github.com/HermanMartinus/bearblog/wiki/Roadmap), but this doesn't really illustrate the extent of my plans for Bear. What's been taking up my time recently is getting [Litestream](https://litestream.io/) to replicate a sqlite database for Bear. This would be neat, even faster, and more succinctly align with the Bear ethos of simplicity and speed.

Overall, I love this project and _most of_ its users. The overarching plan for Bear is a resilient and long-lasting platform for individual writing on the internet.

I'm in Bali with my girlfriend at the moment so I am taking life easy; working on Bear while sipping on coconuts.