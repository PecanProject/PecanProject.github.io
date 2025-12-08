---
title: PEcAn 1.3.7 Released
authors: [tony_gardella]
tags: [release, pecan, dalec]
---

PEcAn version 1.3.7 has been released with better support for new model types and the addition of the DALEC model.

<!--truncate-->

## Overview

This version supports new model types better. BETY now allows you to add new model types to the database. You can associate these model types with PFTs. Each model type will have a list of required and optional inputs associated. These inputs will be listed in the `<run><inputs>` tag.

The latest VM can be downloaded from http://isda.ncsa.illinois.edu/download/index.php?project=PEcAn&sort=version

## Support for DALEC

A new model has been added to this release, DALEC. BETY already has a modeltype DALEC in the database to support this model.

## pecan.xml Changes

Using the new modeltypes we can now check the inputs specified in the pecan.xml file. All inputs should now be listed under the `<run><inputs>`. The code will try and update your pecan.xml file to this new format. Any missing inputs that are required will quit the run, allowing you to quickly fix your pecan.xml file.

For updated information see the [PEcAn Configuration wiki](https://github.com/PecanProject/pecan/wiki/PEcAn-Configuration).

## Database Changes

The database requires updates for the model types table. You will need to update BETY to be able to see this. This requires version 3.2 of BETYdb (https://github.com/PecanProject/bety/releases/tag/betydb_3.2).

Sites now store their information as geometry objects. If you have custom queries that use the `site.lat` and `site.lon` information you will need to change this to `ST_X(ST_CENTROID(geometry)) AS lon, ST_Y(ST_CENTROID(geometry)) AS lat`.

## Code Changes

One major change is to the function called `get.trait.data()`. This function now requires a model type as the second parameter. The model type is used to make sure we get the right PFT. This allows multiple PFTs to have the same name, but be distinguishable by the combination of name and model type.
