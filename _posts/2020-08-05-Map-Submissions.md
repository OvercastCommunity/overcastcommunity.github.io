---
title: Map Submissions
author: Crazy_
categories: announcement
---

Hey everyone! We've been toying with the idea of opening up community map submissions for a few months now. Today we’re pleased to announce it’s finally happening, thanks to support made possible by some recent PGM features. This post will go through the submission process and answer some obvious questions, be sure to read everything! 

# The submission process

Submissions will be done [here](https://github.com/OvercastCommunity/CommunityMaps/issues/new/choose). To submit your map, select the Map Submission template, and fill in the correct information. If you're looking for any more help, feel free to refer to this example map submission found [here](https://github.com/OvercastCommunity/CommunityMaps/issues/1). Alternatively, you can create a pull request to the CommunityMaps repo with your map and submit it to us that way.

A Map Developer or a member of the map making community will respond to your map submission issue and give feedback. Please be open to altering some map details if requested. We'll go though your XML and point out any issues as well. If your map is accepted, it'll be added to the server for testing. We'll be hosting community map testing events every week or so. If more changes are needed before putting your map on the public rotation, feedback will be posted in the original submission issue.

Know that by submitting a map to the community [repository](https://github.com/OvercastCommunity/CommunityMaps), you are also agreeing to put your map under the same license as the repository itself (CC BY-SA). For more information about licensing you can read [here](https://github.com/OvercastCommunity/CommunityMaps/blob/master/README.md).

# What are we looking for?

We're excited to see what you can create, getting some new maps for our map pools would be awesome! If you made a map for another server, or even if you still have a map kicking around from a map submission you never got around to on OCN, feel free to submit it, we'll accept those as well.

As for what sort of map you can submit, go wild. We're trying to make sure we don't set too many limitations, however we figure it's worth mentioning that a map catered to fit in one of our more commonly active map pools (Micro, Centi, and Hecto) has a higher chance of being played, if accepted.

# Submission requirements

All maps should be created in Minecraft version 1.8. If you made a map previously that you want to submit, please run it through a [nbt converter script](https://github.com/mitchts/nbt-converter) to ensure the map's nbt datas will work and remove any 1.9+ blocks and items from the map.

Maps should have a XML accompanying your submission. For new maps, the XML proto should be in 1.4. However with old map submissions (maps that were created long ago) it'll be permittable to submit a XML in a lower proto. Please ensure you're following our [XML conventions](https://pgm.dev/docs/guides/xml-pointers/conventions). If you need help with your XML you can read through the documentation over at [pgm.dev](https://pgm.dev) or ask for help in #maps in our [Discord](https://oc.tc/discord).

Make sure to prune your maps and clean up any [unneeded files](https://pgm.dev/docs/guides/packaging/cleaning-files) from the map folder before submitting!

# FAQ

## Where do I build my map?

Not sure where to get started, or don't know where to build your map? Here's a couple of different options we recommend!

Stratus Network have kindly offered their map building server, Anax, to be used. For all their info on how to use the server and where to login, check out their [Anax Guide](https://stratus.network/anax). This is probably the easiest place to build a map, they have all the tools you could need ready with just a couple of clicks.

Alternatively, if you're tech savvy, you could set up your own map building localhost server. Or, set yourself up in singleplayer with the help of a couple mods, like WorldEdit.

## Can my submission get closed for inactivity?

Yes, if you get a response on your submission make sure to respond to it before 7 days has passed. Any submission with a reply from a Map Developer which is inactive for 7 days will be closed. Do not re-open closed issues!

## I have an update for a map I made that was accepted, how do I submit it?

Create another map submission issue with the download for the new updated map, and explain what's been changed in the issue. Or make a pull request with the changes and do it that way.
