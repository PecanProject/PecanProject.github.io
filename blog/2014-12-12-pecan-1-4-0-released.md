---
title: PEcAn 1.4.0 Released
authors: [tony_gardella]
tags: [release, pecan]
---

PEcAn version 1.4.0 has been released with major new meteorological data handling capabilities.

<!--truncate-->

## Overview

This version supports conversion of met files. The code can now download and convert the met data to CF standard and to model specific format. The met data will along the way be gap filled. This allows any researchers to pick any Ameriflux site and run the SIPNET model on this site.

The latest VM can be downloaded from [NCSA](http://isda.ncsa.illinois.edu/download/index.php?project=PEcAn&sort=version).

## pecan.xml Changes

The met tag can now support a special notation that lets it download and convert the met data. The met tag can have an `input="Ameriflux"` and `output="sipnet"` attribute. Currently these are the only supported conversion but more will be added in future releases of PEcAn.

## Web Interface Changes

When running in the web interface you now have the ability to edit the pecan.xml before the software runs. This allows you to change the number of ensemble runs done, as well as any other changes to the pecan.xml.

After the run finishes, you can now download the sipnet clim file used for a particular run. You can now also plot different variables against each other instead of time vs one of the variables.
