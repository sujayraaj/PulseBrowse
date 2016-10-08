# PulseBrowse

An unopinionated web browser in making that wants to get rid of the tabs nonsense that has plagued web browsers.

## Features ( planned ) 

1. No tab-bar. This also means no clutter with small icons at the top where you can't figure out which tab is playing obscene songs that you want to close.

2. Multiple tabs per screen when you want to multitask.

3. A versatile tab management system  ( sounds good, under construction )

## Installation and usage

This will be packaged into a standalone application once development reaches a certain threshold. 

This is based on electron v1.4.1. I didn't add electron in package.json as it was too slow and I don't know ( yet ) if there are mirroring services available.
get precompiled electron at

https://github.com/electron/electron/releases/

This also uses bower to manage packages that are to be shipped along with this application. 

The usual install process goes:

~~~~ npm install ~~~~

~~~~ bower install ~~~~

~~~~ electron /path/to/the/repository/ ~~~~

## Current Status

Opens the browser window with one tab floating hopefully showing google.com.




